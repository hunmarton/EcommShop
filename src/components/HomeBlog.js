import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";

import { Wrapper, Image, Heading, MainHeading } from "../styles/HomeSections";
import { Link } from "react-router-dom";

function HomeBlog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const blogRef = firebase.database().ref("Blog");
    blogRef.on("value", snapshot => {
      const blogs = snapshot.val();
      let blogList = [];
      for (let id in blogs) {
        blogList.push(blogs[id]);
      }
      let shortBlogList = blogList.reverse().slice(0, 4);
      setBlogList(shortBlogList);
    });
  }, []);

  const setClass = index => {
    if (index === 1 || index === 3) {
      return "col-3 col";
    } else if (index === 2) {
      return "col-6 col";
    } else {
      return "col-12 col";
    }
  };

  return (
    <Wrapper className="container-fluid">
      <MainHeading className="text-center">Latest Blog Post</MainHeading>
      <div className="row mb-5">
        {blogList.map((blog, i) => {
          return (
            <div className={setClass(i)} key={i}>
              <Image src={blog.img} alt={blog.title} className="img-fluid" />
              <Heading>{blog.title}</Heading>
            </div>
          );
        })}
      </div>
      <Link to="/blog" className="btn ml-auto">
        Check Our Blog Page
      </Link>
    </Wrapper>
  );
}

export default HomeBlog;
