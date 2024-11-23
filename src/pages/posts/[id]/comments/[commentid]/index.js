import { useRouter } from "next/router"

export default function Comment() {
    const rounter = useRouter();
    const { id, commentid } = rounter.query;
    return (
        <div>
            <h1>Posts ID : {id}</h1>
            <h1>Comment ID : {commentid}</h1>
        </div>
    );
}