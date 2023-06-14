import React, { useEffect, useState, useRef } from 'react'
import './packageDetail.css'
import { useParams } from 'react-router-dom'
import Slider from '../../slider/slider'



function PackageDetail() {
    const { id } = useParams()
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
                console.log(parsedPackageData); //********************************************
                console.log(imagesToPush);
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])


    return (
        <div className="App-packageDetail">
            <main className="main-detail-flight">
                <section className="section-info">

                    <div ref={refSliderDiv} className="carousel_detail-flight">
                    {packageImgsF.length == 0 || packageImgsH.length == 0 ? <h3>Loading...</h3> : <Slider type={'package'} imgs={[[...packageImgsF], [...packageImgsH]]} id={packageProduct.package.user_id}></Slider>}
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>Departure ---- Reach</h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h4 className="detail-flight-h4">Salida:</h4>
                                    <p className="detail-flight-date">Date</p>
                                    <p className="detail-flight-hour">Hour</p>
                                </div>
                                <div className="detail-flight-reach">
                                    <h4 className="detail-flight-h4">Llegada:</h4>
                                    <p className="detail-flight-date">Date</p>
                                    <p className="detail-flight-hour">Hour</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-title">
                            <h3>Informacion de la aerolinea</h3>
                        </div>

                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3>Airline: "Airline"</h3>
                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <h5>Cabina: "Tal Cabina"</h5>
                                    <div className="detail-flight-description">
                                        <h5>Descripcion</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Officiis minima maxime voluptatibus, magni delectus culpa, assumenda eum m
                                            inus deserunt enim nulla, quam debitis modi et perspiciatis sint consequatur
                                            sapiente praesentium.</p>
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
                                    <p className="detail-flight-date">Nombre del hotel</p>
                                </div>
                                <div className="detail-flight-reach">
                                    <h4 className="detail-flight-h4">Ubicacion</h4>
                                    <p className="detail-flight-date">Ubicacion del Hotel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-flight-info">
                        <div className="detail-flight-info-title">
                            <h3>Informacion del servicio</h3>
                        </div>

                        <div className="detail-flight-info-maininfo">
                            <div className="detail-flight-info-header">
                                <h3> Estrellas</h3>

                            </div>
                            <div className="detail-flight-info-data">
                                <div className="detail-flight-departure">
                                    <div >
                                    </div>
                                    <div className="detail-flight-description">
                                        <h5>Descripcion</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Officiis minima maxime voluptatibus, magni delectus culpa, assumenda eum m
                                            inus deserunt enim nulla, quam debitis modi et perspiciatis sint consequatur
                                            sapiente praesentium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="detail-flight-button-section">
                    <button className="detail-flight-button btn-df-edit">Editar</button>
                    <button className="detail-flight-button btn-df-delete">Eliminar</button>
                    <div className="detail-flight-button-buy">
                        <p>Price: $999999</p>
                        <button className="detail-flight-button btn-df-buy">Comprar</button>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default PackageDetail