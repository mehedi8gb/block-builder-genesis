// app/page.tsx
import {Theme} from "@/core/types/theme";

export const dynamic = "force-dynamic";

import {PageRenderer} from "@/core/renderers/PageRenderer";
import {getActiveTheme} from "@/core/lib/themeService"; // Ensures all blocks are registered before rendering
import {ThemeProvider} from "@/contexts/ThemeContext";

export default async function HomePage() {
    const theme : Theme = await getActiveTheme();

    const result = (
        <ThemeProvider defaultTheme={theme}>
            <PageRenderer page="home"/>
        </ThemeProvider>
    );
    return result;
}
