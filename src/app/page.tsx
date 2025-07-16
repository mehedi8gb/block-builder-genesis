// app/page.tsx
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PageRenderer } from "@/components/PageRenderer";
import { getActiveTheme } from "@/lib/themeService";

export default async function HomePage() {
  const theme = await getActiveTheme();

  const result = (
    <ThemeProvider defaultTheme={theme}>
      <PageRenderer page="home" />
    </ThemeProvider>
  );

  return result;
}
