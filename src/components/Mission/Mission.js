import "./Mission.scss";
import divider from "../../Data/imgs/divider.png";

export default function Mission() {
  return (
    <div className="mission">
      <h3 className="mission__sub-heading">We Love Coffee</h3>
      <h2 className="mission__heading">
        Our <span className="mission__heading-italic">Mission</span>
      </h2>
      <p className="mission__statement">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        architecto debitis, culpa molestias eius repellendus ut harum ratione
        iusto quae excepturi earum maxime. Accusamus sequi quae sapiente.
      </p>
      <img
        className="mission__divider"
        src={divider}
        alt="mission statement divider"
      />
    </div>
  );
}
