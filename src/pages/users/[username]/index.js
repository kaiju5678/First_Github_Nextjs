import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router"
import Head from "next/head";
import { useState, useEffect } from "react";

const Mycomponent = dynamic(() => import("@/components/Mycomponent"));

export default function User() {

  const rounter = useRouter();
  const { username } = rounter.query;


  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 5) {
      setCount(0);
    }
    else if (count === -5) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <Head>
        <title>User Page</title>
      </Head>


      <Mycomponent title="Hello, Next.JS!" />
      <Link href="/posts/123/comments/456">Go to Comment page </Link><br />
      <h1>User Page</h1>
      <h1>Username : {username}</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2-px-[4px] rounded">
        Increment
      </button><br />
      <button onClick={() => setCount(count - 1)} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2-px-[4px] rounded">
        Decrement
      </button><br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2-px-[4px] rounded ">
        Click Me!!!
      </button>
    </div>
  );

}