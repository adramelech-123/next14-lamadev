import { Post } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {slug} = params
  try {
    connectDB();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    connectDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted successfully!");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};
