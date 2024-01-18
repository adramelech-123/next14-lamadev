import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"

// Get Data using API
// const getData = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   if(!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }


const BlogPage = async () => {

  // Get data with an API
  // const posts = await getData()
  
  // Fetch data without API
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
            
    </div>
  );
}
export default BlogPage