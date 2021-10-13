import BlogPost from "../models/BlogPost";
import "./BlogPostList.css";

interface Props {
  blogPosts: BlogPost[];
}

const BlogPostList = ({ blogPosts }: Props) => {
  return (
    <div className="BlogPostList">
      <p>List should be here !</p>
      <ul>
        {blogPosts.map((post) => (
          <li>
            <p>blogPosts.map is working!</p>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.date}</p>
            <p>{post.post}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
