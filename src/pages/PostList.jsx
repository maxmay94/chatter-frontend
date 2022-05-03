import React, { useState, useEffect } from 'react'
import { getAllPosts, updatePost, deletePost } from '../services/postService'
import PostCard from '../components/Post/PostCard'
import Header from '../components/misc/Header'

const PostList = (props) => {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  const markPostResolved = async (postId) => {
    try {
      const updatedPost = await updatePost(postId)
			setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)))
    } catch (error) {
      throw error
    }
  }

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
      //filter through postsState, only return the posts
      //where _id does not match postId
      setPosts(posts.filter((post) => post._id !== postId))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className='layout'>
      <Header />
      {
        posts?.map((post) => {
          <PostCard 
            post={post}
            key={post._id}
            user={props.user}
            markPostResolved={markPostResolved}
          />
        })
      }
    </div>
  )
}

export default PostList