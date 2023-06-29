import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SelectedVideo.scss";

const SelectedVideo = () => {
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
    <div className="selectedVideo__div">
      {console.log(video.video)}
      <video
        className="selectedVideo"
        src={video.video}
        poster={video.image}
      ></video>
    </div>
  );
};

export default SelectedVideo;
