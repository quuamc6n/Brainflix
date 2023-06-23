import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import "./styles/partials/Resets.scss";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import videoData from "./data/video-details.json";


function App() {
const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  return (
    <div className="App">
      <Nav />
      <SelectedVideo video={selectedVideo}/>
    </div>
  );
}

export default App;
