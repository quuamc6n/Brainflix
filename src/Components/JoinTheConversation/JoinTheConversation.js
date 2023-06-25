import "./JoinTheConversation.scss";
import uploadImage from "../../assets/Images/upload.svg";

const JoinTheConversation = () => {
  return (
    <div className="main">
      <p className="main__count">3 Comments</p>
      <div className="main__div">
        <div className="main__div-img-container">
          <img className="main__div-img"></img>
        </div>
        <div className="main__div-form-container">
            <h2 className="main__div-form-h2">JOIN THE CONVERSATION</h2>
            <form className="main__div-form">
                <label>
                    <input id="newComment"
                    className="main__div-form-input"
                    type="textarea"
                    name="comment"
                    placeholder="Add a new comment"></input>
                </label>
                <button className="main__div-form-button">COMMENT</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default JoinTheConversation