import getAllAliases from "@/lib/getAllAliases";
import DisplaySingleLink from "./DisplaySingleLink";

export default async function DisplayLink() {
    const data = await getAllAliases();
    
    return (
        <div>
            {data.map((item) => (
                <DisplaySingleLink key={item.alias} alias={item.alias} />
            ))}
        </div>
    )
}