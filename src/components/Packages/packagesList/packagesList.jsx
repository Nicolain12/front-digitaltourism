import React, { useEffect, useState, useRef } from 'react';
import './packageList.css';

function PackagesList() {
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

        return <img className='img-package-list' src={`http://localhost:3001/images/flights/product_${id}/${imgArray[currentImageIndex]}`} alt="" />;
    }

    const [packageData, setPackageData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const packageData = await fetchApi(`http://localhost:3001/api/products/packages`, {
                    method: 'GET',
                    headers,
                });
                setPackageData(packageData.data);
                console.log(packageData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    const articleClick = (id) => {
        const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
        if (userLogged) window.location.href = `/packageDetail/${id}`
        if (!userLogged) window.location.href = `/loggin`
    }
    return packageData.length == 0 ? (<h2>Loading...</h2>) : (
        <div className="App-package-list">
            <div className="main-packages">
                {packageData.map((packageProduct) => (
                    <article onClick={() => articleClick(packageProduct.id)} className="package-article" key={packageProduct.id}>

                    <div className="Departure-reach-pack">
                        <h3>{packageProduct.flights.departure}</h3>
                        <h3>------</h3>
                        <h3>{packageProduct.flights.reach}</h3>
                    </div>
                    <div className="second-pack-main-div">

                        <div className="img-div-pack">
                        <ImageCarousel imgArray={objToArray(JSON.parse(packageProduct.flights.image))} id={packageProduct.user_id}/>
                        </div>

                        <div className="main-pack-info">
                            <div className="info-pack-div-2">
                            <div className="flight-info-start">
                                <h5>Flight</h5>
                            </div>
                                <div className="departure-info-pack">
                                    <div>
                                        <h4>Departure:</h4>
                                        <p className="date-pack">{packageProduct.flights.departure_date}</p>
                                        <section className="line-f"></section>
                                        <p className="hour-pack">{packageProduct.flights.departure_hour}</p>
                                    </div>
                                    <section className="date-f"></section>
                                    <div>
                                        <h4>Return:</h4>
                                        <p className="date-pack">{packageProduct.flights.reach_date}</p>
                                        <section className="line-f"></section>
                                        <p className="hour-pack">{packageProduct.flights.reach_hour}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cabin-type">
                                <h4>Cabin type:</h4>
                                <p className="cabin">{packageProduct.flights.cabin}</p>
                            </div>

                            <div className="hotel-info-start">
                                <h5>HOTEL</h5>
                            </div>

                            <div className="name-hotel-pack">
                                <h3>{packageProduct.hotels.name}</h3>
                                <div className="service-hotel-pack">
                                    <p>{Array.from({ length: packageProduct.hotels.service }).map((_, index) => (
                                            <i key={index} className="fa-solid fa-star"></i>
                                        ))}</p>
                                </div>
                            </div>
                            <div className="spot-hotel">
                                <p>{packageProduct.hotels.spot}</p>
                            </div>

                            <div className="info-pack-div-5">
                                <p>$ {packageProduct.price}</p>
                                <a href=""><i className="fa-solid fa-plane-up add-cart-flight"></i></a>
                                {/* <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a> */}
                            </div>
                        </div>
                    </div>
                </article>
                ))}
            </div>
        </div>
    );
}

export default PackagesList;
