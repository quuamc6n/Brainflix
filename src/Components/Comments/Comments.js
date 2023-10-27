import "./Comments.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comments = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

   const getDate = (timestamp) => {
     let date = new Date(timestamp);
     return date.toLocaleDateString();
   };

  useEffect(() => {
    if (videoId) {
      axios
        .get(
          `https://brainflexbackend.onrender.com/videos/${videoId}`
        )
        .then((response) => {
          setVideo(response.data);
        });
    } else {
      axios
        .get(
          `https://brainflexbackend.onrender.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8`
        )
        .then((response) => {
          setVideo(response.data);
        });
    }
  }, [videoId]);

  if (!video) {
    return <p>Retriving Comments...</p>;
  }

  return (
    <ul className="list">
      {video.comments.map((ele) => {
        return (
          <li key={ele.id} className="list__item">
            <div className="list__item-image"></div>
            <div className="list__item-div-container">
              <div className="list__item-div">
                <p className="list__item-div-name">{ele.name}</p>
                <span className="list__item-div-date">{getDate(ele.timestamp)}</span>
              </div>
              <div>
                <p className="list__item-div-comment">{ele.comment}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
