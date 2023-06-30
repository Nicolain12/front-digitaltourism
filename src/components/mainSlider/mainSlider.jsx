import React, { useState } from 'react';
import './mainSlider.css';

function mainSlider(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = props.imgs;
    const reachs = props.reach;

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
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    const packDetail = (id) => {
        if (userLogged) window.location.href = `/packageDetail/${id}`
        if (!userLogged) window.location.href = `/loggin`
    }

    return (
        <div className="App-mainSlider">
            <div className="ms-slider-arrows">
                <i className="ms-arrows-slider fa-solid fa-arrow-left" onClick={goToPreviousImage}></i>
                <i className="ms-arrows-slider fa-sharp fa-solid fa-arrow-right" onClick={goToNextImage}></i>
            </div>
            <div className="ms-slider-images-div">
                {images.map((imageName, index) => (
                    <div key={index} className={`ms-image-reach-div ${index === currentImageIndex ? 'ms-active-div' : 'ms-not-active'}`}>
                        <img
                            key={`${index}-${currentImageIndex}`}
                            className={`ms-slider-img ${index === currentImageIndex ? 'ms-active' : 'ms-not-active'}`}
                            src={`http://localhost:3001/images/flights/product_${props.id[index]}/${imageName}`}
                            alt={`Image ${index}`}
                            onClick={() => { packDetail(props.packId[index]) }}
                        />
                        <h2 className='ms-reach'>{reachs[index]}</h2>
                    </div>
                ))}
            </div>
        </div>);
}

export default mainSlider;
