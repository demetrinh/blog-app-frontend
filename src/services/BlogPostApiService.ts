import axios from "axios";
import BlogPost from "../models/BlogPost";

const baseUrl: string = process.env.REACT_APP_BLOG_API_URL || "";
if (!baseUrl) {
  console.error("Missing config REACT_APP_BLOG_API_URL");
}

export const fetchAllBlogPosts = (): Promise<BlogPost[]> => {
  return axios.get(`${baseUrl}/blog`).then((res) => res.data);
};

export const addBlogPost = (newBlogPost: BlogPost): Promise<BlogPost> => {
  return axios.post(`${baseUrl}/blog`, newBlogPost).then((res) => res.data);
};
