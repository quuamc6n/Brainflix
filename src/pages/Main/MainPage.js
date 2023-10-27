import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import VideoList from "../../Components/VideoList/VideoList";
import Comments from "../../Components/Comments/Comments";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";
import axios from "axios";

function MainPage() {
  const { videoId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://brainflexbackend.onrender.com/videos`)
      .then((videoList) => {
        setVideos(videoList.data);
        setSelectedVideo(videoList.data[0]);
      });
  }, []);

useEffect(() => {
  if (videoId) {
    axios
      .get(`https://brainflexbackend.onrender.com/videos/${videoId}`)
      .then((response) => {
        setSelectedVideo(response.data);
      });
  }
}, [videoId]);

  const filterVideo = videos.filter((ele) => {
    return ele.id !== selectedVideo.id;
  });

  if (!videos) {
    return <p>Retrieving videos</p>;
  }

  return (
    <div>
      <SelectedVideo selectedVideo={selectedVideo} />
      <SelectedVideoInformation />
      <JoinTheConversation />
      <Comments />
      <VideoList filterVideo={filterVideo} />
    </div>
  );
}

export default MainPage;
