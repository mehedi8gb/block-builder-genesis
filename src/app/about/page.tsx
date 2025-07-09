import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

export default function AboutPage() {
  return (
    <ThemeProvider defaultTheme="default">
      <PageRenderer page="about" />
    </ThemeProvider>
  );
}