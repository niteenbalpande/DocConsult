import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const blogPosts = [
  // ... blog posts data remains the same
]

const BlogPost = () => {
  // ... rest of the component logic remains the same

  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>{post.title} | DocConsult Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
      </Helmet>

      {/* Rest of the component remains the same */}
    </div>
  )
}

export default BlogPost