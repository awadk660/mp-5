import getCollection, { URLS_CONNECTION } from "@/db";

export default async function getAlias(alias: string): Promise<string | null> {
  const urlsCollection = await getCollection(URLS_CONNECTION);
  const aliasToFind = await urlsCollection.findOne({ alias: alias });

  return aliasToFind ? aliasToFind.url : null;
}
