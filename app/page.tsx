import CreateUrlForm from "@/components/CreateUrlForm";
import createNewAlias from "@/lib/createNewAlias";
import DisplayLink from "@/components/DisplayLink";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <CreateUrlForm createNewPost={createNewAlias}/>
      <DisplayLink />
    </div>
  );
}
