import { useEffect, useState } from "react";
import VideoList from "./components/VideoList";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/videos"
      );
      const data = await res.json();

      setVideos(data.data.data);
      console.log(data.data.data)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="heading">YouTube Clone</h1>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;