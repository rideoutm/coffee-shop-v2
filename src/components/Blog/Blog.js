import "./Blog.scss";
import Comment from "./Comment/Comment";
import Related from "./Related/Related";

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Blog({ blogData }) {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [commentState, setCommentState] = useState("");

  const [nameClassState, setNameClassState] = useState(false);
  const [emailClassState, setEmailClassState] = useState(false);
  const [commentClassState, setCommentClassState] = useState(false);
  const [testBlogData, setTestBlogData] = useState([]);

  const { id } = useParams();
  // let blogArray = blogData.filter((obj) => obj.id === id);

  useEffect(() => {
    try {
      const getBlogData = async () => {
        const response = await fetch("https://coffee-shop-v2-d0913-default-rtdb.firebaseio.com/blogData.json");
        const responseData = await response.json();

        setTestBlogData(responseData);
      };
      getBlogData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  let testArray = testBlogData?.filter((obj) => obj?.id === id);
  // console.log(testBlogData);
  // let blogArray = testBlogData?.filter((obj) => obj.id === id);

  const handleFormValidation = (e) => {
    let newComment;
    let nameInfo = e.target.nameInput.value;
    let comment = e.target.commentInput.value;
    let date = new Date().toLocaleDateString("en-US") + " " + new Date().toLocaleTimeString("en-US");
    e.preventDefault();
    if (
      nameState.trim().length < 2 ||
      // emailState.trim().length < 2 ||
      commentState.trim().length < 2
    ) {
      if (nameState.trim().length < 2) {
        setNameClassState(true);
      }
      // if (emailState.trim().length < 2) {
      //   setEmailClassState(true);
      // }
      if (commentState.trim().length < 2) {
        setCommentClassState(true);
      }

      return;
    } else {
      // add the obj to the comments array;
      newComment = {
        name: nameInfo,
        commentdate: date,
        comment: comment,
      };
      testArray[0].comments.push(newComment);

      // console.log(blogArray[0]);
      setNameState("");
      setEmailState("");
      setCommentState("");
    }
  };

  const handleNameInput = (e) => {
    setNameState(e.target.value);
    if (nameState.trim().length > -1) {
      setNameClassState(false);
    }
  };

  const handleEmailInput = (e) => {
    setEmailState(e.target.value);
    if (emailState.trim().length > 2) {
      setEmailClassState(false);
    }
  };

  const handleCommentInput = (e) => {
    setCommentState(e.target.value);
    if (commentState.trim().length > 1) {
      setCommentClassState(false);
    }
  };

  // Filter JSON data to only the obj that matches the params.
  if (!testBlogData) return <h1>No data</h1>;
  return (
    <div className="blog">
      <div className="blog__left">
        <img className="blog__title-img" src={testArray[0]?.image} alt="title" />

        <div className="blog__info">
          by <span className="blog__info-author">{testArray[0]?.author}</span> |{" "}
          <span className="blog__info-date"> {testArray[0]?.date}</span>
        </div>
        <div className="blog__article">
          <h2 className="blog__article-title">{testArray[0]?.title}</h2>
          <div className="blog__article-content">
            <p className="blog__article-para">{testArray[0]?.para1}</p>
            <p className="blog__article-para">{testArray[0]?.para2}</p>
            <p className="blog__article-para">{testArray[0]?.para3}</p>
          </div>
          <hr className="blog__end-line" />
          <div className="blog__author-about">
            <div className="blog__author-about-right">
              <img className="blog__author-img" src={testBlogData[0]?.authorImg} alt="author" />
            </div>
            <div className="blog__author-about-left">
              <h3 className="blog__author-name">{testBlogData[0]?.author}</h3>
              <div className="blog__author-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias quae. Commodi perspiciatis nisi
                quis deserunt, laudantium ipsa modi debitis.
              </div>
            </div>
          </div>
          <hr className="blog__author-btm-hr" />
          <Comment blogData={testArray} />
          <div>
            <h2 className="blog__form-header">POST A COMMENT</h2>
            <form action="" onSubmit={handleFormValidation}>
              <label htmlFor="name"></label>
              <input
                className={nameClassState ? "blog__form-name--invalid" : "blog__form-name"}
                id="name"
                type="text"
                placeholder="Name"
                value={nameState}
                name="nameInput"
                onChange={handleNameInput}
              />
              {/* <label htmlFor="email"></label>
              <input
                className={
                  emailClassState
                    ? "blog__form-email--invalid"
                    : "blog__form-email"
                }
                id="email"
                type="text"
                placeholder="Email"
                value={emailState}
                onChange={handleEmailInput}
              /> */}
              <label htmlFor="comment"></label>
              <textarea
                className={commentClassState ? "blog__form-comment--invalid" : "blog__form-comment"}
                id="comment"
                cols="30"
                rows="10"
                name="commentInput"
                placeholder="Comment"
                value={commentState}
                onChange={handleCommentInput}
              ></textarea>
              <button className="blog__form-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="blog__right">
        <Related blogData={testBlogData} blogArray={testArray} />
      </div>
    </div>
  );
}
