import "./Comment.scss";
import placeholderImg from "../../../Data/imgs/commentPlaceholder.png";

export default function Comment({ blogData }) {
  return (
    <div className="comments">
      <h2 className="comments__header">{blogData.length} COMMENTS</h2>
      {/* Create JSON file with data for each blog post, map comments to comment section, swap out placeholder data */}

      {blogData[0].comments.map((el) => {
        return (
          <>
            <div className="comments__comment">
              <div className="comments__comment-img">
                <img
                  className="comments__comment-img-pic"
                  src={placeholderImg}
                  alt="Comment placeholder image"
                />
              </div>
              <div className="comments__comment-right">
                <div className="comments__comment-name">{el.name}</div>
                <div className="comments__comment-date">{el.commentdate}</div>
                <div className="comments__comment-comment">{el.comment}</div>
              </div>
            </div>
            <hr className="comments__comment-hr" />
          </>
        );
      })}
    </div>
  );
}
