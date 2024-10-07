import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const blogPosts = [
  // ... blog posts data remains the same
]

const BlogList = () => {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>DocConsult Blog - Online Healthcare Insights</title>
        <meta name="description" content="Stay informed about telemedicine, online healthcare, and medical technology with the DocConsult blog." />
        <meta name="keywords" content="telemedicine blog, online healthcare articles, medical technology news" />
      </Helmet>

      {/* Rest of the component remains the same */}
    </div>
  )
}

export default BlogList