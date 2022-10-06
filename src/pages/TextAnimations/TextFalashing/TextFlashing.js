import React from 'react';
import './TextFlashing.css';
import video from '../../../assets/particles.mp4';

function TextFlashing() {
  return (
    <div className="text-flashing flex justify-center items-center h-screen bg-black">
      <video src={video} muted autoPlay className="absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none mix-blend-screen" />
      <h2 className="relative -mt-16 text-[4em] font-black text-white z-10 overflow-hidden"><span>P</span>articles Di<span>st</span>ortion Effects</h2>
    </div>
  );
}

export default TextFlashing;
