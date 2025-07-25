// src/core/blocks/index.ts
"use client"

import BlockRegistry from '@/core/registry/BlockRegistry';
import {ComponentType} from 'react';

// @ts-ignore
const requireComponent = require.context(
    '../blocks/', // current directory, adjust if needed
    true,
    /\/[A-Z][\w-]+\/[A-Z][\w-]+\.tsx$/
);

requireComponent.keys().forEach((fileName: string) => {
    const componentModule = requireComponent(fileName);

    function isReactComponent(value: unknown): value is ComponentType<any> {
        return (
            typeof value === 'function' ||
            (typeof value === 'object' && value !== null && 'render' in value)
        );
    }

    const componentExportName = fileName.match(/\/([A-Z][\w-]+)\.tsx$/)?.[1];

    Object.entries(componentModule).forEach(([exportName, component]) => {
        if (isReactComponent(component)) {
            const key =
                exportName === 'default' && componentExportName
                    ? componentExportName
                    : exportName;

            // console.log(`🔍 Registering component: ${key} from ${fileName}`);
            BlockRegistry.register(key, component);
        } else {
            console.warn(`⚠️ Skipped non-component export "${exportName}" from ${fileName}`);
        }
    });

});
console.log(`✅ ${BlockRegistry.getAll().length} components registered.`);
