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
            <h4>TITLE NAME</h4>
          </div>
          <div className="related__info-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}
