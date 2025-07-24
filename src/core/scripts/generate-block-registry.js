// scripts/generate-block-registry.js

const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../blocks");
const OUT_PATH = path.resolve(__dirname, "../registry/block-registration.ts");

function generateBlockRegistry() {
    const files = fg.sync(["*/**/*.tsx"], { cwd: ROOT });
    const imports = [];
    const registrations = [];

    files.forEach((file, index) => {
        const filePath = `@/core/blocks/${file.replace(/\\/g, "/").replace(/\.tsx$/, "")}`;
        const blockName = path.basename(file, ".tsx");
        const variableName = `${blockName}`;

        imports.push(`import {${variableName}} from '${filePath}';`);
        registrations.push(`Registry.register('${blockName}', ${variableName});`);
    });

    const content = `// AUTO-GENERATED FILE - DO NOT EDIT
import Registry from '@/core/registry/BlockRegistry';
${imports.join("\n")}

${registrations.join("\n")}
`;

    fs.writeFileSync(OUT_PATH, content, "utf-8");
    console.log(`✅ block-registration.ts generated (${files.length} blocks)`);
}

module.exports = { generateBlockRegistry };
