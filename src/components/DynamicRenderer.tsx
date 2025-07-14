
import React from 'react';
import { Block } from '@/types/theme';
import { getBlockComponent } from '@/lib/BlockRegistry';

interface DynamicRendererProps {
  blocks: Block[];
  className?: string;
}

export function DynamicRenderer({ blocks, className = "" }: DynamicRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const BlockComponent = getBlockComponent(block.block);
        
        if (!BlockComponent) {
          return (
            <div key={block.id || index} className="p-4 bg-red-100 border border-red-300 rounded">
              <p className="text-red-700">
                Block "{block.block}" not found in registry
              </p>
            </div>
          );
        }

        const props = {
          ...block.props,
          ...(block.child ? { child: block.child } : {})
        };
        
        return (
            <BlockComponent
                key={block.id || index}
                {...(props as any)} 
            />
        );
      })}
    </div>
  );
}
