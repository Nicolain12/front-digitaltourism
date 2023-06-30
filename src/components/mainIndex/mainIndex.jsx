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
    function ImageCarouselFlight({ imgArray, id }) {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
            }, 3000);

            return () => clearInterval(interval);
        }, [imgArray]);

        return <img className='img-flight-list' src={`http://localhost:3001/images/flights/product_${id}/${imgArray[currentImageIndex]}`} alt="" />;
    }
    function ImageCarouselHotel({ imgArray, id }) {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
            }, 3000);

            return () => clearInterval(interval);
        }, [imgArray]);

        return <img className='img-flight-list' src={`http://localhost:3001/images/hotels/product_${id}/${imgArray[currentImageIndex]}`} alt="" />;
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
    const [flightData, setFlightData] = useState([])
    const [hotelData, setHotelData] = useState([])
    const [packageData, setPackageData] = useState([])
    const refProductsDiv = useRef()
    const flightProductsRef = useRef()
    const hotelProductsRef = useRef()
    const packageProductsRef = useRef()
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
                const flightDataFetch = await fetchApi(`http://localhost:3001/api/products/flights`, {
                    method: 'GET',
                    headers,
                });
                const hotelDataFetch = await fetchApi(`http://localhost:3001/api/products/hotels`, {
                    method: 'GET',
                    headers,
                });
                const packageDataFetch = await fetchApi(`http://localhost:3001/api/products/packages`, {
                    method: 'GET',
                    headers,
                });
                setFlightData(flightDataFetch.data)
                setHotelData(hotelDataFetch.data)
                setPackageData(packageDataFetch.data)
                const arrToSlider = []
                const reachToSlider = []
                const userIdToSlider = []
                const productIdToSlider = []
                packageDataFetch.data.forEach(element => {
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
    const [flightProducts, setFlightProducts] = useState([])
    const [hotelProducts, setHotelProducts] = useState([])
    const [packageProducts, setPackageProducts] = useState([])
    const [cabin, setCabin] = useState('')
    const [service, setService] = useState('')
    const [departure, setDeparture] = useState('')
    const [reach, setReach] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [returnDate, setReturnDate] = useState('')

    const departureChangeHandler = (e) => {
        const departure = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDeparture(departure)
    }
    const reachChangeHandler = (e) => {
        const reach = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setReach(reach)
    }
    const departureDateChangeHandler = (e) => {
        const departureDate = e.target.value
        setDepartureDate(departureDate)
    }
    const reachDateChangeHandler = (e) => {
        const reachDate = e.target.value
        setReturnDate(reachDate)
    }
    const cabinChangeHandler = (e) => {
        setCabin(e.target.value)
    }
    const handleServiceChange = (event) => {
        const service = event.target.value
        setService(service)
    }

    useEffect(() => {
        const filteredFlights = flightData.filter(product => {
            if (departure && !product.departure.includes(departure)) {
                return false;
            }
            if (reach && !product.reach.includes(reach)) {
                return false;
            }
            if (departureDate && product.departureDate !== departureDate) {
                return false;
            }
            if (returnDate && product.reachDate !== returnDate) {
                return false;
            }
            if (cabin && product.cabin !== cabin) {
                return false;
            }
            if (!departure && !reach && !departureDate && !returnDate && !cabin) {
                return false
            }
            return true;
        })
        const filteredHotels = hotelData.filter(hotel => {
            if (reach && !hotel.spot.includes(reach)) {
                return false;
            }
            if (service && hotel.service !== service) {
                return false;
            }
            if (!service && !reach) {
                return false
            }
            return true;
        })
        const filteredPackages = packageData.filter(product => {
            if (departure && !product.flights.departure.includes(departure)) {
                return false;
            }
            if (reach && !product.flights.reach.includes(reach)) {
                return false;
            }
            if (departureDate && product.flights.departureDate !== departureDate) {
                return false;
            }
            if (returnDate && product.flights.reachDate !== returnDate) {
                return false;
            }
            if (cabin && product.flights.cabin !== cabin) {
                return false;
            }
            if (reach && !product.hotels.spot.includes(reach)) {
                return false;
            }
            if (service && product.hotels.service !== service) {
                return false;
            }
            if (!departure && !reach && !departureDate && !returnDate && !cabin && !service) {
                return false
            }
            return true;
        })
        setFlightProducts(filteredFlights)
        setHotelProducts(filteredHotels)
        setPackageProducts(filteredPackages)
    }, [cabin, service, departure, reach, departureDate, returnDate]);
    useEffect(() => {
        if (flightProducts.length > 0) {
            flightProductsRef.current.className = 'mi-product-flight'
        } else {
            flightProductsRef.current.className = 'mi-product-flight-hidden'
        }
        if (hotelProducts.length > 0) {
            hotelProductsRef.current.className = 'mi-product-hotel'
        } else {
            hotelProductsRef.current.className = 'mi-product-hotel-hidden'
        }
        if (packageProducts.length > 0) {
            packageProductsRef.current.className = 'mi-product-package'
        } else {
            packageProductsRef.current.className = 'mi-product-package-hidden'
        }
    }, [flightProducts, hotelProducts, packageProducts])
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    const articleClick = (id, type)=>{
        if(userLogged){
            if(type === 'flight')window.location.href = `/flightDetail/${id}`
            if(type === 'hotel')window.location.href = `/hotelDetail/${id}`
            if(type === 'pack')window.location.href = `/packageDetail/${id}`
        } 
        if(!userLogged) window.location.href = `/loggin`
    }
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
                                <select value={cabin} onChange={cabinChangeHandler}>
                                    <option value="none">Cabin type</option>
                                    <option value="Economy">Economy</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Premium VIP">Premium VIP</option>
                                </select>
                            </div>
                            <div className="main-select">
                                <select value={service} onChange={handleServiceChange}>
                                    <option value="none">Service</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <form className="nav-gaps" action="">
                        <div className="div-origen-destino">
                            <div className="div-origen">
                                <label className="main-label" htmlFor="Origen"><i className="fa-solid fa-plane-departure"></i></label>
                                <input value={departure} onChange={departureChangeHandler} className="main-input" type="text" id="Origen" name="Origen" placeholder="Departure"></input>
                            </div>
                            <div className="div-destino">
                                <label className="main-label" htmlFor="destino"><i className="fa-solid fa-location-dot"></i></label>
                                <input value={reach} onChange={reachChangeHandler} className="main-input" type="text" id="destino" name="destino" placeholder="Reach"></input>
                            </div>
                        </div>
                        <div className="div-ida-vuelta">
                            <div className="div-ida">
                                <label className="main-label" htmlFor="ida">Departure Date</label>
                                <input value={departureDate} onChange={departureDateChangeHandler} className="main-input" type="date" id="ida" name="ida"></input>
                            </div>
                            <div className="div-vuelta">
                                <label className="main-label" htmlFor="vuelta">Return Date</label>
                                <input value={returnDate} onChange={reachDateChangeHandler} className="main-input" type="date" id="vuelta" name="vuelta"></input>
                            </div>
                        </div>

                    </form>

                </section>
                <div ref={refProductsDiv} className="mi-articles-products">
                    <div ref={flightProductsRef} className='mi-product-flight-hidden'>
                        <h3>Flights</h3>
                        {flightProducts.map((flight) => (
                            <article onClick={() => articleClick(flight.id, 'flight')} className="mi-article-flight" key={flight.id}>
                                <div className="mi-img-flight">
                                    <ImageCarouselFlight imgArray={objToArray(JSON.parse(flight.image))} id={flight.user_id} />
                                </div>
                                <div className="mi-info-flight-div">
                                    <div className="mi-info-flight-div-1">
                                        <h3>{flight.departure}</h3>
                                        <h3>------</h3>
                                        <h3>{flight.reach}</h3>
                                    </div>
                                    <div className="mi-info-flight-div-2">
                                        <div className="mi-departure-info">
                                            <div>
                                                <h4>Departure:</h4>
                                                <p className="mi-date">{flight.departure_date}</p>
                                                <section className="mi-line-f"></section>
                                                <p className="mi-hour">{flight.departure_hour}</p>
                                            </div>
                                            <section className="mi-date-f"></section>
                                            <div>
                                                <h4>Return:</h4>
                                                <p className="mi-date">{flight.reach_date}</p>
                                                <section className="mi-line-f"></section>
                                                <p className="mi-hour">{flight.reach_hour}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mi-cabin-type">
                                        <h4>Cabin type:</h4>
                                        <p className="mi-cabin">{flight.cabin}</p>
                                    </div>
                                    <div className="mi-cabin-type">
                                        <h4>Description:</h4>
                                        <p className="mi-cabin">{flight.description}</p>
                                    </div>

                                    <div className="mi-info-flight-div-5">
                                        <p>$ {flight.price}</p>
                                        <i className="fa-solid fa-plane-up mi-add-cart-flight"></i>
                                        {/* <i className='fa-solid fa-plane-circle-check added-cart-flight'></i> */}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div ref={hotelProductsRef} className='mi-product-hotel-hidden'>
                        <h3>hotels</h3>
                        <div className='mi-product-hotel-inner-div'>
                        {hotelProducts.map((hotel) => (
                            <article onClick={() => { articleClick(hotel.id, 'hotel') }} key={hotel.id} className="mi-main-article-hotel">
                                <div className="mi-hotel-img">
                                    <ImageCarouselHotel imgArray={objToArray(JSON.parse(hotel.image))} id={hotel.user_id} />
                                </div>
                                <div className="mi-name-hotel">
                                    <h3>{hotel.name}</h3>
                                    <div className="mi-service-hotel">
                                        <p>
                                            {Array.from({ length: hotel.service }).map((_, index) => (
                                                <i key={index} className="fa-solid fa-star"></i>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="mi-spot-hotel">
                                    <p>{hotel.spot}</p>
                                </div>
                                <div className="mi-price-hotel">
                                    <p>$ {hotel.price}</p>
                                    <a href=""><i className="fa-solid fa-plane-up mi-add-cart-flight"></i></a>
                                    {/* <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a> */}
                                </div>
                            </article>
                        ))}
                        </div>
                    </div>
                    <div ref={packageProductsRef} className='mi-product-package-hidden'>
                        <h3>packages</h3>
                        {packageProducts.map((packageProduct) => (
                            <article onClick={() => articleClick(packageProduct.id, 'pack')} className="mi-package-article" key={packageProduct.id}>

                                <div className="mi-Departure-reach-pack">
                                    <h3>{packageProduct.flights.departure}</h3>
                                    <h3>------</h3>
                                    <h3>{packageProduct.flights.reach}</h3>
                                </div>
                                <div className="mi-second-pack-main-div">

                                    <div className="mi-img-div-pack">
                                        <ImageCarouselFlight imgArray={objToArray(JSON.parse(packageProduct.flights.image))} id={packageProduct.user_id} />
                                    </div>

                                    <div className="mi-main-pack-info">
                                        <div className="mi-info-pack-div-2">
                                            <div className="mi-flight-info-start">
                                                <h5>Flight</h5>
                                            </div>
                                            <div className="mi-departure-info-pack">
                                                <div>
                                                    <h4>Departure:</h4>
                                                    <p className="mi-date-pack">{packageProduct.flights.departure_date}</p>
                                                    <section className="mi-line-f"></section>
                                                    <p className="mi-hour-pack">{packageProduct.flights.departure_hour}</p>
                                                </div>
                                                <section className="date-f"></section>
                                                <div>
                                                    <h4>Return:</h4>
                                                    <p className="mi-date-pack">{packageProduct.flights.reach_date}</p>
                                                    <section className="mi-line-f"></section>
                                                    <p className="mi-hour-pack">{packageProduct.flights.reach_hour}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mi-cabin-type">
                                            <h4>Cabin type:</h4>
                                            <p className="mi-cabin">{packageProduct.flights.cabin}</p>
                                        </div>

                                        <div className="mi-hotel-info-start">
                                            <h5>HOTEL</h5>
                                        </div>

                                        <div className="mi-name-hotel-pack">
                                            <h3>{packageProduct.hotels.name}</h3>
                                            <div className="mi-service-hotel-pack">
                                                <p>{Array.from({ length: packageProduct.hotels.service }).map((_, index) => (
                                                    <i key={index} className="fa-solid fa-star"></i>
                                                ))}</p>
                                            </div>
                                        </div>
                                        <div className="mi-spot-hotel">
                                            <p>{packageProduct.hotels.spot}</p>
                                        </div>

                                        <div className="mi-info-pack-div-5">
                                            <p>$ {packageProduct.price}</p>
                                            <a href=""><i className="fa-solid fa-plane-up mi-add-cart-flight"></i></a>
                                            {/* <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainIndex;
