import React from "react";

function VideoFrame({ videoKey }: any) {
  return (
    <iframe
      width="100%"
      height="800"
      src={`https://www.youtube.com/embed/${videoKey}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default VideoFrame;
