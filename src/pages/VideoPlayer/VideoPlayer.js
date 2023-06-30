import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";
import VideoList from "../../Components/VideoList/VideoList";
// import { useState, useEffect } from "react";
// import axios from "axios";

function VideoPlayer(props) {
    // const [video, setVideo] = useState(props.film)
    // const [videoList, setVideoList] = useState(props.videoList)

    // {filterVideo && <VideoPlayer>}
    console.log("Videoplayer", props.filterVideo)

  return (
    <div>
      <SelectedVideo />
      <SelectedVideoInformation />
      <JoinTheConversation />
      {/* <Comments data={videos} getDate={getDate} /> */}
      <VideoList filterVideo={props.filterVideo} />
      {/* </VideoPlayer><VideoList video={video} videoList={videoList}/> */}
    </div>
  );
}

export default VideoPlayer;
