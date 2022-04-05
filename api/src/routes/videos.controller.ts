import { RequestHandler } from "express";
import Videos from "./Videos";

export const createVideos: RequestHandler = async (req, res) => {
  const videoFound = await Videos.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({
      message: "Video already exists",
    });

  const video = new Videos(req.body);
  const savedVideo = await video.save();
  res.status(200).json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  const videos = await Videos.find();
  try {
    if (videos) return res.status(200).json(videos);
    return res.status(404).json({
      message: "No videos found",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const video = await Videos.findById(id);
  if (!video)
    return res.status(204).json({
      message: "Video not found",
    });

  res.json(video);
};

export const deletVideo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const video = await Videos.findByIdAndDelete(id);
  if (!video)
    return res.status(204).json({
      message: "Video not found",
    });

  res.json(video);
};

export const updateVideo: RequestHandler = async (req, res) => {
  const VideoUpdated = await Videos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!VideoUpdated)
    return res.status(204).json({ message: "Video not found" });
  res.json(VideoUpdated);
};
