import { useEffect, useState } from "react";
import BlogPostList from "../components/BlogPostList";
//import { AuthContext } from "../context/AuthContext";
import BlogPost from "../models/BlogPost";
import { fetchAllBlogPosts } from "../services/BlogPostApiService";

const AllBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  //const { user } = useContext(AuthContext);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    fetchAllBlogPosts().then((postFromApi) => {
      console.log(postFromApi);
      setPosts(postFromApi);
    });
  };

  console.log(posts);
  // const handleAddPost = (newPost) => {
  //   addBlogPost(newPost).then(() => {
  //     loadPosts();
  //   });
  // };

  return (
    <div className="AllBlogPosts">
      <BlogPostList blogPosts={posts} />
    </div>
  );
};

export default AllBlogPosts;
