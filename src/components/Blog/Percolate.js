import "./Blog.scss";
import titleImg from "../../Data/imgs/pexels-anna-urlapova-2956954.jpg";
import authorImg from "../../Data/imgs/pexels-ketut-subiyanto-4349736.jpg";
import Comment from "./Comment/Comment";

import { useState } from "react";

import blogData from "../../Data/BlogData/BlogData.json";
import Related from "./Related/Related";

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
      <img className="blog__title-img" src={titleImg} alt="title image" />

      <div className="blog__info">
        by <span className="blog__info-author">Meghan Smith</span> |{" "}
        <span className="blog__info-date"> 10/27/2022</span>
      </div>
      <div className="blog__article">
        <h2 className="blog__article-title">PERCOLATE</h2>
        <div className="blog__article-content">
          <p className="blog__article-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            quis at quisquam! Obcaecati animi nisi, reiciendis cumque maiores ea
            error provident suscipit quam quae non quia iusto vero quas quod sed
            eaque neque architecto reprehenderit deserunt a laudantium
            distinctio.
          </p>
          <p className="blog__article-para">
            Doloremque consequuntur atque quas maiores odit ipsam perferendis.
            Fugit, minima voluptatum quasi consequuntur, maiores vitae assumenda
            quae, esse sed ex dolor rerum impedit placeat. Fugit fuga a expedita
            doloremque sed, laboriosam at vero voluptate quod, ad ab
            exercitationem facere qui, delectus non enim placeat odit. Beatae
            ullam expedita vel, perspiciatis quam nobis eius corrupti. Aut quia
            nam dignissimos voluptatibus nemo quaerat earum, magnam voluptatum
            consectetur pariatur et numquam, ullam odio.{" "}
          </p>{" "}
          <p className="blog__article-para">
            {" "}
            Vitae hic quibusdam illum, fuga totam necessitatibus modi, voluptate
            aperiam veritatis minima ratione labore doloremque quod iusto
            debitis, velit perferendis praesentium! Dolores reiciendis ut
            similique doloribus aut numquam eligendi ad ipsam repudiandae et
            fugiat enim ea, fugit dignissimos dolore perspiciatis accusantium.
            Dignissimos minus, repudiandae modi quia quae hic enim debitis
            accusamus delectus facilis doloremque sed distinctio architecto quod
            facere aspernatur eius, iusto maxime sunt.
          </p>
          <p className="blog__article-para">
            Eveniet fugiat repellat tempora necessitatibus beatae nulla ullam,
            sapiente voluptates labore illum deserunt, deleniti aliquid cum
            animi doloribus tempore officiis, aut culpa hic ut consequatur
            voluptatum iste!
          </p>
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
            alias quae. Commodi perspiciatis nisi quis deserunt, laudantium ipsa
            modi debitis?
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
      <Related />
    </div>
  );
}
