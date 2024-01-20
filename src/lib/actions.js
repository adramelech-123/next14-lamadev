"use server";
import { connectDB } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  // const title = formData.get('title')
  // const desc = formData.get('desc')
  // const slug = formData.get('slug')
  const { title, desc, img, slug, userId } = Object.fromEntries(formData);

  try {
    connectDB();
    const newPost = new Post({ title, desc, img, slug, userId });
    await newPost.save();
    console.log("Saved to DB! 🐥");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  
    const { id } = Object.fromEntries(formData);

  try {
    connectDB();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB 🚽");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
