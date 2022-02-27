import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.ibb.co/Ny59Mcb/pexels-je-shoots-126292.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo
        corrupti libero? Nulla numquam quas iure libero in at consectetur rerum
        deserunt blanditiis pariatur, tempore voluptatum molestias consequatur,
        magnam cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo
        corrupti libero? Nulla numquam quas iure libero in at consectetur rerum
        deserunt blanditiis pariatur, tempore voluptatum molestias consequatur,
        magnam cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo
        corrupti libero? Nulla numquam quas iure libero in at consectetur rerum
        deserunt blanditiis pariatur, tempore voluptatum molestias consequatur,
        magnam cupiditate.
      </p>
    </div>
  );
}
