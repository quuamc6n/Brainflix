import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import videoData from "../../data/video-details.json"
// import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import VideoList from "../../Components/VideoList/VideoList";
// import Comments from "../../Components/Comments/Comments";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";
import axios from "axios";
// import HomeList from "../../Components/HomeList/HomeList";
// import VideoPlayer from "../VideoPlayer/VideoPlayer";

function MainPage() {
  // const [videos, setVideos] = useState(null);
  // const video = props.videoList[0];

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E"
  //     )
  //     .then((response) => {
  //       setVideo(response.data[0])
  //     });
  // }, []);

  // if (!video) {
  //   return <p>Retrieving videos...</p>;
  // }

  // const getDate = (timestamp) => {
  //   let date = new Date(timestamp);
  //   return date.toLocaleDateString();
  // };

  const { videoId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
      )
      .then((videoList) => {
        setVideos(videoList.data);
        setSelectedVideo(videoList.data[0]);
      });
  }, []);

  useEffect(() => {
    if (videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        });
      // }else{
      //   axios
      //     .get(
      //       "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E"
      //     )
      //     .then((response) => {
      //       // console.log("Third console", response.data);
      //       setSelectedVideo(response.data);
      //     });
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
      {/*video={selectedVideo}*/}
      {/* <SelectedVideoInformation /> */}
      <JoinTheConversation />
      {/* <Comments data={videos} getDate={getDate} /> */}
      <VideoList filterVideo={filterVideo} />
      {/* <HomeList videos={props.videoList} video={video} /> */}
    </div>
  );
}

export default MainPage;
