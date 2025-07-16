// app/page.tsx
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';
import { getActiveTheme } from '@/lib/themeService';

export default async function HomePage() {
    const theme = await getActiveTheme() || 'default';

    return (
        <ThemeProvider {...({ theme } as any)}>
            <PageRenderer page="home" />
        </ThemeProvider>

    );
}
