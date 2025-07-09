import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="ecommerce">
      <PageRenderer page="home" />
    </ThemeProvider>
  );
}