import "./Related.scss";
import related from "../../../Data/imgs/related.jpg";

export default function Related() {
  return (
    <div className="related">
      <h2 className="related__header">RELATED</h2>
      <div className="related__item">
        <div className="related__img-cont">
          <img className="related__item-img" src={related} alt="" />
        </div>
        <div className="related__info">
          <div className="related__info-title">
            <h4 className="related__info-title-header">TITLE NAME</h4>
          </div>
          <div className="related__info-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>
      </div>
      <div className="related__item">
        <div className="related__img-cont">
          <img className="related__item-img" src={related} alt="" />
        </div>
        <div className="related__info">
          <div className="related__info-title">
            <h4 className="related__info-title-header">TITLE NAME</h4>
          </div>
          <div className="related__info-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>
      </div>
      <div className="related__item">
        <div className="related__img-cont">
          <img className="related__item-img" src={related} alt="" />
        </div>
        <div className="related__info">
          <div className="related__info-title">
            <h4 className="related__info-title-header">TITLE NAME</h4>
          </div>
          <div className="related__info-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>
      </div>
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
