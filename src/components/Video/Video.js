import "./Video.scss";
import coffeevideo from "../../Data/videos/coffeeshopvid.mp4";

export default function Video() {
  return (
    <div className="video">
      <video height="400" className="video__player" loop autoPlay muted>
        <source
          className="video__player-source"
          src={coffeevideo}
          type="video/mp4"
          height="500"
        />{" "}
      </video>
      <div className="video__text">
        <div className="video__text-top">
          ONLY THE HIGHEST QUALITY <p>COFFEE BEANS</p>
        </div>
        <div className="video__text-mid">
          Explore <span className="video__text-mid-italic">Variety</span>
        </div>
        <hr className="video__text-hr" />
        <div className="video__text-bottom">
          We only source our beans from free trade, family owned farms
        </div>
      </div>
    </div>
  );
}
