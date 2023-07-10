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
          `http://localhost:5050/videos/${videoId}`
        )
        .then((response) => {
          setVideo(response.data);
        });
    } else {
      axios
        .get(
          `http://localhost:5050/videos/84e96018-4022-434e-80bf-000ce4cd12b8`
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
    <main>
      <div className="selectedVideo__div">
        <video
          className="selectedVideo"
          src={video.video}
          alt={video.title}
          poster={video.image}
        ></video>
      </div>
    </main>
  );
};

export default SelectedVideo;
