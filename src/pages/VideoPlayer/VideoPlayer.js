// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";
// import axios from 'axios';
import VideoList from "../../Components/VideoList/VideoList";

function VideoPlayer() {

    // const { videoId } = useParams();
    // const [video, setVideo] = useState(null);

    // useEffect(() => {
    //   if (videoId) {
    //     axios
    //       .get(
    //         `https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
    //       )
    //       .then((response) => {
    //         setVideo(response.data);
    //       });
    //   } else {
    //     axios
    //       .get(
    //         `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
    //       )
    //       .then((response) => {
    //         setVideo(response.data);
    //       });
    //   }
    // }, [video]);

    // if (!video) {
    //   return <p>Retriving video...</p>;
    // }

  return (
    <div>
      <SelectedVideo />
      {/*video={selectedVideo}*/}
      <SelectedVideoInformation />
      <JoinTheConversation />
      {/* <Comments data={videos} getDate={getDate} /> */}
      <VideoList />
    </div>
  );
}

export default VideoPlayer