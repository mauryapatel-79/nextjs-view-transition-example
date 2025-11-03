import Image from "next/image";
import { PostsResponse } from "./types";
import Posts from "@/components/Posts";

export default async function Home() {
  const { limit, posts, skip, total }: PostsResponse = await (await fetch("https://dummyjson.com/posts")).json()
  return (
    <div className="">
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-start py-16 px-6 sm:px-16 bg-white dark:bg-black">
          <Posts posts={posts} />
        </main>
      </div>
    </div>
  );
}
