import "./SelectedVideoInformation.scss";
import likes from "../../assets/Images/likes.svg";
import views from "../../assets/Images/views.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SelectedVideoInformation = () => {
  
  const getDate = (timestamp) => {
    let date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
        )
        .then((response) => {
          setVideo(response.data);
        });
    } else {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
        )
        .then((response) => {
          setVideo(response.data);
        });
    }
  }, [videoId]);

  if (!video) {
    return <p>Retriving video...</p>;
  }

  return (
    <div className="selectedInfo">
      <h2 className="selectedInfo__h2">{video.title}</h2>
      <div className="selectedInfo__main">
        <div className="selectedInfo__main-tablet">
          <p className="selectedInfo__channel">By {video.channel}</p>
          <p className="selectedInfo__date">
            {getDate(video.timestamp)}
          </p>
        </div>
        <div className="selectedInfo__div">
          <p className="selectedInfo__channel">By {video.channel}</p>
          <div className="selectedInfo__div-right">
            <img
              className="selectedInfo__icon"
              src={views}
              alt="Views Icon"
            ></img>
            <p className="selectedInfo__views">{video.views}</p>
          </div>
        </div>

        <div className="selectedInfo__main-tablet">
          <div className="selectedInfo__div-right">
            <img
              className="selectedInfo__icon"
              src={views}
              alt="Views Icon"
            ></img>
            <p className="selectedInfo__views">{video.views}</p>
          </div>
          <div className="selectedInfo__div-right">
            <img
              className="selectedInfo__icon"
              src={likes}
              alt="Likes Icon"
            ></img>
            <p className="selectedInfo__likes">{video.likes}</p>
          </div>
        </div>
        <div className="selectedInfo__div">
          <p className="selectedInfo__date">
            {getDate(video.timestamp)}
          </p>
          <div className="selectedInfo__div-right">
            <img
              className="selectedInfo__icon"
              src={likes}
              alt="Likes Icon"
            ></img>
            <p className="selectedInfo__likes">{video.likes}</p>
          </div>
        </div>
      </div>
      <p className="selectedInfo__desc">{video.description}</p>
    </div>
  );
}

export default SelectedVideoInformation