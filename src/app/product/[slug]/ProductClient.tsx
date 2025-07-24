'use client';

import { PageRenderer } from '@/components/PageRenderer';
import { useProductStore } from '@/stores/useProductStore';

interface Props {
  slug: string;
}

export function ProductClient({ slug }: Props) {
const product = useProductStore((state) => state.getBySlug(slug));

  return <PageRenderer page="product" data={product} />;
}
