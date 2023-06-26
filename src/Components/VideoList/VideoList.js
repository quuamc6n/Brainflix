import "./VideoList.scss";

const VideoList = (props) => {
  const filterVideo = props.data.filter((ele) => {
    return ele.id !== props.video.id;
  });

  return (
    <ul className="video__list">
      <p className="nextVideos">NEXT VIDEOS</p>
      {filterVideo.map((ele) => {
        return (
          <li
            onClick={() => {
              props.clickHandler(ele);
            }}
            key={ele.id}
            className="video__list-item"
          >
            <div className="video__list-item-image-container">
              <img
                className="video__list-item-image"
                src={ele.image}
                alt={ele.title}
              ></img>
            </div>
            <div className="video__list-item-text-container">
              <p className="video__list-item-text video__list-item-text--bold">
                {ele.title}
              </p>
              <p className="video__list-item-text">{ele.channel}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default VideoList;
