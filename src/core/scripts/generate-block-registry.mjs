// scripts/generate-block-registry.mjs
import fg from "fast-glob";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const ROOT = path.resolve("src/core/blocks");
const OUT_PATH = path.resolve("src/core/registry/block-registration.ts");


const files = fg.sync(["*/**/*.tsx"], {cwd: ROOT});
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
console.log(
    chalk.green(`   ✓ block-registration.ts generated `) +
    chalk.hex('#AD7FA8')(`(${files.length} blocks ✅ ) `) +
    chalk.gray(`at ${OUT_PATH}`)
);




