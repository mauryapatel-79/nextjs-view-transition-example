import { Post as PostType } from '@/app/types'
import React, { FC, ViewTransition } from 'react'
import { Calendar, User } from 'lucide-react'

interface PostProps {
  post: PostType
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <ViewTransition name={`post-${post.id}`}>
      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <ViewTransition name={`post-${post.title}`}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {post.title}
            </h1>
          </ViewTransition>

          <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <User size={16} />
              by {post.userId || 'Author'}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </header>

        {/* Body */}
        <ViewTransition name={`post-${post.body}`}>
          <section className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {post.body}
            </p>
          </section>
        </ViewTransition>

        {/* Tags */}
        <ViewTransition name={`post-tags-${post.id}`}>
          {post.tags && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-full"
                >
                  <ViewTransition name={`post-tags-${post.id}-${tag}`}>
                    #{tag}
                  </ViewTransition>
                </span>
              ))}
            </div>
          )}
        </ViewTransition>
      </article>
    </ViewTransition>
  )
}

export default Post
