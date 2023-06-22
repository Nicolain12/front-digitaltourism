import React, { useEffect, useState, useRef } from 'react'
import './packageDetail.css'
import { useParams } from 'react-router-dom'
import Slider from '../../slider/slider'
import DeleteProduct from '../../Popups/deleteProduct/deleteProduct';

function PackageDetail() {
    const { id } = useParams()
    const [buttonPopup, setButtonPopup] = useState(false)
    const [packageProduct, setPackageProduct] = useState({})
    const [packageImgsF, setPackageImgsF] = useState([])
    const [packageImgsH, setPackageImgsH] = useState([])
    async function fetchApi(endpoint, config) {
        try {
            const response = await fetch(endpoint, config)
            const jsonResponse = await response.json()
            if (jsonResponse.info.status === 200) {
                return jsonResponse

            }
            if (jsonResponse.info.status === 400) {
                console.log(jsonResponse)
            }
        } catch (err) {
            console.error(err)
        }
    }
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    const deleteButton = () => {
        setButtonPopup(true)
    }
    const refSliderDiv = useRef()
    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {}
                const permanentToken = localStorage.getItem('token')
                const token = sessionStorage.getItem('token')
                if (token) headers.authorization = token
                if (permanentToken) headers.authorization = permanentToken
                const packageData = await fetchApi(`http://localhost:3001/api/products/package/${id}`, {
                    method: 'GET',
                    headers,
                })
                const parsedPackageData = {
                    ...packageData.data,
                }
                parsedPackageData.flight.image = JSON.parse(packageData.data.flight.image)
                parsedPackageData.hotel.image = JSON.parse(packageData.data.hotel.image)
                const imagesFlightToPush = []
                const imagesHotelToPush = []
                if (typeof parsedPackageData.flight.image == 'object'); {
                    for (let key in parsedPackageData.flight.image) {
                        if (parsedPackageData.flight.image.hasOwnProperty(key)) {
                            imagesFlightToPush.push(parsedPackageData.flight.image[key])
                        }
                    }
                }
                if (typeof parsedPackageData.hotel.image == 'object'); {
                    for (let key in parsedPackageData.hotel.image) {
                        if (parsedPackageData.hotel.image.hasOwnProperty(key)) {
                            imagesHotelToPush.push(parsedPackageData.hotel.image[key])
                        }
                    }
                }
                setPackageImgsF(imagesFlightToPush)
                setPackageImgsH(imagesHotelToPush)
                setPackageProduct(parsedPackageData)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])
    const toEditPackage = ()=>{
        window.location.href = `/packagesUpdate/${packageProduct.package.id}`
    }

    return (packageProduct.flight ? 
        <div className="App-packageDetail">
            <main className="main-detail-flight">
                <section className="section-info">

                    <div ref={refSliderDiv} className="carousel_detail-flight">
                    {packageImgsF.length == 0 || packageImgsH.length == 0 ? 
                    <h3>Loading...</h3> : 
                    <Slider type={'package'} imgs={[[...packageImgsF], [...packageImgsH]]} id={packageProduct.package.user_id}></Slider>}
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>{packageProduct.flight.departure} ---- {packageProduct.flight.reach}</h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h4 className="detail-flight-h4">Departure:</h4>
                                    <p className="detail-flight-date">{packageProduct.flight.departure_date}</p>
                                    <p className="detail-flight-hour">{packageProduct.flight.departure_hour}</p>
                                </div>
                                <div className="detail-flight-reach">
                                    <h4 className="detail-flight-h4">Return:</h4>
                                    <p className="detail-flight-date">{packageProduct.flight.reach_date}</p>
                                    <p className="detail-flight-hour">{packageProduct.flight.reach_hour}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-title">
                            <h3>Airline information</h3>
                        </div>

                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>Airline: {packageProduct.flight.airline}</h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h5>Cabin: {packageProduct.flight.cabin}</h5>
                                    <div className="detail-flight-description">
                                        <p>{packageProduct.flight.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="detail-package-separation">
                    <h2>Hotel</h2>
                </section>
                <section className="section-info">
                    <div className="detail-flight-info">
                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3></h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h4 className="detail-flight-h4">Hotel</h4>
                                    <p className="detail-flight-date">{packageProduct.hotel.name}</p>
                                </div>
                                <div className="detail-flight-reach">
                                    <h4 className="detail-flight-h4">Ubication</h4>
                                    <p className="detail-flight-date">{packageProduct.hotel.spot}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-title">
                            <h3>service information</h3>
                        </div>

                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>Service quality: {Array.from({ length: packageProduct.hotel.service }).map((_, index) => (
                                    <i key={index} className="fa-solid fa-star"></i>
                                ))}</h3>

                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <div >
                                    </div>
                                    <div className="detail-flight-description">
                                        <h5>Description</h5>
                                        <p>{packageProduct.hotel.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
              
                    
                   
          

                {userLogged.id == packageProduct.package.user_id ?  <section className="detail-flight-button-section">
                <button onClick={toEditPackage} className="detail-flight-button btn-df-edit">Update</button>
                    <button onClick={deleteButton} className="detail-flight-button btn-df-delete">Delete</button>
                </section> : <section className="detail-flight-button-section">
                <div className="detail-flight-button-buy">
                        <p>Price: ${packageProduct.package.price}</p>
                        <button className="detail-flight-button btn-df-buy">Buy</button>
                    </div>
                </section>}
                <DeleteProduct product={'package'} id={id} trigger={buttonPopup} setTrigger={setButtonPopup}></DeleteProduct>
            </main>

        </div>
    : <h1>Loading...</h1>)
}

export default PackageDetail