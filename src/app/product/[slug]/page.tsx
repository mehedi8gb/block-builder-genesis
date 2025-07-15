// app/product/[slug]/page.tsx

import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

interface ProductPageProps {
    params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;

    return (
        <ThemeProvider defaultTheme="default">
            <PageRenderer page="product" params={{ slug }} />
        </ThemeProvider>
    );
}
