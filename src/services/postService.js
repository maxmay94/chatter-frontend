import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts/`

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
  } catch (err) {
    throw err
  }
}