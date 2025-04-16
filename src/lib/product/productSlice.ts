import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productSlice= createApi({
  reducerPath:"api",
  baseQuery:fetchBaseQuery({
    baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL
  }),
  endpoints:(builder)=> ({
    getProduct:builder.query({
      query:(productID?:string)=> {
        const query= new URLSearchParams()
        if(productID) 
          query.append("productId",productID)
        return`admin/product/get-all-product?${query.toString()}`}
    })
  })
})

export const {useGetProductQuery}= productSlice
export default productSlice
/* import { useState, useEffect } from 'react'

export function usePosts(initialCursor = null) {
  const [posts, setPosts] = useState([])
  const [cursor, setCursor] = useState(initialCursor)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const fetchPosts = async (currentCursor) => {
    setIsLoading(true)
    try {
      const query = new URLSearchParams()
      if (currentCursor) query.append('cursor', currentCursor)
      query.append('limit', '10') // Adjust limit as needed

      const response = await fetch(`/api/posts?${query.toString()}`)
      const { data, nextCursor } = await response.json()

      setPosts(prev => [...prev, ...data])
      setCursor(nextCursor)
      setHasMore(!!nextCursor)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadMore = () => {
    if (hasMore && !isLoading) {
      fetchPosts(cursor)
    }
  }

  useEffect(() => {
    fetchPosts(initialCursor)
  }, [])

  return { posts, loadMore, isLoading, hasMore }
} */
//infinte scrolling 
/* 
import { useInView } from 'react-intersection-observer'

// Inside your component
const { ref, inView } = useInView()

useEffect(() => {
  if (inView && hasMore && !isLoading) {
    loadMore()
  }
}, [inView, hasMore, isLoading])

// Add this to the end of your list
<div ref={ref} style={{ height: '20px' }} />
*/