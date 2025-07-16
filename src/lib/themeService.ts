// lib/themeService.ts
import clientPromise from "./mongodb";

export async function getActiveTheme() {
  const client = await clientPromise;
  const db = client.db("mythemes");
  const themeFromDb = await db.collection("themes").findOne({ active: true });

  if (!themeFromDb) return null;

  // convert _id from ObjectId to string
  const theme = {
    ...themeFromDb,
    _id: themeFromDb._id.toString(),
  };

  return theme;
}
