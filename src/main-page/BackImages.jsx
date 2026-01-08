import './BackImages.css'
import { useState, useEffect } from 'react'

function BackImages() {
  const [rowCount, setRowCount] = useState(2);

  useEffect(() => {
    const calculateRows = () => {
      const imageHeight = 456; // max height of images
      const viewportHeight = window.innerHeight;
      const neededRows = Math.ceil(viewportHeight / imageHeight) + 1; // +1 for safety
      setRowCount(neededRows);
    };

    calculateRows();
    window.addEventListener('resize', calculateRows);
    return () => window.removeEventListener('resize', calculateRows);
  }, []);

  // First row: images 1-6 repeating
  const row1Images = Array.from({ length: 6 }, (_, i) => `/Main-page/main-slide-images/${i + 1}.jpeg`);
  
  // Second row: images 7-12 repeating
  const row2Images = Array.from({ length: 6 }, (_, i) => `/Main-page/main-slide-images/${i + 7}.jpeg`);

  // Calculate how many times to repeat based on screen width
  const repeats = Math.ceil(window.innerWidth / (window.innerWidth / 6)) + 2;

  const renderRow = (images, rowIndex) => (
    <div key={rowIndex} className="image-row">
      {[...Array(repeats)].map((_, setIndex) => (
        images.map((src, imgIndex) => (
          <img 
            key={`row${rowIndex}-${setIndex}-${imgIndex}`} 
            src={src} 
            alt={`Gallery ${imgIndex + 1}`}
            className="gallery-image"
          />
        ))
      ))}
    </div>
  );

  return (
    <>
      <div className="gallery-container">
        {[...Array(rowCount)].map((_, index) => 
          renderRow(index % 2 === 0 ? row1Images : row2Images, index)
        )}
      </div>
      
      <div className="gradient-overlay"></div>
    </>
  )
}

export default BackImages
