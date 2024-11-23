import { useRouter } from "next/router";

export default function Categorie() {
    const rounter = useRouter();
    const { slug } = rounter.query;

    return (
        <div>
            <h1>Categorie Page</h1>
            <p>Slug String : {slug} </p>
            <p>Slug : {JSON.stringify(slug)}</p>
        </div>
    );
}