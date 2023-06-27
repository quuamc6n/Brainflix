import { useState } from "react";
import videoData from "../../data/video-details.json"
import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import VideoList from "../../Components/VideoList/VideoList";
import Comments from "../../Components/Comments/Comments";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";

function MainPage() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  const getDate = (timestamp) => {
    let date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div>
      <SelectedVideo video={selectedVideo} />
      <SelectedVideoInformation video={selectedVideo} getDate={getDate} />
      <JoinTheConversation />
      <Comments data={selectedVideo} getDate={getDate} />
      <VideoList
        data={videoData}
        video={selectedVideo}
      />
    </div>
  );
}

export default MainPage;
