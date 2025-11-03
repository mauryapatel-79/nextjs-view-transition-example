"use client";

import React, { FC, useState } from "react";
import { Post } from "@/app/types";
import PostCard from "./PostCard";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const [search, setSearch] = useState("");

  // 🔍 Filter logic (derived variable)
  const filteredPosts = posts.filter(
    (p) => {
      const term = search.toLowerCase();
      return (
        p.title.toLowerCase().includes(term) ||
        p.body.toLowerCase().includes(term) ||
        p.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }
  );

  return (
    <section className="w-full max-w-3xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Posts
        </h1>

        {/* Search bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-2 pl-10 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400 dark:text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      {/* Posts list */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-zinc-500 dark:text-zinc-400">
          No posts found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Posts;
