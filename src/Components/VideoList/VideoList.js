import { Link } from "react-router-dom";
import "./VideoList.scss";

const VideoList = (props) => {

  return (
    <ul className="video__list">
      <p className="nextVideos">NEXT VIDEOS</p>
      {props.filterVideo.map((video) => {
        return (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <li
              className="video__list-item"
            >
              <div className="video__list-item-image-container">
                <img
                  className="video__list-item-image"
                  src={video.image}
                  alt={video.title}
                ></img>
              </div>
              <div className="video__list-item-text-container">
                <p className="video__list-item-text video__list-item-text--bold">
                  {video.title}
                </p>
                <p className="video__list-item-text">{video.channel}</p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default VideoList;
