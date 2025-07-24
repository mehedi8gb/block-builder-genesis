import React from 'react';
import { BlockRenderer } from './BlockRenderer';
import { Block } from '@/core/types/theme';

interface Props {
    blocks: Block[];
    className?: string;
    params?: Record<string, string>;
    data?: Record<string, any>;
}

export const DynamicRenderer: React.FC<Props> = ({ blocks, className = '', params, data }) => {
    if (!blocks?.length) return null;
    return (
        <div className={className}>
            {blocks.map((block, index) => (
                <BlockRenderer
                    key={block.id || index}
                    block={block}
                    index={index}
                    params={params}
                    data={data}
                />
            ))}
        </div>
    );
};
