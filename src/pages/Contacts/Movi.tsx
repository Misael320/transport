import React from "react";

const Movi: React.FC = () => {
  return (
    <div>
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/7SNycTMOF74?si=tXFvPsQnLNugrhUL"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Movi;
