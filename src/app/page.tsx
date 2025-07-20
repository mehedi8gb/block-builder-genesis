// app/page.tsx
export const dynamic = "force-dynamic";

import {PageRenderer} from "@/core/renderers/PageRenderer";
import {getActiveTheme} from "@/core/lib/themeService"; // Ensures all blocks are registered before rendering
import {ThemeProvider} from "@/contexts/ThemeContext";
import "@/core/registry";


export default async function HomePage() {
    console.time("rendering time");

    const theme = await getActiveTheme();

    const result = (
        <ThemeProvider defaultTheme={theme}>
            <PageRenderer page="home"/>
        </ThemeProvider>
    );

    console.timeEnd("rendering time");
    return result;
}
