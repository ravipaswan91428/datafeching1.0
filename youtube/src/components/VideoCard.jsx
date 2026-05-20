function VideoCard({ video }) {

  const snippet = video?.items?.snippet;
  const statistics = video?.items?.statistics;

  if (!snippet) return <div>Loading...</div>;

  return (
    <div className="video-card">
      <img
        className="thumbnail"
        src={snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />

      <div className="video-info">
        <h3 className="title">{snippet?.title}</h3>
        <p className="channel">{snippet?.channelTitle}</p>
        <p className="meta">
          {statistics?.viewCount} views
        </p>
      </div>
    </div>
  );
}

export default VideoCard;