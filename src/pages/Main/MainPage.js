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
      .get(
        `http://localhost:5050`
      )
      .then((videoList) => {
        setVideos(videoList.data);
        setSelectedVideo(videoList.data[0]);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
  //     )
  //     .then((videoList) => {
  //       setVideos(videoList.data);
  //       setSelectedVideo(videoList.data[0]);
  //     });
  // }, []);

  useEffect(() => {
    if (videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
        )
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
