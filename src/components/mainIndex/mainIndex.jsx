import React, { useEffect, useState, useRef } from 'react';
import './mainIndex.css';
import MainSlider from '../mainSlider/mainSlider';

function MainIndex() {
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
    //Slider logic
    const [imagesSlider, setImagesSlider] = useState([])
    const [reachSlider, setReachSlider] = useState([])
    const [userIdSlider, setUserIdSlider] = useState([])
    const [packageId, setPackageId] = useState([])
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
                const arrToSlider = []
                const reachToSlider = []
                const userIdToSlider = []
                const productIdToSlider = []
                packageData.data.forEach(element => {
                    const imgFliArr = JSON.parse(element.flights.image)
                    arrToSlider.push(imgFliArr[0])
                    reachToSlider.push(element.flights.reach)
                    userIdToSlider.push(element.user_id)
                    productIdToSlider.push(element.id)
                });
                setImagesSlider(arrToSlider);
                setReachSlider(reachToSlider)
                setUserIdSlider(userIdToSlider)
                setPackageId(productIdToSlider)
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    //Search logic
    const [cabin, setCabin] = useState('')
    const [service, setService] = useState('')
    const [departure, setDeparture] = useState('')
    const [reach, setReach] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [returnDate, setReturnDate] = useState('')

    return (
        <div className="App-mainIndex">
            <main className="mainIndex">
                {imagesSlider.length > 0 ? <MainSlider imgs={imagesSlider} reach={reachSlider} id={userIdSlider} packId={packageId}></MainSlider>
                    : <h2>Loading...</h2>}
                <section className="section-nav">
                    <div className="div-top">
                        <div className="busca-paquete">
                            <h4>Search your next travel here</h4>
                        </div>
                        <div className="div-filters">
                            <div className="main-select">
                                <select name="" id="">
                                    <option value="none">Cabin type</option>
                                    <option value="">Economy</option>
                                    <option value="">Premium</option>
                                    <option value="">Premium vip</option>
                                </select>
                            </div>
                            <div className="main-select">
                                <select name="" id="">
                                    <option value="none">Service</option>
                                    <option value="">2 Estrellas</option>
                                    <option value="">3 Estrellas</option>
                                    <option value="">4 Estrellas</option>
                                    <option value="">5 Estrellas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <form className="nav-gaps" action="">
                        <div className="div-origen-destino">
                            <div className="div-origen">
                                <label className="main-label" htmlFor="Origen"><i className="fa-solid fa-plane-departure"></i></label>
                                <input className="main-input" type="text" id="Origen" name="Origen" placeholder="Departure"></input>
                            </div>
                            <div className="div-destino">
                                <label className="main-label" htmlFor="destino"><i className="fa-solid fa-location-dot"></i></label>
                                <input className="main-input" type="text" id="destino" name="destino" placeholder="Reach"></input>
                            </div>
                        </div>
                        <div className="div-ida-vuelta">
                            <div className="div-ida">
                                <label className="main-label" htmlFor="ida">Departure Date</label>
                                <input className="main-input" type="date" id="ida" name="ida"></input>
                            </div>
                            <div className="div-vuelta">
                                <label className="main-label" htmlFor="vuelta">Return Date</label>
                                <input className="main-input" type="date" id="vuelta" name="vuelta"></input>
                            </div>
                        </div>
                        <div className="div-search">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </form>

                </section>
                <div className="title-div">
                    <h2 className="articles-title">Trending Packages</h2>
                </div>
            </main>
        </div>
    );
}

export default MainIndex;
