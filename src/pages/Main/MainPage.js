import SelectedVideoInformation from "./components/SelectedVideoInformation/SelectedVideoInformation";
import VideoList from "./components/VideoList/VideoList";
import Comments from "./components/Comments/Comments";
import JoinTheConversation from "./components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import Nav from "./components/Nav/Nav";

function MainPage() {
  return (
    <div>
      <Nav />
      <SelectedVideo video={selectedVideo} />
      <SelectedVideoInformation video={selectedVideo} getDate={getDate} />
      <JoinTheConversation />
      <Comments data={selectedVideo} getDate={getDate} />
      <VideoList
        data={videoData}
        video={selectedVideo}
        clickHandler={clickHandler}
      />
    </div>
  );
}

export default MainPage;
