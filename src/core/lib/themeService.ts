// lib/themeService.ts
import clientPromise from "./mongodb";
import {Theme} from "@/core/types/theme";


export async function getActiveTheme() {
  const client = await clientPromise;
  const db = client.db("mythemes");
  const themeFromDb = await db.collection("themes").findOne({ active: true });

  if (!themeFromDb) return null;

const theme: Theme = {
  ...themeFromDb,
  _id: themeFromDb._id.toString()
};


  // console.log("from theme service", theme.name)

  return theme;
}
