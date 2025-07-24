export const dynamic = "force-dynamic";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';
import { getActiveTheme } from "@/lib/themeService";

export default async function PrivacyPage() {
  const theme = await getActiveTheme();
  return (
    <ThemeProvider defaultTheme={theme}>
      <PageRenderer page="privacy" />
    </ThemeProvider>
  );
}
