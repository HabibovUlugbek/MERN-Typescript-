import { useState, useEffect } from "react";
import { Video } from "./Video";
import * as videoService from "./VideoService";

const Videoslist = () => {
  const loadVideos = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data);
  };

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      {videos &&
        videos.map((video: Video) => (
          <div>
            <h1>{video.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default Videoslist;
