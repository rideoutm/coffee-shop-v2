import "./blog.scss";
import arabica from "../../Data/imgs/nathan-dumlao-KixfBEdyp64-unsplash.jpg";
import Joe from "../../Data/imgs/JoeF.jpg";

export default function Arabica() {
  return (
    <div className="blog">
      <img className="blog__title-img" src={arabica} alt="title image" />

      <div className="blog__info">
        by <span className="blog__info-author">Joe Frazer</span> |
        <span className="blog__info-date"> 10/23/2022</span>
      </div>
      <div className="blog__article">
        <h2 className="blog__article-title">ARABICA</h2>
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
            src={Joe}
            alt="image of author"
          />
          <h3 className="blog__author-name">Joe Frazer</h3>
          <div className="blog__author-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            alias quae. Commodi perspiciatis nisi quis deserunt, laudantium ipsa
            modi debitis?
            <hr className="blog__author-btm-hr" />
          </div>
        </div>
        <Comment blogData={blogData} />
      </div>
    </div>
  )
