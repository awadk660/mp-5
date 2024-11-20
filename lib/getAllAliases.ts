"use server";
import getCollection, { URLS_CONNECTION } from "@/db";

export default async function getAllAliases(): Promise<{url: string, alias: string}[]> {
    const urlsCollection = await getCollection(URLS_CONNECTION);
    const aliases = await urlsCollection.find({}).toArray();

    return aliases.map(doc => ({
        url: doc.url,
        alias: doc.alias,
      }));
}
