import React, { useState, useEffect } from 'react';
import './hotelList.css';

function HotelList() {
    async function fetchApi(endpoint, config) {
        try {
            const response = await fetch(endpoint, config);
            const jsonResponse = await response.json();
            if (jsonResponse.info.status === 200) {
                return jsonResponse
            }
            if (jsonResponse.info.status === 400) {
                console.log(jsonResponse);
            }
        } catch (err) {
            console.error(err);
        }
    }
    function objToArray(obj) {
        const imagesToArray = []
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                imagesToArray.push(obj[key])
            }
        }
        return imagesToArray
    }
    function ImageCarousel({ imgArray, id }) {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
            }, 3000);

            return () => clearInterval(interval);
        }, [imgArray]);

        return <img className='img-flight-list' src={`http://localhost:3001/images/hotels/product_${id}/${imgArray[currentImageIndex]}`} alt="" />;
    }

    const [hotels, setHotels] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const hotelData = await fetchApi(`http://localhost:3001/api/products/hotels`, {
                    method: 'GET',
                    headers,
                });
                setHotels(hotelData.data)
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="App-hotel-list">
            <main>
                <div className="main-div-hotel">
                    {hotels.map((hotel) => (
                        <article key={hotel.id} className="main-article-hotel">
                            <div className="hotel-img">
                                <ImageCarousel imgArray={objToArray(JSON.parse(hotel.image))} id={hotel.user_id} />
                            </div>
                            <div className="name-hotel">
                                <h3>{hotel.name}</h3>
                                <div className="service-hotel">
                                    <p>
                                        {Array.from({ length: hotel.service }).map((_, index) => (
                                            <i key={index} className="fa-solid fa-star"></i>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <div className="spot-hotel">
                                <p>{hotel.spot}</p>
                            </div>
                            <div className="price-hotel">
                                <p>$ {hotel.price}</p>
                                <a href=""><i className="fa-solid fa-plane-up add-cart-flight"></i></a>
                                <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

        </div>
    );
}

export default HotelList;
