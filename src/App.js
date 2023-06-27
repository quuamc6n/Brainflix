import { useState } from "react";
import "./App.css";
// import Nav from "./components/Nav/Nav";
import "./styles/partials/Resets.scss";
// import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import videoData from "./data/video-details.json";
// import SelectedVideoInformation from "./components/SelectedVideoInformation/SelectedVideoInformation";
// import VideoList from "./components/VideoList/VideoList";
// import Comments from "./components/Comments/Comments";
// import JoinTheConversation from "./components/JoinTheConversation/JoinTheConversation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/Main/MainPage";


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
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage data={selectedVideo} clickHandler={clickHandler} />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
