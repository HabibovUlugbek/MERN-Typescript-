import { ChangeEvent, useState } from "react";
import { Video } from "./Video";
import * as videoService from "./VideoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const [video, setVideo] = useState<Video>({
    title: "",
    url: "",
    description: "",
  });

  const handleInput = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await videoService.createVideo(video);
    console.log(res);
  };

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className='form-group mx-2 my-3'>
                <input
                  type='text'
                  name='title'
                  placeholder='Video title'
                  className='form-control'
                  onChange={handleInput}
                  autoFocus
                />
              </div>
              <div className='form-group mx-2 my-3'>
                <input
                  type='text'
                  name='url'
                  placeholder='https://somesite.com'
                  onChange={handleInput}
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <textarea
                  name='description'
                  rows={3}
                  placeholder='Write a description for title'
                  onChange={handleInput}
                  className='form-control mx-2 my-3'></textarea>
              </div>
              <button type='submit' className='btn btn-primary mx-2 my-1'>
                Create Video
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
