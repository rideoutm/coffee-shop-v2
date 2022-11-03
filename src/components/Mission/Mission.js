import "./Mission.scss";
import divider from "../../Data/imgs/divider.png";

export default function Mission({ smoothScrollRef }) {
  return (
    <div className="mission">
      <h3 ref={smoothScrollRef} className="mission__sub-heading">
        We Love Coffee
      </h3>
      <h2 className="mission__heading">
        OUR <span className="mission__heading-italic">PASSION</span>
      </h2>
      <p className="mission__statement">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        architecto debitis, culpa molestias eius repellendus ut harum ratione
        iusto quae excepturi earum maxime.
      </p>
      <div className="mission__hr"></div>
      {/* <img
        className="mission__divider"
        src={divider}
        alt="mission statement divider"
      /> */}
    </div>
  );
}
