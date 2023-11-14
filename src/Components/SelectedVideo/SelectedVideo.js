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
          `https://brainflexbackend.onrender.com/videos/${videoId}`
        )
        .then((response) => {
          setVideo(response.data);
        });
    } else {
      axios
        .get(
          `https://brainflexbackend.onrender.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8`
        )
        .then((response) => {
          setVideo(response.data);
        });
    }
  }, [videoId]);

  if (!video) {
    return <p>Retrieving data. Please be patient, backend is hosted on a free account. It takes a few seconds!</p>;
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
