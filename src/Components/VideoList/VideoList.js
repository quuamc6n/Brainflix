import { useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import "./VideoList.scss";

const VideoList = () => {
  const [videos, setVideos] = useState(null);

  // const filterVideo = videos.filter((ele) => {
  //     return ele.id !== videos.id;
  //   });
  //   console.log(filterVideo)

  //   const clickHandler = ((videos) => {
  //     setVideos(videos);
  //   })

  //films is state below
  // filteredFilms = films.filter(() => {film.id !==
  // selectedFilm.id }) -> Just give the list of all films
  // that excludes the state. Use the filtered films array and
  // .map the filtered, not the full list
  // const clickHandler = (selectedFilm) => {
  // setSelectedFilm(selectedFilm); }
  // From here, you want to add the onClick to the Link
  // object created in the .map videoList

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E"
      )
      .then((response) => {
        setVideos(response.data);
      });
  }, []);

  if (!videos) {
    return <p>Retrieving videos...</p>;
  }

  return (
    <ul className="video__list">
      <p className="nextVideos">NEXT VIDEOS</p>
      {videos.map((video) => {
        return (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <li className="video__list-item">
              <div className="video__list-item-image-container">
                <img
                  className="video__list-item-image"
                  src={video.image}
                  alt={video.title}
                ></img>
              </div>
              <div className="video__list-item-text-container">
                <p className="video__list-item-text video__list-item-text--bold">
                  {video.title}
                </p>
                <p className="video__list-item-text">{video.channel}</p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default VideoList;
