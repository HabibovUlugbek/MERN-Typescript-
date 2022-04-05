import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Videoslist from "./components/Videos/Videoslist";
import VideoForm from "./components/Videos/VideoForm";
import Navbar from "./components/Navbar/Navbar";

import "bootswatch/dist/pulse/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <div className='container p-4'>
      <Routes>
        <Route path='/' element={<Videoslist />} />
        <Route path='/new-video' element={<VideoForm />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
