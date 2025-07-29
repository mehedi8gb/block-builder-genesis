'use server';

import path from 'path';
import fs from 'fs/promises';
import YAML from 'js-yaml';

export async function loadThemeFile(themeName: string): Promise<unknown> {
    const themeDir = path.join(process.cwd(), 'src', 'core', 'themes');

    // Try both .yml and .json if extension not provided
    const tryFiles = [
        `${themeName}.yml`,
        `${themeName}.yaml`,
        `${themeName}.json`,
        themeName, // if full name like themeName.json is already given
    ];

    for (const file of tryFiles) {
        const filePath = path.join(themeDir, file);

        try {
            const content = await fs.readFile(filePath, 'utf-8');

            if (file.endsWith('.yml') || file.endsWith('.yaml')) {
                return YAML.load(content);
            }

            if (file.endsWith('.json')) {
                return JSON.parse(content);
            }
        } catch (e) {
            // silently try next file
        }
    }

    throw new Error(`Theme "${themeName}" not found as .yml or .json in ${themeDir}`);
}