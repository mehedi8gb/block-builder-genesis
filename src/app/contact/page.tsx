import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

export default function ContactPage() {
  return (
    <ThemeProvider defaultTheme="default">
      <PageRenderer page="contact" />
    </ThemeProvider>
  );
}