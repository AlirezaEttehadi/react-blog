import { useState } from "react";
import "./write.css";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Write() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title,
      desc,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try {
        await axios.post("/upload/", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace(`/post/${res.data._id}`);
    } catch (error) {}
  };
  return (
    <div className="write">
      {file ? (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      ) : null}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(event) => setFile(event.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
            onChange={(event) => setDesc(event.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
