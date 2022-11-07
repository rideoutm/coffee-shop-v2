import "./Blog.scss";
// import titleImg from "../../Data/imgs/pexels-anna-urlapova-2956954.jpg";
import authorImg from "../../Data/imgs/pexels-ketut-subiyanto-4349736.jpg";
import Comment from "./Comment/Comment";
import blogData from "./blogData.json";
import Related from "./Related/Related";

import { useState } from "react";

export default function Blog() {
  const [nameState, setNameState] = useState(0);
  const [emailState, setEmailState] = useState(0);
  const [commentState, setCommentState] = useState(0);

  const [nameClassState, setNameClassState] = useState("blog__form-name");
  const [emailClassState, setEmailClassState] = useState("blog__form-email");
  const [commentClassState, setCommentClassState] =
    useState("blog__form-comment");

  const handleFormValidation = () => {
    if (
      nameState.length < 2 ||
      emailState.length < 2 ||
      commentState.length < 2
    )
      setNameClassState("blog__form-name--invalid");
    setEmailClassState("blog__form-name--invalid");
    setCommentClassState("blog__form-name--invalid");
    return;
  };

  return (
    <div className="blog">
      <div className="blog__left">
        <img
          className="blog__title-img"
          src={blogData[0].image}
          alt="title image"
        />

        <div className="blog__info">
          by <span className="blog__info-author">{blogData[0].author}</span> |{" "}
          <span className="blog__info-date"> {blogData[0].date}</span>
        </div>
        <div className="blog__article">
          <h2 className="blog__article-title">{blogData[0].title}</h2>
          <div className="blog__article-content">
            <p className="blog__article-para">{blogData[0].para1}</p>
            <p className="blog__article-para">{blogData[0].para2}</p>
            <p className="blog__article-para">{blogData[0].para3}</p>
          </div>
          <hr className="blog__end-line" />
          <div className="blog__author-about">
            <img
              className="blog__author-img"
              src={authorImg}
              alt="image of author"
            />
            <h3 className="blog__author-name">Meghan Smith</h3>
            <div className="blog__author-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              alias quae. Commodi perspiciatis nisi quis deserunt, laudantium
              ipsa modi debitis?
              <hr className="blog__author-btm-hr" />
            </div>
          </div>
          <Comment blogData={blogData} />
          <div>
            <h2 className="blog__form-header">POST A COMMENT</h2>
            <form action="">
              <label htmlFor="name"></label>
              <input
                className={
                  nameState < 2 ? "blog__form-name--invalid" : "blog__form-name"
                }
                id="name"
                type="text"
                placeholder="Name"
                // value={nameState}
                onChange={() => setNameState(nameState + 1)}
              />
              <label htmlFor="email"></label>
              <input
                className="blog__form-email"
                id="email"
                type="text"
                placeholder="Email"
                onChange={() => setEmailState(emailState + 1)}
              />
              <label htmlFor="comment"></label>
              <textarea
                className="blog__form-comment"
                name=""
                id="comment"
                cols="30"
                rows="10"
                placeholder="Comment"
                onChange={() => setCommentState(commentState + 1)}
              ></textarea>
              <button className="blog__form-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="blog__right">
        <Related />
      </div>
    </div>
  );
}
