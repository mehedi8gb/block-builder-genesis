"use client";
// app/product/[slug]/page.tsx

import {ThemeProvider} from '@/contexts/ThemeContext';
import {PageRenderer} from '@/components/PageRenderer';
import {useProductStore} from "@/stores/useProductStore";
import {useParams} from "next/navigation";

export default function ProductPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = useProductStore((state) => state.getBySlug(slug));

    return (
        <ThemeProvider defaultTheme="default">
            <PageRenderer page="product" data={product}/>
        </ThemeProvider>
    );
}
