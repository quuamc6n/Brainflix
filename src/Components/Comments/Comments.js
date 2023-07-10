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
          `http://localhost:5050/videos/${videoId}`
        )
        .then((response) => {
          setVideo(response.data);
        });
    } else {
      axios
        .get(
          `http://localhost:5050/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=%3C5fa51be9-74bb-44ef-8e90-a71d57b38ff6%3E`
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
