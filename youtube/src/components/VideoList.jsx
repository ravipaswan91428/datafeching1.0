import VideoCard  from "./VideoCard";

const VideoList = ({ videos }) => {
  return (
    <div className='video-container'>
      {videos.map((video, index) => (
        <VideoCard 
          key={video.id || index}
          video={video} 
        />
      ))}
    </div>
  )
}

export default VideoList;