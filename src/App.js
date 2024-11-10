import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
//
import { Route, Routes } from 'react-router-dom';
import CameraComponent from './component/CameraComponent';
import Gallery from './component/Gallery';
import Navbar from './component/Navbar';

function App() {
  const [photos, setPhotos] = useState([]);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(16/9);
  console.log(camera)
  function base64ToBlob(base64String) {
    // Split the base64 string into two parts
    
    const parts = base64String.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uint8Array = new Uint8Array(rawLength);
  
    for (let i = 0; i < rawLength; ++i) {
      uint8Array[i] = raw.charCodeAt(i);
    }
  
    return new Blob([uint8Array], { type: contentType });
  }
  
  const takePhoto = async () => {
    console.log(camera.current)
    const photo = await camera.current.takePhoto();
    const blob = base64ToBlob(photo);
    console.log(blob)
    setPhotos(prevPhotos => [...prevPhotos, photo]);
    console.log(photos)
    setImage(photo); // Optionally update the current image state
  };
  

  const handleAspectRatioChange = (ratio) => {
    setAspectRatio(ratio);
  };
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<CameraComponent 
      camera={camera} 
      aspectRatio={aspectRatio} 
      handleAspectRatioChange = {handleAspectRatioChange}
      takePhoto={takePhoto}
      image = {image}
      numberOfCameras={numberOfCameras}
      setNumberOfCameras={setNumberOfCameras}
      />} />
      <Route path='gallery' element={<Gallery photos={photos} />} />
    </Routes>
    </>
    
  );
}

export default App;