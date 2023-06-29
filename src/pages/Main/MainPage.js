import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import videoData from "../../data/video-details.json"
// import SelectedVideoInformation from "../../Components/SelectedVideoInformation/SelectedVideoInformation";
import VideoList from "../../Components/VideoList/VideoList";
// import Comments from "../../Components/Comments/Comments";
import JoinTheConversation from "../../Components/JoinTheConversation/JoinTheConversation";
import SelectedVideo from "../../Components/SelectedVideo/SelectedVideo";
import axios from 'axios';

function MainPage() {
  // const getDate = (timestamp) => {
  //   let date = new Date(timestamp);
  //   return date.toLocaleDateString();
  // };

  // const { videoId } = useParams();
  // const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  // console.log("first console", selectedVideo);
    useEffect(() => {
      // if (videoId) {
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E"
          )
          .then((response) => {
            // console.log("Second console", response.data)
            // console.log(response.data[0])
            setVideos(response.data);
            // console.log(response.data[0])
            // console.log("WE HERE", selectedVideo)
          })
        }, []);
    //   }else{
    //     axios
    //       .get(
    //           "https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E"
    //         )
    //         .then((response) => {
    //           // console.log("Third console", response.data);
    //           setSelectedVideo(response.data);
    //         });
    //       }
    // }, [videoId]);

  if (!videos) {
    return <p>Retrieving videos</p>;
  }

  return (
    <div>
      <SelectedVideo />
      {/*video={selectedVideo}*/}
      {/* {/* <SelectedVideoInformation video={videos} getDate={getDate} /> */}
      <JoinTheConversation />
      {/* <Comments data={videos} getDate={getDate} /> */}
      {/* <VideoList data={videoData} video={videos} /> */}
      <VideoList />
    </div>
  );
}

export default MainPage;
