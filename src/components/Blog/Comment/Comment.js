import "./Comment.scss";
import placeholderImg from "../../../Data/imgs/commentPlaceholder.png";

export default function Comment({ blogData }) {
  return (
    <div className="comments">
      <h2 className="comments__header">{blogData[0]?.comments.length} COMMENTS</h2>

      {blogData[0]?.comments.map((el, i) => {
        return (
          <div key={Math.random() * 10000}>
            <div className="comments__comment">
              <div className="comments__comment-img">
                <img className="comments__comment-img-pic" src={placeholderImg} alt="Comment placeholder" />
              </div>
              <div className="comments__comment-right">
                <div className="comments__comment-name">{el?.name}</div>
                <div className="comments__comment-date">{el?.commentdate}</div>
                <div className="comments__comment-comment">{el?.comment}</div>
              </div>
            </div>
            <hr className="comments__comment-hr" />
          </div>
        );
      })}
    </div>
  );
}
