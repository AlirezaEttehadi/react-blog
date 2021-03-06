import "./post.css";
import { Link } from "react-router-dom";
const PF = "http://localhost:4000/images/";
export default function Post({ post }) {
  
  return (
    <div className="post">
      {post.photo ? (
        <img className="postImg" src={PF + post.photo} alt="" />
      ) : null}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
