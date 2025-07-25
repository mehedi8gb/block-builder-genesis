// app/page.tsx
export const dynamic = "force-dynamic";
import {PageRenderer} from "@/core/renderers/PageRenderer";

export default async function HomePage() {

    const result = (
        <PageRenderer page="home"/>
    );
    return result;
}
