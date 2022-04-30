import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../services/postService'

const PostList = () => {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      console.log(postData)
    }
    fetchAllPosts()
  }, [])

  return (
    <div className='layout'>
      <h1>Posts!</h1>
    </div>
  )
}

export default PostList