import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./VideoList.scss";

const VideoList = (props) => {

  // const clickHandler = ((video) => {
  //   setVideoList(videoList);
  // })

  //films is state below
  // filteredFilms = films.filter(() => {film.id !==
  // selectedFilm.id }) -> Just give the list of all films
  // that excludes the state. Use the filtered films array and
  // .map the filtered, not the full list
  // const clickHandler = (selectedFilm) => {
  // setSelectedFilm(selectedFilm); }
  // From here, you want to add the onClick to the Link
  // object created in the .map videoList

  // console.log(props.videoList)

  return (
    <ul className="video__list">
      <p className="nextVideos">NEXT VIDEOS</p>
      {props.filterVideo.map((video) => {
        return (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <li
              className="video__list-item"
            >
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
};

export default VideoList;
