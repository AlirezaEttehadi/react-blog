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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${path}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (error) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ) : null}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {
              (post.username = user?.username ? (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon fa-solid fa-pen-to-square"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon fa-solid fa-trash-can"
                    onClick={handleDelete}
                  ></i>
                </div>
              ) : null)
            }
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
