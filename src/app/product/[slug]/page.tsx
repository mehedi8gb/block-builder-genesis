import { ProductClient } from "./ProductClient";

// @ts-ignore
export default async function ProductPage({ params }) {

  return (
      <ProductClient slug={params.slug} />
  );
}
