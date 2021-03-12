import React, { useState } from "react";
import firebase from "../utils/firebase";
function AddBlog() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const blog = firebase.database().ref("Blog");
    const post = {
      title,
      text,
      img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    };

    blog.push(post);

    setText("");
    setTitle("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" onChange={e => setTitle(e.target.value)} value={title} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Blog text</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setText(e.target.value)} value={text}></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
