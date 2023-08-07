import React from 'react';
import Youtube from './Youtube';

const YouTubeGallery = () => {
  const videoIds = [
    'zRbB6yHxI0s', // Rick Astley - Never Gonna Give You Up
    'VY2RsCxtaSU', // PSY - GANGNAM STYLE
    'DcGPKTZXzh8',
    'TEfpbLPG1bM',
     'ESMG7b9EU5c',
    // Add more video IDs as needed
  ];

  return (
    <div className="youtube-gallery">
      {videoIds.map((videoId, index) => (
        <Youtube key={index} videoId={videoId} />
      ))}
    </div>
  );
};

export default YouTubeGallery;
