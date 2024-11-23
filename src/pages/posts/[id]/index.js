import { useRouter } from "next/router"

export default function Post() {
    const rounter = useRouter();
    const {id} = rounter.query;
    return <h1>Post ID: {id}</h1>
}