import React, { useState, useRef } from 'react'
import './packageCreate.css'

function PackageCreate() {
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
    // USE STATES
    const [discount, setDiscount] = useState('')
    // fight
    const [selectedImagesFlight, setSelectedImagesFlight] = useState([])
    const [airline, setAirline] = useState('')
    const [descriptionFlight, setDescriptionFlight] = useState('')
    const [departure, setDeparture] = useState('')
    const [reach, setReach] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [reachDate, setReachDate] = useState('')
    const [departureHour, setDepartureHour] = useState('')
    const [reachHour, setReachHour] = useState('')
    const [cabin, setCabin] = useState('')
    const [priceFlight, setPriceFlight] = useState(0)
    //hotels
    const [selectedImagesHotel, setSelectedImagesHotel] = useState([])
    const [name, setName] = useState('')
    const [spot, setSpot] = useState('')
    const [descriptionHotel, setDescriptionHotel] = useState('')
    const [service, setService] = useState('')
    const [priceHotel, setPriceHotel] = useState('')

    // Use ref
    const refDiscount = useRef()
    //flight
    const refFlightImgsInput = useRef()
    const refFlightImgsIcon = useRef()
    const refFlightErrorImgs = useRef()
    const refFlightAirlineInput = useRef()
    const refFlightDescriptionInput = useRef()
    const refFlightDepartureInput = useRef()
    const refFlightReachInput = useRef()
    const refFlightDepartureDateInput = useRef()
    const refFlightReachDateInput = useRef()
    const refFlightDepartureHourInput = useRef()
    const refFlightReachHourInput = useRef()
    const refFlightCabinInput = useRef()
    const refFlightPriceInput = useRef()
    //hotel
    const refHotelErrorImgs = useRef()
    const refHotelImgsInput = useRef()
    const refHotelImgsIcon = useRef()
    const refHotelNameInput = useRef()
    const refHotelUbiInput = useRef()
    const refHotelDescriptionInput = useRef()
    const refHotelServiceInput = useRef()
    const refHotelPriceInput = useRef()

    const allowedCountries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
        "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
        "Fiji", "Finland", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
        "Haiti", "Honduras", "Hungary",
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
        "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
        "Oman",
        "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar",
        "Romania", "Russia", "Rwanda",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
        "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
        "Yemen",
        "Zambia", "Zimbabwe"]

    // Validation functions
    const isValidAirline = (value) => /^[a-zA-Z\s]{5,}$/.test(value)
    const isValidDescription = (value) => value.length >= 15
    const isValidPlace = (value) => {
        if (allowedCountries.includes(value)) return true
        if (!allowedCountries.includes(value)) return false
    }
    const isValidDate = (value) => {
        const selectedDate = new Date(value)
        const today = new Date()

        return selectedDate >= today
    }
    const isValidPrice = (value) => !isNaN(value)
    const isValidName = (value) => /^[a-zA-Z\s]{3,}$/.test(value)

    //  Change handler
    const handleDiscount = (e) => {
        const discount = parseInt(e.target.value);

        if (!isNaN(discount) && discount >= 1 && discount <= 100) {
            setDiscount(discount);
            refDiscount.current.className = 'cp-create-package-discount-input';
        } else {
            setDiscount(discount);
            refDiscount.current.className = 'cp-error-input-discount';
        }
    };

    // flight
    const flightHandleImageChange = (e) => {
        const files = Array.from(e.target.files)

        const allowedExtensions = /\.(jpg|jpeg|png|gif)$/i
        const validatedImages = []

        files.forEach((file) => {
            if (allowedExtensions.test(file.name)) {
                validatedImages.push(file)
            } else {
                refFlightErrorImgs.current.className = 'cp-error-shown'
                setTimeout(() => {
                    refFlightErrorImgs.current.className = 'cp-error-hidden'
                }, 2000)
            }
        })
        refFlightImgsInput.current.className = 'cp-img-section'
        refFlightImgsIcon.current.className = 'cp-add-img-icon fa-solid fa-circle-plus'
        setSelectedImagesFlight([...selectedImagesFlight, ...validatedImages])
    }
    const flightAirlineChangeHandler = (e) => {
        const airline = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setAirline(airline)
        if (!isValidAirline(airline)) {
            refFlightAirlineInput.current.className = 'cp-error-input'
        } else {
            refFlightAirlineInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightDescriptionChangeHandler = (e) => {
        const description = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDescriptionFlight(description)
        if (!isValidDescription(description)) {
            refFlightDescriptionInput.current.className = 'cp-error-input'
        } else {
            refFlightDescriptionInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightDepartureChangeHandler = (e) => {
        const departure = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDeparture(departure)
        if (!isValidPlace(departure)) {
            refFlightDepartureInput.current.className = 'cp-error-input'
        } else {
            refFlightDepartureInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightReachChangeHandler = (e) => {
        const reach = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setReach(reach)
        if (!isValidPlace(reach)) {
            refFlightReachInput.current.className = 'cp-error-input'
        } else {
            refFlightReachInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightDepartureDateChangeHandler = (e) => {
        const departureDate = e.target.value
        setDepartureDate(departureDate)
        if (!isValidDate(departureDate)) {
            refFlightDepartureDateInput.current.className = 'cp-error-input'
        } else {
            refFlightDepartureDateInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightReachDateChangeHandler = (e) => {
        const reachDate = e.target.value
        setReachDate(reachDate)
        if (!isValidDate(reachDate)) {
            refFlightReachDateInput.current.className = 'cp-error-input'
        } else {
            refFlightReachDateInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightDepartureHourChangeHandler = (e) => {
        const departureHour = e.target.value
        setDepartureHour(departureHour)
        if (!departureHour) {
            refFlightDepartureHourInput.current.className = 'cp-error-input'
        } else {
            refFlightDepartureHourInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightReachHourChangeHandler = (e) => {
        const reachHour = e.target.value
        setReachHour(reachHour)
        if (!reachHour) {
            refFlightReachHourInput.current.className = 'cp-error-input'
        } else {
            refFlightReachHourInput.current.className = 'cp-form-pack-flight-input'
        }
    }
    const flightCabinChangeHandler = (e) => {
        setCabin(e.target.value)
        if (e.target.value == 'none') {
            refFlightCabinInput.current.className = 'cp-error-input-select'
        } else {
            refFlightCabinInput.current.className = 'cp-form-pack-flight-select'
        }
    }
    const flightPriceChangeHandler = (e) => {
        const price = e.target.value
        setPriceFlight(price)
        if (!isValidPrice(price)) {
            refFlightPriceInput.current.className = 'cp-error-input'
        } else {
            refFlightPriceInput.current.className = 'cp-form-pack-flight-input'
        }
    }

    // Hotel
    const hotelHandleImageChange = (e) => {
        const files = Array.from(e.target.files)

        const allowedExtensions = /\.(jpg|jpeg|png|gif)$/i
        const validatedImages = []

        files.forEach((file) => {
            if (allowedExtensions.test(file.name)) {
                validatedImages.push(file)
            } else {
                refHotelErrorImgs.current.className = 'cp-error-shown'
                setTimeout(() => {
                    refHotelErrorImgs.current.className = 'cp-error-hidden'
                }, 2000)
            }
        })
        refHotelImgsInput.current.className = 'cp-img-section'
        refHotelImgsIcon.current.className = 'cp-add-img-icon fa-solid fa-circle-plus'
        setSelectedImagesHotel([...selectedImagesHotel, ...validatedImages])
    }
    const hotelHandleNameChange = (e) => {
        const hotelName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setName(hotelName)
        if (!isValidName(hotelName)) {
            refHotelNameInput.current.className = 'cp-error-input'
        } else {
            refHotelNameInput.current.className = 'cp-pack-hotel-input'
        }
    }
    const hotelHandleSpotChange = (e) => {
        const hotelSpot = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setSpot(hotelSpot)
        if (!isValidPlace(hotelSpot)) {
            refHotelUbiInput.current.className = 'cp-error-input'
        } else {
            refHotelUbiInput.current.className = 'cp-pack-hotel-input'
        }
    }
    const hotelHandleDescriptionChange = (e) => {
        const hotelDescription = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDescriptionHotel(hotelDescription)
        if (!isValidDescription(hotelDescription)) {
            refHotelDescriptionInput.current.className = 'cp-error-input'
        } else {
            refHotelDescriptionInput.current.className = 'cp-pack-hotel-input'
        }
    }
    const hotelHandleServiceChange = (e) => {
        const service = e.target.value
        setService(service)
    }
    const hotelHandlePriceChange = (e) => {
        const hotelPrice = e.target.value
        setPriceHotel(hotelPrice)
        if (!isValidPrice(hotelPrice)) {
            refHotelPriceInput.current.className = 'cp-error-input'
        } else {
            refHotelPriceInput.current.className = 'cp-pack-hotel-input'
        }
    }

    // images remove
    const removeImgFlight = (index, e) => {
        e.preventDefault()
        const updatedImages = [...selectedImagesFlight]
        updatedImages.splice(index, 1)
        setSelectedImagesFlight(updatedImages)
    }

    const removeImgHotel = (index, e) => {
        e.preventDefault()
        const updatedImages = [...selectedImagesHotel]
        updatedImages.splice(index, 1)
        setSelectedImagesHotel(updatedImages)
    }

    // HANDLE SUBMIT
    const handlePackageSubmit = (e) => {
        e.preventDefault()
        const newDataFlight = new FormData()
        const newDataHotel = new FormData()
        const errorsFlight = []
        const errorsHotel = []

        if (!isNaN(discount) && discount >= 1 && discount <= 100) {
            refDiscount.current.className = 'cp-create-package-discount-input';
        } else {
            errorsHotel.push('discount')
            errorsFlight.push('discount')            
            refDiscount.current.className = 'cp-error-input-discount';
        }

        // Validations FLIGHT
        if (selectedImagesFlight.length === 0) {
            errorsFlight.push('images')
            refFlightImgsInput.current.className = 'cp-img-section-error'
            refFlightImgsIcon.current.className = 'cp-add-img-icon-error fa-solid fa-circle-plus'
        } else {
            selectedImagesFlight.forEach(image => {
                newDataFlight.append("productFile", image)
            })
        }
        if (!isValidAirline(airline)) {
            errorsFlight.push('airline')
            refFlightAirlineInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('airline', airline)
        }
        if (!isValidDescription(descriptionFlight)) {
            errorsFlight.push('description')
            refFlightDescriptionInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('description', descriptionFlight)
        }
        if (!isValidPlace(departure)) {
            errorsFlight.push('departure')
            refFlightDepartureInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('departure', departure)
        }
        if (!isValidPlace(reach)) {
            errorsFlight.push('reach')
            refFlightReachInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('reach', reach)
        }
        if (!isValidDate(departureDate)) {
            errorsFlight.push('departureDate')
            refFlightDepartureDateInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('departureDate', departureDate)
        }
        if (!isValidDate(reachDate)) {
            errorsFlight.push('reachDate')
            refFlightReachDateInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('reachDate', reachDate)
        }
        if (!departureHour) {
            errorsFlight.push('departureHour')
            refFlightDepartureHourInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('departureHour', departureHour)
        }
        if (!reachHour) {
            errorsFlight.push('reachHour')
            refFlightReachHourInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('reachHour', reachHour)
        }
        if (cabin == 'none' || !cabin) {
            errorsFlight.push('cabin')
            refFlightCabinInput.current.className = 'cp-error-input-select'
        } else {
            newDataFlight.append('cabin', cabin)
        }
        if (!isValidPrice(priceFlight) || !priceFlight) {
            errorsFlight.push('price')
            refFlightPriceInput.current.className = 'cp-error-input'
        } else {
            newDataFlight.append('price', priceFlight)
        }

        // Validations  HOTEL
        if (selectedImagesHotel.length === 0) {
            errorsHotel.push('images')
            refHotelImgsInput.current.className = 'cp-img-section-error'
            refHotelImgsIcon.current.className = 'cp-add-img-icon-error fa-solid fa-circle-plus'
        } else {
            selectedImagesHotel.forEach(image => {
                newDataHotel.append("productFile", image)
            })
        }
        if (!isValidName(name)) {
            errorsHotel.push('name')
            refHotelNameInput.current.className = 'cp-error-input'
        } else {
            newDataHotel.append('name', name)
        }
        if (!isValidDescription(descriptionHotel)) {
            errorsHotel.push('description')
            refHotelDescriptionInput.current.className = 'cp-error-input'
        } else {
            newDataHotel.append('description', descriptionHotel)
        }
        if (!isValidPlace(spot)) {
            errorsHotel.push('spot')
            refHotelUbiInput.current.className = 'cp-error-input'
        } else {
            newDataHotel.append('spot', spot)
        }
        if (service == 'none' || !service) {
            errorsHotel.push('service')
            refHotelServiceInput.current.className = 'cp-error-input-select'
        } else {
            newDataHotel.append('service', service)
        }
        if (!isValidPrice(priceHotel) || !priceHotel) {
            errorsHotel.push('price')
            refHotelPriceInput.current.className = 'cp-error-input'
        } else {
            newDataHotel.append('price', priceHotel)
        }

        if (errorsFlight.length === 0 && errorsHotel.length === 0) {
            const headers = {}
            const permanentToken = localStorage.getItem('token')
            const token = sessionStorage.getItem('token')
            if (token) headers.authorization = token
            if (permanentToken) headers.authorization = permanentToken
            async function fetchSend(flightData, hotelData) {
                const flightUpload = await fetchApi(`http://localhost:3001/api/products/create/flight`, {
                    method: 'POST',
                    headers,
                    body: flightData,
                });
                const hotelUpload = await fetchApi(`http://localhost:3001/api/products/create/hotel`, {
                    method: 'POST',
                    headers,
                    body: hotelData,
                })
                const dataFlightId = flightUpload.data.id
                const dataFlightPrice = flightUpload.data.price
                const dataDepartureDate = flightUpload.data.departure_date
                const dataReachDate = flightUpload.data.reach_date
                const dataHotelPrice = hotelUpload.data.price
                const dataHotelId = hotelUpload.data.id
                const newPackageData = new FormData()
                newPackageData.append('flight_id', dataFlightId)
                newPackageData.append('priceF', dataFlightPrice)
                newPackageData.append('departureDate', dataDepartureDate)
                newPackageData.append('reachDate', dataReachDate)
                newPackageData.append('discount', discount)
                newPackageData.append('hotel_id', dataHotelId)
                newPackageData.append('priceH', dataHotelPrice)
                const packageUpload = await fetchApi(`http://localhost:3001/api/products/create/package `, {
                    method: 'POST',
                    headers,
                    body: newPackageData,
                })
                
                if (packageUpload.info.status == 200) window.location.href = '/packages'
                if(packageUpload.info.status != 200) console.log(packageUpload);
            }

            fetchSend(newDataFlight, newDataHotel)
        } else {
            console.log('Validation flights errors:', errorsFlight)
            console.log('Validation hotels errors:', errorsHotel)
        }
    }

    const handleFileIconClickFlight = () => {
        const fileInput = document.getElementById('input-flight-create');
        fileInput.click();
    };

    const handleFileIconClickHotel = () => {
        const fileInput = document.getElementById('input-hotel-create');
        fileInput.click();
    };

    return (
        <div className="App-packageCreate">
            <form onSubmit={handlePackageSubmit} className="cp-crate-package">

                <div className="cp-create-package-discount">
                    <label htmlFor="discount">Discount (%):</label>
                    <input ref={refDiscount} onChange={handleDiscount} value={discount} className='cp-create-package-discount-input' type="number" name="discount" id="discount"></input>
                </div>
                <div className="cp-create-package-main-div">
                    <section>
                        <h2>Flight</h2>
                        <div className="cp-create-package-flight">

                            <div className="cp-form-pack-flight-top-1">
                                <input onChange={flightHandleImageChange} multiple type="file" id="input-flight-create" name="productFile" ></input>
                                <label className="cp-add-img-label-pack-flight" htmlFor="input-flight-create">Images of the flight:</label>
                                <h5 ref={refFlightErrorImgs} className='cp-error-hidden'>File extension not allowed</h5>
                                <div ref={refFlightImgsInput} className="cp-img-section">
                                    {selectedImagesFlight.map((image, index) => (
                                        <div key={index} className="cp-preview-image">
                                            <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                            <a onClick={(e) => removeImgFlight(index, e)}><i className="fa-solid fa-xmark"></i></a>
                                        </div>
                                    ))}
                                    <i ref={refFlightImgsIcon} onClick={handleFileIconClickFlight} className="cp-add-img-icon fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                            <div className="cp-form-pack-flight-top-2">

                                <div className="cp-form-pack-flight-top-2-div">
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="airline">Airline:</label>
                                        <input ref={refFlightAirlineInput} onChange={flightAirlineChangeHandler} value={airline} className="cp-form-pack-flight-input" type="text" id="airline" name="airline" ></input>
                                    </div>
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="descriptionF">Description:</label>
                                        <input ref={refFlightDescriptionInput} onChange={flightDescriptionChangeHandler} value={descriptionFlight} className="cp-form-pack-flight-input" type="text" id="descriptionF" name="descriptionF" ></input>
                                    </div>
                                </div>

                                <div className="cp-form-pack-flight-top-2-div">
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="departure">Departure:</label>
                                        <input ref={refFlightDepartureInput} onChange={flightDepartureChangeHandler} value={departure} className="cp-form-pack-flight-input" type="text" id="departure" name="departure" ></input>
                                    </div>
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="reach">Reach:</label>
                                        <input ref={refFlightReachInput} onChange={flightReachChangeHandler} value={reach} className="cp-form-pack-flight-input" type="text" id="reach" name="reach" ></input>
                                    </div>
                                </div>

                                <div className="cp-form-pack-flight-top-2-div">
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="departureDate">Departure Date:</label>
                                        <input ref={refFlightDepartureDateInput} onChange={flightDepartureDateChangeHandler} value={departureDate} className="cp-form-pack-flight-input" type="date" id="departureDate" name="departureDate"></input>
                                    </div>
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="reachDate">Return Date:</label>
                                        <input ref={refFlightReachDateInput} onChange={flightReachDateChangeHandler} value={reachDate} className="cp-form-pack-flight-input" type="date" id="reachDate" name="reachDate"></input>
                                    </div>
                                </div>

                                <div className="cp-form-pack-flight-top-2-div">

                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="departureHour">Departure Hour:</label>
                                        <input ref={refFlightDepartureHourInput} onChange={flightDepartureHourChangeHandler} value={departureHour} className="cp-form-pack-flight-input" type="time" id="departureHour" name="departureHour"></input>
                                    </div>
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="reachHour">Return Hour:</label>
                                        <input ref={refFlightReachHourInput} onChange={flightReachHourChangeHandler} value={reachHour} className="cp-form-pack-flight-input" type="time" id="reachHour" name="reachHour"></input>
                                    </div>

                                </div>

                                <div className="cp-form-pack-flight-top-2-div">

                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="cabin.">Cabin Type:</label>
                                        <select ref={refFlightCabinInput} onChange={flightCabinChangeHandler} value={cabin} className='cp-form-pack-flight-select' name="cabin" id="cabin">
                                            <option value="">Select one</option>
                                            <option value="Economy">Economy</option>
                                            <option value="Premium">Premium</option>
                                            <option value="Premium VIP">Premium VIP</option>
                                        </select>
                                    </div>
                                    <div className="cp-form-pack-flight-inputDiv">
                                        <label className="cp-form-pack-flight-label" htmlFor="priceF">Price:</label>
                                        <input ref={refFlightPriceInput} onChange={flightPriceChangeHandler} value={priceFlight} className="cp-form-pack-flight-input" type="number" id="priceF" name="priceF"></input>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="cp-section-pack-2">
                        <h2>Hotel</h2>
                        <div className="cp-create-package-hotel">
                            <div className="cp-form-pack-flight-top-1">
                                <input onChange={hotelHandleImageChange} multiple type="file" id="input-hotel-create" name="productFile" ></input>
                                <label className="cp-add-img-label-pack-flight" htmlFor="input-flight-create">Images of the hotel:</label>
                                <h5 ref={refHotelErrorImgs} className='cp-error-hidden'>File extension not allowed</h5>
                                <div ref={refHotelImgsInput} className="cp-img-section">
                                    {selectedImagesHotel.map((image, index) => (
                                        <div key={index} className="cp-preview-image">
                                            <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                            <a onClick={(e) => removeImgHotel(index, e)}><i className="fa-solid fa-xmark"></i></a>
                                        </div>
                                    ))}
                                    <i ref={refHotelImgsIcon} onClick={handleFileIconClickHotel} className="cp-add-img-icon fa-solid fa-circle-plus"></i>
                                </div>
                            </div>

                            <div className="cp-pack-hotel-top-2">

                                <section className="cp-pack-hotel-name-spot">
                                    <div className="cp-pack-hotel-inputDiv">
                                        <label className="cp-pack-hotel-label" htmlFor="name">Name:</label>
                                        <input ref={refHotelNameInput} onChange={hotelHandleNameChange} value={name} className="cp-pack-hotel-input" type="text" id="name" name="name"></input>
                                    </div>
                                    <div className="cp-pack-hotel-inputDiv">
                                        <label className="cp-pack-hotel-label" htmlFor="spot">Location:</label>
                                        <input ref={refHotelUbiInput} onChange={hotelHandleSpotChange} value={spot} className="cp-pack-hotel-input" type="text" id="spot" name="spot"></input>
                                    </div>
                                </section>

                                <section className="cp-pack-hotel-description">
                                    <div className="cp-pack-hotel-inputDiv">
                                        <label className="cp-pack-hotel-label" htmlFor="descriptionH">Description:</label>
                                        <input ref={refHotelDescriptionInput} onChange={hotelHandleDescriptionChange} value={descriptionHotel} className="cp-pack-hotel-input" type="textarea" name="descriptionH" id="descriptionH"></input>
                                    </div>
                                </section>

                                <section className="cp-pack-hotel-service ">
                                    <div className="cp-pack-hotel-inputDiv">
                                        <label className="cp-pack-hotel-label" htmlFor="service">Service:</label>
                                        <select ref={refHotelServiceInput} onChange={hotelHandleServiceChange} value={service} className='cp-form-pack-flight-select' name="service" id="service">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div className="cp-pack-hotel-inputDiv">
                                        <label className="cp-pack-hotel-label" htmlFor="priceH">Price By Night:</label>
                                        <input ref={refHotelPriceInput} onChange={hotelHandlePriceChange} value={priceHotel} className="cp-pack-hotel-input" type="number" name="priceH" id="priceH"></input>
                                    </div>
                                </section>


                            </div>
                        </div>
                    </section>
                </div>

                <div className="cp-pack-hotel-button">
                    <button type="submit">Create</button>
                </div>

            </form>
        </div>
    )
}

export default PackageCreate