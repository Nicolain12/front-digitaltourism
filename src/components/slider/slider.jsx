import React, { useState } from 'react';
import './slider.css';

function Slider(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = props.imgs;



  let imgFolder;
  const packageArr = []

  if (props.type == 'flight') imgFolder = `http://localhost:3001/images/flights/product_${props.id}`
  if (props.type == 'hotel') imgFolder = `http://localhost:3001/images/hotels/product_${props.id}`
  if (props.type == 'package') {
    images[0].forEach(element => {
      packageArr.push(`http://localhost:3001/images/flights/product_${props.id}/${element}`)
    })
    images[1].forEach(element => {
      packageArr.push(`http://localhost:3001/images/hotels/product_${props.id}/${element}`)
    })
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const goToNextImagePackage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === packageArr.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const goToPreviousImagePackage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return packageArr.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (props.type != 'package' ?
    <div className="App-slider">
      <div className="slider-arrows">
        <i className="fa-solid fa-arrow-left" onClick={goToPreviousImage}></i>
        <i className="fa-sharp fa-solid fa-arrow-right" onClick={goToNextImage}></i>
      </div>
      <div className="slider-images-div">
        {images.map((imageName, index) => (
          <img
            key={`${index}-${currentImageIndex}`}
            className={`slider-img ${index === currentImageIndex ? 'active' : 'not-active'}`}
            src={`${imgFolder}/${imageName}`}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
    :
    <div className="App-slider">
      <div className="slider-arrows">
        <i className="fa-solid fa-arrow-left" onClick={goToPreviousImagePackage}></i>
        <i className="fa-sharp fa-solid fa-arrow-right" onClick={goToNextImagePackage}></i>
      </div>
      <div className="slider-images-div">
        {packageArr.map((imageName, index) => (
          <img
            key={`${index}-${currentImageIndex}`}
            className={`slider-img ${index === currentImageIndex ? 'active' : 'not-active'}`}
            src={imageName}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>);
}

export default Slider;
