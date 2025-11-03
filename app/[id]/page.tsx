import Post from "@/components/Post"
import { Post as PostType } from "../types"
import { ViewTransition } from "react"

interface PageProps {
    params: { id: string }
}
export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/posts")
    const { posts } = await res.json()

    return posts.map((post: PostType) => ({
        id: post.id.toString(),
    }))
}

export default async function Page({ params }: PageProps) {
    const { id } = await params
    const data: PostType = await (await fetch(`https://dummyjson.com/posts/${id}`)).json()

    return (
        <div className="p-4">
                <Post post={data} />
        </div>
    )
}

// ✅ Static params for prerendering
