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
        <div className="video__text-top">Helping Farmers</div>
        <div className="video__text-mid">
          ETHICALLY <br /> SOURCED BEANS
        </div>
        <hr className="video__text-hr" />
        <div className="video__text-bottom">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          perferendis, culpa odit dignissimos magni, itaque iure nostrum
          obcaecati voluptatum perspiciatis quos.
        </div>
      </div>
    </div>
  );
}
