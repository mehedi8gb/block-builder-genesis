export interface Block {
    id?: string;
    block: string;
    props: Record<string, any>;
    variant?: string; // optional per-block variant
    responsive?: {
        sm?: Partial<Block>;
        md?: Partial<Block>;
        lg?: Partial<Block>;
        xl?: Partial<Block>;
    };
}
