import { ThemeProvider } from "@/contexts/ThemeContext";
import { getActiveTheme } from "@/lib/themeService";
import { ProductClient } from "./ProductClient";

// @ts-ignore
export default async function ProductPage({ params }) {
  const theme = await getActiveTheme();

  return (
    <ThemeProvider defaultTheme={theme}>
      <ProductClient slug={params.slug} />
    </ThemeProvider>
  );
}
