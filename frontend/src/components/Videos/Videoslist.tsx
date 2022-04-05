import { useState, useEffect } from "react";
import { Video } from "./Video";
import * as videoService from "./VideoService";
import VideoItem from "./VideoItem";

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
          <VideoItem key={video._id} video={video} />
        ))}
    </div>
  );
};

export default Videoslist;
