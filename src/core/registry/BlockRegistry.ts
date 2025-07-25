// BlockRegistry.ts
import React from "react";

type ComponentType = React.ComponentType<any>;

export default class Registry {
    private static components: Map<string, ComponentType> = new Map();

    static register(name: string, component: ComponentType) {
        this.components.set(name, component);
    }

    static get(name: string): ComponentType | undefined {
        return this.components.get(name);
    }

    static getAll(): ComponentType[] {
        return Array.from(this.components.values());
    }

    static keys(): string[] {
        return Array.from(this.components.keys());
    }
}
