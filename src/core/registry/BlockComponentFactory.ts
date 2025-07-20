import BlockRegistry from '@/core/registry/BlockRegistry';

export class BlockComponentFactory {
    static resolve(blockName: string) {
        return BlockRegistry.get(blockName);
    }
}
