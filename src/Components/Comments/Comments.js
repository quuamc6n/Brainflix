import "./Comments.scss";

const Comments = (props) => {
  const comment = props.data.comments;

  return (
    <ul className="list">
      {comment.map((ele) => {
        return (
          <li key={ele.id} className="list__item">
            <div className="list__item-image"></div>
            <div className="list__item-div-container">
              <div className="list__item-div">
                <p className="list__item-div-name">{ele.name}</p>
                <span className="list__item-div-date">{ele.timestamp}</span>
              </div>
              <div>
                <p className="list__item-div-comment">{ele.comment}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
