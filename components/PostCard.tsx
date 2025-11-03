import React, { FC, ViewTransition } from "react";
import Link from "next/link";
import { Post } from "@/app/types";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <ViewTransition name={`post-${post.id}`}>
            <Link
                href={`/${post.id}`}
                className="group block relative border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:-translate-y-1 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm"
            >
                {/* Title */}
                <ViewTransition name={`post-${post.title}`}>
                    <h2 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {post.title}
                    </h2>
                </ViewTransition>

                {/* Body */}
                <ViewTransition name={`post-${post.body}`}>

                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-3">
                        {post.body}
                    </p>
                </ViewTransition>

                {/* Tags */}
                <ViewTransition name={`post-tags-${post.id}`}>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-700 dark:hover:text-teal-300"
                                >
                                    <ViewTransition name={`post-tags-${post.id}-${tag}`}>
                                        #{tag}
                                    </ViewTransition>
                                </span>
                            ))}
                        </div>
                    )}
                </ViewTransition>

                {/* Footer Info */}

                <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    <ViewTransition name={`post-${post.views}`}>

                        <div className="flex items-center gap-1.5">
                            <Eye size={14} />
                            <span>{post.views.toLocaleString()} views</span>
                        </div>
                    </ViewTransition>
                    <div className="flex items-center gap-4">
                        <ViewTransition name={`post-reactions-${post.id}`}>
                            <span className="flex items-center gap-1.5">
                                <ThumbsUp size={14} className="text-teal-500" />
                                {post.reactions.likes}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <ThumbsDown size={14} className="text-rose-500" />
                                {post.reactions.dislikes}
                            </span>
                        </ViewTransition>
                    </div>
                </div>

                {/* Hover Glow Accent */}
                <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-teal-100/30 to-transparent dark:from-teal-900/10" />
            </Link>
        </ViewTransition >
    );
};

export default PostCard;
