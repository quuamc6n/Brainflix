import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import "./styles/partials/Resets.scss";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import videoData from "./data/video-details.json";
import SelectedVideoInformation from "./components/SelectedVideoInformation/SelectedVideoInformation";
import VideoList from "./components/VideoList/VideoList";
import Comments from "./components/Comments/Comments";
import JoinTheConversation from "./components/JoinTheConversation/JoinTheConversation";


function App() {
const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

const clickHandler = (video) => {
  setSelectedVideo(video)
};

const getDate = (timestamp) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString();
};

return (
    <div className="App">
      <Nav />
      <SelectedVideo video={selectedVideo}/>
      <SelectedVideoInformation video={selectedVideo} getDate={getDate}/>
      <JoinTheConversation />
      <Comments data={selectedVideo} getDate={getDate}/>
      <VideoList data={videoData} video={selectedVideo} clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
