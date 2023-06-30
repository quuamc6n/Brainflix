import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/Main/MainPage";
import UploadPage from "./pages/Upload/UploadPage";
import Nav from "./Components/Nav/Nav";
// import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
// import SelectedVideo from './Components/SelectedVideo/SelectedVideo';
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
// import VideoList from './Components/VideoList/VideoList';
// import SelectedVideo from './Components/SelectedVideo/SelectedVideo';
import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

function App() {
  // const [film, setFilm] = useState(null);
  // const [videoList, setVideoList] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E"
  //     )
  //     .then((response) => {
  //       setVideoList(response.data);
  //       setFilm(response.data[0])
  //     });
  // }, []);

  // if (!videoList) {
  //   return <p>Retrieving videos...</p>;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="videos/:videoId" element={<MainPage />}></Route>
          <Route path="UploadPage" element={<UploadPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
