import React from "react";

const YouTubeVideoGrid = () => {
  // The full video URL you provided
  const videoLink = "https://www.youtube.com/watch?v=083MKnW3KiE";

  // Extract the video ID from the URL
  const videoIdMatch = videoLink.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  // If a videoId is found, create the embed URL
  const videoUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    : "";
  const videos = new Array(50).fill(null);

  return (
    <div className="grid grid-cols-5 gap-4 p-4 overflow-y-auto">
      {videos.map((_, index) => (
        <iframe
          key={index}
          width="300"
          height="200"
          src={videoUrl}
          title={`YouTube video ${index + 1}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default YouTubeVideoGrid;