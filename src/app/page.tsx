import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="default">
      <PageRenderer page="home" />
    </ThemeProvider>
  );
}