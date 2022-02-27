import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.ibb.co/Ny59Mcb/pexels-je-shoots-126292.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Alireza</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          necessitatibus similique. Quidem voluptas adipisci voluptates
          asperiores? Deserunt incidunt necessitatibus ut omnis earum, ducimus,
          ad dolores id commodi veniam, molestiae illo!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          necessitatibus similique. Quidem voluptas adipisci voluptates
          asperiores? Deserunt incidunt necessitatibus ut omnis earum, ducimus,
          ad dolores id commodi veniam, molestiae illo!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          necessitatibus similique. Quidem voluptas adipisci voluptates
          asperiores? Deserunt incidunt necessitatibus ut omnis earum, ducimus,
          ad dolores id commodi veniam, molestiae illo!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          necessitatibus similique. Quidem voluptas adipisci voluptates
          asperiores? Deserunt incidunt necessitatibus ut omnis earum, ducimus,
          ad dolores id commodi veniam, molestiae illo!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          necessitatibus similique. Quidem voluptas adipisci voluptates
          asperiores? Deserunt incidunt necessitatibus ut omnis earum, ducimus,
          ad dolores id commodi veniam, molestiae illo!
        </p>
      </div>
    </div>
  );
}
