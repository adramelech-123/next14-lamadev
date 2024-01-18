import { Post, User } from "./models"
import { connectDB } from "./utils"
import { unstable_noStore } from "next/cache"
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Jane'},
// ]

// const posts = [
//   { id: 1, title: "Post 1", body: "....", userId: 1 },
//   { id: 2, title: "Post 2", body: "....", userId: 2 },
//   { id: 3, title: "Post 3", body: "....", userId: 2 },
//   { id: 4, title: "Post 4", body: "....", userId: 2 },
// ];

export const getPosts = async () => {
    try {
        connectDB()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error)
        throw new Error("Error getting posts")
    }
}

export const getPost = async (slug) => {
    try {
      connectDB()
      const post = await Post.findOne({slug});
      return post;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch!");
    }
}

export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const getUser = async (id) => {
   unstable_noStore()
    try {
      connectDB();
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch user!");
    }
}