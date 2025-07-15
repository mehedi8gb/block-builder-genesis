import React from 'react';
import {Block} from '@/types/theme';
import {getBlockComponent} from '@/lib/BlockRegistry';

interface DynamicRendererProps {
    blocks: Block[];
    className?: string;
    params?: Record<string, string>;
}

export function DynamicRenderer({blocks, className = "", params}: DynamicRendererProps) {
    if (!blocks || blocks.length === 0) {
        return null;
    }

    return (
        <div className={className}>
            {blocks.map((block, index) => {
                const BlockComponent : React.ComponentType<any> = getBlockComponent(block.block);
                console.log(block);

                if (!BlockComponent) {
                    return (
                        <div key={block.id || index} className="p-4 bg-red-100 border border-red-300 rounded">
                            <p className="text-red-700">
                                Block "{block.block}" not found in registry
                            </p>
                        </div>
                    );
                }

                return (
                    <BlockComponent
                        key={block.id || index}
                        props={block.props}
                        params={params}
                    ></BlockComponent>
                );
            })}
        </div>
    );
}
