// lib/themeService.ts
import clientPromise from "./mongodb";

export async function getActiveTheme() {
    const client = await clientPromise;
    const db = client.db("mythemes");
    return await db.collection("themes").findOne({active: true});
}
