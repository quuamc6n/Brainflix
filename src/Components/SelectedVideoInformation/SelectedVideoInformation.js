import "./SelectedVideoInformation.scss";
import likes from "../../assets/Images/likes.svg";
import views from "../../assets/Images/views.svg";

const SelectedVideoInformation = (props) => {
  return (
    <div className="selectedInfo">
      <h2 className="selectedInfo__h2">{props.video.title}</h2>
      <div className="selectedInfo__main">
        <div className="selectedInfo__div">
          <p className="selectedInfo__channel">By {props.video.channel}</p>
          <div className="selectedInfo__div-right">
            <img
              className="selectedInfo__icon"
              src={views}
              alt="Views Icon"
            ></img>
            <p className="selectedInfo__views">{props.video.views}</p>
          </div>
        </div>
        <div className="selectedInfo__div">
          <p className="selectedInfo__date">{props.getDate(props.video.timestamp)}</p>
          <div className="selectedInfo__div-right">
            <img
              className="selectedInfo__icon"
              src={likes}
              alt="Likes Icon"
            ></img>
            <p className="selectedInfo__likes">{props.video.likes}</p>
          </div>
        </div>
      </div>
      <p className="selectedInfo__desc">{props.video.description}</p>
    </div>
  );
}

export default SelectedVideoInformation