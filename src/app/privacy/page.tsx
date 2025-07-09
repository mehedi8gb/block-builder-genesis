import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

export default function PrivacyPage() {
  return (
    <ThemeProvider defaultTheme="default">
      <PageRenderer page="privacy" />
    </ThemeProvider>
  );
}