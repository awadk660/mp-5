"use server";
import getCollection, { URLS_CONNECTION } from "@/db";

export default async function createNewAlias(
  url: string,
  alias: string,
): Promise<{success: boolean; error: string}> {
  const urlShortener = {
    url: url,
    alias: alias,
  };

  try {
    new URL(url);
  } catch {
    return {success: false, error: "invalid URL"};
  }

  const urlsCollection = await getCollection(URLS_CONNECTION);

  const checkExisting = await urlsCollection.findOne({alias: alias});
  if (checkExisting) {
    return {success: false, error: "Alias already exists"};
  }
  
  const res = await urlsCollection.insertOne(urlShortener);

  if (res.acknowledged) {
    return {success: true, error: "Successfully created alias"};
  } else {
    return {success: false, error: "Failed to create alias"};
  }
}
