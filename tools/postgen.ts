import * as fs from 'fs';
const recursive = require('recursive-readdir');

/**
 * This tool makes the generated code from the quicktype wrapper usable to TypeScript clients.
 *
 * Prerequisites:
 * - A `cloud/` folder with `*Data.ts` files within subfolders.
 *
 * TypeScript "toTYPE" function:
 * - Loop through every type (ts file)
 *   - 1st interface: wrapper type (ignore)
 *   - 2nd interface: main type (use this). i.e. AuditLogWrittenEvent
 * - Add a to[TYPE] function to the file. Example:
 *     export const toMessagePublishedEvent = (json: object) => {
 *       return json as MessagePublishedEvent;
 *     };
 */

// Wrap in IIFE for top-level await
(async () => {
  const filePaths: string[] = [
    ...(await recursive('cloud')),
    ...(await recursive('firebase')),
  ];

  // Get every data type file path
  const dataTsFilePaths = filePaths.filter(path => {
    const typeFilenamePostfix = 'Data.ts';
    return path.endsWith(typeFilenamePostfix);
  });

  // Read type file
  dataTsFilePaths.forEach(filename => {
    // For a single type file
    console.log(`- Fixing: ${filename}`);
    const typeFileContent = fs.readFileSync(filename).toString();

    // Get TS interfaces
    let lines = typeFileContent.split('\n');
    const interfaceLines = lines.filter(line => {
      return line.startsWith('export interface');
    });

    // Allow TS Date types to be strings
    lines = lines.map((l: string) => {
      return l.replace('Date;', 'Date | string;');
    });

    // The data name, e.g. 'export interface MessagePublishedData {'
    const dataName = interfaceLines[0]
      .split(' ')
      .filter(token => token.endsWith('Data'))[0];

    const newTypeFileContent =
      lines.join('\n') +
      `
/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {${dataName}} The object with type annotations
 */
export const to${dataName} = (json: object) => {
  return json as ${dataName};
};`;
    // Write the updated file back
    fs.writeFileSync(filename, newTypeFileContent);
  });
})();
