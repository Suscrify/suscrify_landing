import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import ModalVideo from 'react-modal-video';

const VideoModal = ({ className, onlyButton }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="_sEI2mijXZQ"
        onClose={() => setOpen(false)}
      />
      <a
        onClick={() => setOpen(true)}
        href="#!"
        className={` ${
          className
            ? 'text-decoration-none popup-youtube align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 ms-3'
            : 'video-icon popup-youtube text-decoration-none'
        }`}
      >
        <IoPlayCircleOutline className={`${onlyButton && 'fa-2x'}`} />

        {!onlyButton && (
          <span className="text-white ms-1 small"> Ver Video</span>
        )}
      </a>
    </>
  );
};

export default dynamic(() => Promise.resolve(VideoModal), { ssr: false });
