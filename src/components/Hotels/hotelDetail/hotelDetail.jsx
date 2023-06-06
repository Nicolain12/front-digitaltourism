import React, { useState, useRef, useEffect } from 'react';
import './hotelDetail.css';
import { useParams } from 'react-router-dom';
import Slider from '../../slider/slider';



function HotelDetail() {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [hotelImgs, setHotelImgs] = useState([]);
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
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))


    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const hotelData = await fetchApi(`http://localhost:3001/api/products/hotel/${id}`, {
                    method: 'GET',
                    headers,
                });
                const parsedHotelData = {
                    ...hotelData.data,
                };
                parsedHotelData.image = JSON.parse(hotelData.data.image)
                setHotel(parsedHotelData);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const imagesToPush = []
        if (typeof hotel.image == 'object'); {
            for (let key in hotel.image) {
                if (hotel.image.hasOwnProperty(key)) {
                    imagesToPush.push(hotel.image[key])
                }
            }
        }
        setHotelImgs(imagesToPush)
    }, [hotel])

    return (
        <div className="App-hotelDetail">
            <main className="hd-main-detail-flight">
                <section className="hd-section-info">

                    <div className="hd-carousel_detail-flight">
                        {hotelImgs.length == 0 ? <h3>Loading...</h3> : <Slider type={'hotel'} imgs={hotelImgs} id={hotel.user_id}></Slider>}
                    </div>

                    <div className="hd-detail-flight-info">
                        <div className="hd-detail-flight-info-maininfo">
                            <div className="hd-detail-flight-info-header">
                                <h3></h3>
                            </div>
                            <div className="hd-detail-flight-info-data">
                                <div className="hd-detail-flight-departure">
                                    <h4 className="hd-detail-flight-h4">Hotel</h4>
                                    <p className="hd-detail-flight-date">{hotel.name}</p>
                                </div>
                                <div className="hd-detail-flight-reach">
                                    <h4 className="hd-detail-flight-h4">Ubication</h4>
                                    <p className="hd-detail-flight-date">{hotel.spot}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hd-detail-flight-info">
                        <div className="hd-detail-flight-info-title">
                            <h3>Service Information</h3>
                        </div>

                        <div className="hd-detail-flight-info-maininfo">
                            <div className="hd-detail-flight-info-header">
                                <h3>Service: {Array.from({ length: hotel.service }).map((_, index) => (
                                    <i key={index} className="fa-solid fa-star"></i>
                                ))}</h3>

                            </div>
                            <div className="hd-detail-flight-info-data">
                                <div className="hd-detail-flight-departure">
                                    <div >
                                    </div>
                                    <div className="hd-detail-flight-description">
                                        <h5>Description</h5>
                                        <p>{hotel.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {userLogged.id == hotel.user_id ? <section className="hd-detail-flight-button-section">
                    <button className="hd-detail-flight-button btn-df-edit">Editar</button>
                    <button className="hd-detail-flight-button btn-df-delete">Eliminar</button>
                </section> : <section className="hd-detail-flight-button-section">
                    <div className="hd-detail-flight-button-buy">
                        <p>Price: $999999</p>
                        <button className="hd-detail-flight-button btn-df-buy">Comprar</button>
                    </div>
                </section>}
            </main>

        </div>
    );
}

export default HotelDetail;
