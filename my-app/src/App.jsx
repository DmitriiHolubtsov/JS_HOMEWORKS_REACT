import React from 'react';
import Carousel from './components/Carousel';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';

// Load images from local assets folder
const images = [image1, image2, image3];

function App() {
  // Rendering component with our images
  return <Carousel images={images} />;
}
export default App;
