// app/page.tsx
export const dynamic = "force-dynamic";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { PageRenderer } from "@/components/PageRenderer";
import { getActiveTheme } from "@/lib/themeService";

export default async function HomePage() {
  const theme = await getActiveTheme();
  console.log("from index page", theme.name)

  const result = (
    <ThemeProvider defaultTheme={theme}>
      <PageRenderer page="home" />
    </ThemeProvider>
  );

  return result;
}
