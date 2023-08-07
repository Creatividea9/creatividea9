import React from 'react';
import './Youtube.css'; // Import the CSS file for styling

const Youtube = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-video">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube Video"
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default Youtube;
