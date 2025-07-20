import React from 'react';
import { Block } from '@/types/theme';
import { BlockComponentFactory } from '../registry/BlockComponentFactory';

interface Props {
    block: Block;
    index: number;
    params?: Record<string, string>;
    data?: Record<string, any>;
}

export const BlockRenderer: React.FC<Props> = ({ block, index, params, data }) => {
    const Component = BlockComponentFactory.resolve(block.block);

    if (!Component) {
        return (
            <div key={block.id || index} className="text-center p-4 bg-red-100 border border-red-300 rounded">
                <p className="text-red-700">
                    Block "{block.block}" not found in registry
                </p>
            </div>
        );
    }

    return (
        <Component
            key={block.id || index}
            props={block.props}
            params={params}
            data={data}
        />
    );
};
