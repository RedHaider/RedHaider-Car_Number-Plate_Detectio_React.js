import '../style.css';
import React, { useEffect, useRef } from 'react';

const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to start the webcam feed
    const startVideo = async () => {
      try {
        // Request access to the webcam
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Assign the stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    startVideo();

    // Cleanup function to stop the video stream when the component is unmounted
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        width="300"
        height="225"
        className="video-style"
      />
    </div>
  );
};

export default Webcam;
