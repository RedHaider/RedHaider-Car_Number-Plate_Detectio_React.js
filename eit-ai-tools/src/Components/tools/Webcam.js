import React, { useEffect, useRef, useState } from 'react';
import '../style.css';

const Webcam = ({ onCapture }) => {
  const videoRef = useRef(null);
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  useEffect(() => {
    const getVideoDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setVideoDevices(videoDevices);
        if (videoDevices.length > 0) {
          setSelectedDeviceId(videoDevices[0].deviceId);
        }
      } catch (err) {
        console.error("Error enumerating devices:", err);
      }
    };

    getVideoDevices();
  }, []);

  useEffect(() => {
    const startVideo = async () => {
      if (selectedDeviceId) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: selectedDeviceId } }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
            };
          }
        } catch (err) {
          console.error("Error accessing webcam:", err);
        }
      }
    };

    startVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [selectedDeviceId]);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageSrc = canvas.toDataURL('image/jpeg');
      onCapture(imageSrc);
    }
  };

  return (
    <div>
      <select className='mb-2' onChange={handleDeviceChange} value={selectedDeviceId || ''}>
        {videoDevices.map(device => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || 'Unnamed Device'}
          </option>
        ))}
      </select>
      <video ref={videoRef} autoPlay width="100%" height="auto" className="video-style" />
      <button type="button" className="btn btn-dark mt-3" onClick={handleCapture}>Capture</button>
    </div>
  );
};

export default Webcam;
