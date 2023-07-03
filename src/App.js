import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/Main/MainPage";
import UploadPage from "./pages/Upload/UploadPage";
import Nav from "./Components/Nav/Nav";

function App() {

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
