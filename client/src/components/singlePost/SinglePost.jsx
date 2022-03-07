import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const PF = "http://localhost:4000/images/";
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ) : null}
        <h1 className="singlePostTitle">
          {post.title}
          {
            (post.username = user?.username ? (
              <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
              </div>
            ) : null)
          }
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
