import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";
import VideoList from "../../Components/VideoList/VideoList";

function VideoPlayer() {

  return (
    <div>
      <SelectedVideo />
      <SelectedVideoInformation />
      <JoinTheConversation />
      {/* <Comments data={videos} getDate={getDate} /> */}
      <VideoList />
    </div>
  );
}

export default VideoPlayer