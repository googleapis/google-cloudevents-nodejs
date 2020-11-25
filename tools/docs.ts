const fetch = require('node-fetch');
const fs = require('fs');

// Config
const CATALOG_URL = 'https://googleapis.github.io/google-cloudevents/jsonschema/catalog.json';
const README_START = '<!-- GENERATED START -->';
const README_END = '<!-- GENERATED END -->';

/**
 * Gets markdown type documentation for this library.
 * @param {object} catalog The JSON schema event catalog.
 * @example
 * {
 *   url: 'https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/firestore/v1/DocumentEventData.json',
 *   product: 'Cloud Firestore',
 *   name: 'DocumentEventData',
 *   description: 'The data within all Firestore document events.',
 *   datatype: 'google.events.cloud.firestore.v1.DocumentEventData',
 *   cloudeventTypes: ['first', 'second']
 * }
 * @returns {string} Markdown for the Node type documentation.
 */
function getTypeDocumentation(catalog: any): string {
  const result: any[] = catalog.schemas.map((schema: any) => {
    const requirePath = `@${schema.datatype.replace(/\./g, '/')}`
    const toFunction = `to${schema.name}`;
    const requireString = `const {${toFunction}} = require('${requirePath}');`;
    const importString = `import {${schema.name}} from '${requirePath}';`;

    return '' +
`### ${schema.product}

${schema.description}

#### CloudEvent Types:

${schema.cloudeventTypes?.map((t: string) => `- \`${t}\``).join('\n')}

#### JS

\`\`\`js
${requireString}

const data = {
  // ...
};

const jsExample = ${toFunction}(data);
console.log(jsExample);
\`\`\`

#### TS

\`\`\`ts
${importString}

const data = {
  // ...
};

const tsExample: ${schema.name} = data;
console.log(tsExample);
\`\`\`
`;
  });
  return result.join('\n');
}

/**
 * Replaces the contents of a string's GENERATED comments with a replacement.
 * @param {string} s The string to replace.
 * @param {string} replacement The replacement string.
 */
const getGeneratedStringWithReplacement = (s: string, replacement: string) => {
  const README_GEN_START = '<!-- GENERATED START -->';
  const README_GEN_END = '<!-- GENERATED END -->';

  const README_BEFORE_TABLE = s.substring(0, s.indexOf(README_GEN_START) + README_GEN_START.length);
  const README_AFTER_TABLE = s.substring(s.indexOf(README_GEN_END));

  // Return result (with newlines)
  return `${README_BEFORE_TABLE}
${replacement}
${README_AFTER_TABLE}`;
};

// Runs the generator
(async () => {
  const catalog = await fetch(CATALOG_URL);
  const catalogJSON = await catalog.json();
  
  const nodeDocumentation = getTypeDocumentation(catalogJSON);

  const README_PATH = `${__dirname}/../README.md`;
  const readmeContents = fs.readFileSync(README_PATH).toString();
  const updatedReadmeContents = getGeneratedStringWithReplacement(readmeContents, nodeDocumentation);

  // Save updated README
  fs.writeFileSync(README_PATH, updatedReadmeContents);
})();

