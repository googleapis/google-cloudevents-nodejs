import * as fs from 'fs';
const recursive = require("recursive-readdir");

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
  const filePaths: string[] = await recursive("cloud");

  // Get every data type file path
  const dataTsFilePaths = filePaths.filter((path) => {
    const typeFilenamePostfix = 'Data.ts'
    return path.endsWith(typeFilenamePostfix);
  });
  
  // Read type file
  dataTsFilePaths.map(filename => {
    // For a single type file
    console.log(`- Fixing: ${filename}`);
    const typeFileContent = fs.readFileSync(filename).toString();

    // Get 2nd interface
    const lines = typeFileContent.split('\n');
    const interfaceLines = lines.filter((line) => {
      return line.startsWith('export interface');
    });

    // The data name, e.g. 'export interface AuditLogWrittenEvent {'
    const dataEventName = interfaceLines[1]
        .split(' ')
        .filter((token) => token.endsWith('Event'))[0];

    const newTypeFileContent = typeFileContent + `
/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {${dataEventName}} The object with type annotations
 */
export const to${dataEventName} = (json: object) => {
  return json as ${dataEventName};
};`;
    // Write the updated file back
    fs.writeFileSync(filename, newTypeFileContent);
  });
})();