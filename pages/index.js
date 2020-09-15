import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post.js'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      { posts.length > 0 
        ? posts.map(p => (
            <Post
              key={p.sys.id}
              image={p.fields.image}
              title={p.fields.title}
              body={p.fields.body}
              slug={p.fields.slug}
            />
          ))
        : null}
    </>
  )
}

export default HomePage