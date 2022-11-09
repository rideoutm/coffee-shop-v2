import "./Related.scss";

import { Link } from "react-router-dom";

export default function Related({ blogData, blogArray }) {
  // if the current blog's id does not match, map through each object in the list.

  return (
    <div className="related">
      <h2 className="related__header">RELATED</h2>
      {blogData.map((el) => {
        return blogArray[0].id !== el.id ? (
          <Link key={el.id} className="related__link" to={`/blog/${el.id}`}>
            <div className="related__item">
              <div className="related__img-cont">
                <img className="related__item-img" src={el.image} alt="" />
              </div>
              <div className="related__info">
                <div className="related__info-title">
                  <h4 className="related__info-title-header">{el.title}</h4>
                </div>
                <div className="related__info-desc">{el.description}</div>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      <div className="related__categories">
        <h2 className="related__categories-header">CATEGORIES</h2>
        <ul className="related__list">
          <li className="related__list-item">Preparation</li>
          <li className="related__list-item">Farming</li>
          <li className="related__list-item">Bean types</li>
          <li className="related__list-item">Coffee courses</li>
          <li className="related__list-item">Coffee Recipes</li>
        </ul>
      </div>
      <div className="related__tags">
        <h2 className="related__tags-header">TAGS</h2>
        Latte, Espresso, Cappucino, Iced Coffee, Drip, Caramel Macchiato
      </div>
    </div>
  );
}
