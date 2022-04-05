import ReactDOM from "react-dom";
import Videoslist from "./components/Videos/Videoslist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoForm from "./components/Videos/VideoForm";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Videoslist />} />
      <Route path='/new-video' element={<VideoForm />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
