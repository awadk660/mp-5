import { notFound, redirect } from "next/navigation";
import getAlias from "@/lib/getAlias";

export default async function AliasRoute({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  const targetUrl = await getAlias(alias);

  if (!targetUrl) {
    return notFound();
  }

  redirect(targetUrl);
}
