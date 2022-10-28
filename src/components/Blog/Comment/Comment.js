import "./Comment.scss";
import placeholderImg from "../../../Data/imgs/commentPlaceholder.png";

export default function Comment() {
  return (
    <div className="comments">
      <h2 className="comments__header"># COMMENTS</h2>
      {/* Create JSON file with data for each blog post, map comments to comment section, swap out placeholder data */}
      <div className="comments__comment">
        <div className="comments__comment-img">
          <img
            className="comments__comment-img-pic"
            src={placeholderImg}
            alt="Comment placeholder image"
          />
        </div>
        <div className="comments__comment-right">
          <div className="comments__comment-name">
            {String("Ed Doe").toUpperCase()}
          </div>
          <div className="comments__comment-date">10/27/2022 4:30pm</div>
          <div className="comments__comment-comment">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            officia dolore perspiciatis sed veniam? Autem?
          </div>
        </div>
      </div>
      <hr className="comments__comment-hr" />
    </div>
  );
}
