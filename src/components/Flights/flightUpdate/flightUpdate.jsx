import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './flightUpdate.css';

function FlightCreate() {
    const { id } = useParams();
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

    //states
    const [userId, setUserId] = useState('');
    const [oldImages, setOldImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [removeImages, setRemoveImages] = useState([]);
    const [airline, setAirline] = useState('');
    const [description, setDescription] = useState('');
    const [departure, setDeparture] = useState('');
    const [reach, setReach] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [reachDate, setReachDate] = useState('');
    const [departureHour, setDepartureHour] = useState('');
    const [reachHour, setReachHour] = useState('');
    const [cabin, setCabin] = useState('');
    const [price, setPrice] = useState(0);

    // Validation functions
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
        "Zambia", "Zimbabwe"];

    const isValidAirline = (value) => /^[a-zA-Z\s]{5,}$/.test(value);
    const isValidDescription = (value) => value.length >= 15;
    const isValidPlace = (value) => {
        if (allowedCountries.includes(value)) return true
        if (!allowedCountries.includes(value)) return false
    };
    const isValidDate = (value) => {
        const selectedDate = new Date(value);
        const today = new Date();

        return selectedDate >= today;
    };
    const isValidPrice = (value) => !isNaN(value);


    //use efect
    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const flightData = await fetchApi(`http://localhost:3001/api/products/flight/${id}`, {
                    method: 'GET',
                    headers,
                });
                const parsedFlightData = {
                    ...flightData.data,
                };
                parsedFlightData.image = JSON.parse(flightData.data.image)
                const imagesToPush = []
                if (typeof parsedFlightData.image == 'object'); {
                    for (let key in parsedFlightData.image) {
                        if (parsedFlightData.image.hasOwnProperty(key)) {
                            imagesToPush.push(parsedFlightData.image[key])
                        }
                    }
                }
                setOldImages(imagesToPush)
                setUserId(parsedFlightData.user_id)
                setAirline(parsedFlightData.airline)
                setDescription(parsedFlightData.description)
                setDeparture(parsedFlightData.departure)
                setReach(parsedFlightData.reach)
                setDepartureDate(parsedFlightData.departure_date)
                setReachDate(parsedFlightData.reach_date)
                setDepartureHour(parsedFlightData.departure_hour)
                setReachHour(parsedFlightData.reach_hour)
                setCabin(parsedFlightData.cabin)
                setPrice(parsedFlightData.price)

            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [])

    //Use ref
    const refImagesInput = useRef()
    const refImageIcon = useRef()
    const refImagenError = useRef()
    const refAirlineInput = useRef()
    const refDescriptionInput = useRef()
    const refDepartureInput = useRef()
    const refReachInput = useRef()
    const refDepartureDateInput = useRef()
    const refReachDateInput = useRef()
    const refDepartureHourInput = useRef()
    const refReachHourInput = useRef()
    const refCabinInput = useRef()
    const refPriceInput = useRef()

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);

        const allowedExtensions = /\.(jpg|jpeg|png|gif)$/i;
        const validatedImages = [];
        files.forEach((file) => {
            if (allowedExtensions.test(file.name)) {
                validatedImages.push(file);
            } else {
                refImagenError.current.className = 'uf-error-shown'
                setTimeout(() => {
                    refImagenError.current.className = 'uf-error-hidden'
                }, 2000);
            }
        });
        refImagesInput.current.className = 'uf-img-section'
        refImageIcon.current.className = 'uf-add-img-icon fa-solid fa-circle-plus'
        setNewImages([ ...newImages, ...validatedImages]);
    };
    const airlineChangeHandler = (e) => {
        const airline = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setAirline(airline)
        if (!isValidAirline(airline)) {
            refAirlineInput.current.className = 'uf-error-input'
        } else {
            refAirlineInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const descriptionChangeHandler = (e) => {
        const description = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDescription(description)
        if (!isValidDescription(description)) {
            refDescriptionInput.current.className = 'uf-error-input'
        } else {
            refDescriptionInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const departureChangeHandler = (e) => {
        const departure = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDeparture(departure)
        if (!isValidPlace(departure)) {
            refDepartureInput.current.className = 'uf-error-input'
        } else {
            refDepartureInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const reachChangeHandler = (e) => {
        const reach = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setReach(reach)
        if (!isValidPlace(reach)) {
            refReachInput.current.className = 'uf-error-input'
        } else {
            refReachInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const departureDateChangeHandler = (e) => {
        const departureDate = e.target.value
        setDepartureDate(departureDate)
        if (!isValidDate(departureDate)) {
            refDepartureDateInput.current.className = 'uf-error-input'
        } else {
            refDepartureDateInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const reachDateChangeHandler = (e) => {
        const reachDate = e.target.value
        setReachDate(reachDate)
        if (!isValidDate(reachDate)) {
            refReachDateInput.current.className = 'uf-error-input'
        } else {
            refReachDateInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const departureHourChangeHandler = (e) => {
        const departureHour = e.target.value
        setDepartureHour(departureHour)
        if (!departureHour) {
            refDepartureHourInput.current.className = 'uf-error-input'
        } else {
            refDepartureHourInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const reachHourChangeHandler = (e) => {
        const reachHour = e.target.value
        setReachHour(reachHour)
        if (!reachHour) {
            refReachHourInput.current.className = 'uf-error-input'
        } else {
            refReachHourInput.current.className = 'uf-form-createFlight-input'
        }
    }
    const cabinChangeHandler = (e) => {
        setCabin(e.target.value)
        if (e.target.value == 'none') {
            refCabinInput.current.className = 'uf-error-input-select'
        } else {
            refCabinInput.current.className = 'uf-form-createFlight-select'
        }
    }
    const priceChangeHandler = (e) => {
        const price = e.target.value
        setPrice(price)
        if (!isValidPrice(price)) {
            refPriceInput.current.className = 'uf-error-input'
        } else {
            refPriceInput.current.className = 'uf-form-createFlight-input'
        }
    }

    const removeImage = (index, event) => {
        event.preventDefault();
        const updatedImages = [...oldImages];
        const removedImage = updatedImages.splice(index, 1)[0];
        const updatedRenovedImages = [...removeImages, removedImage]
        setOldImages(updatedImages);
        setRemoveImages(updatedRenovedImages)
    };



    const removeNewImage = (index, event) => {
        event.preventDefault()
        const updatedImages = [...newImages];
        updatedImages.splice(index, 1);
        setNewImages(updatedImages);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        const newData = new FormData();
        const errors = [];

        // Perform validations
        if (oldImages.length === 0 && newImages.length === 0) {
            errors.push('images');
            refImagesInput.current.className = 'cf-img-section-error'
            refImageIcon.current.className = 'cf-add-img-icon-error fa-solid fa-circle-plus'
        } else {
            oldImages.forEach(image => {
                newData.append("oldImages", image);
            })
            newImages.forEach(image => {
                newData.append("productFile", image);
            })
            removeImages.forEach(image => {
                newData.append("removeImages", image);
            })
        }
        if (!isValidAirline(airline)) {
            errors.push('airline');
            refAirlineInput.current.className = 'uf-error-input'
        } else {
            newData.append('airline', airline);
        }
        if (!isValidDescription(description)) {
            errors.push('description');
            refDescriptionInput.current.className = 'uf-error-input'
        } else {
            newData.append('description', description);
        }
        if (!isValidPlace(departure)) {
            errors.push('departure');
            refDepartureInput.current.className = 'uf-error-input'
        } else {
            newData.append('departure', departure);
        }
        if (!isValidPlace(reach)) {
            errors.push('reach');
            refReachInput.current.className = 'uf-error-input'
        } else {
            newData.append('reach', reach);
        }
        if (!isValidDate(departureDate)) {
            errors.push('departureDate');
            refDepartureDateInput.current.className = 'uf-error-input'
        } else {
            newData.append('departureDate', departureDate);
        }
        if (!isValidDate(reachDate)) {
            errors.push('reachDate');
            refReachDateInput.current.className = 'uf-error-input'
        } else {
            newData.append('reachDate', reachDate);
        }
        if (!departureHour) {
            errors.push('departureHour');
            refDepartureHourInput.current.className = 'uf-error-input'
        } else {
            newData.append('departureHour', departureHour);
        }
        if (!reachHour) {
            errors.push('reachHour');
            refReachHourInput.current.className = 'uf-error-input'
        } else {
            newData.append('reachHour', reachHour);
        }
        if (cabin == 'none' || !cabin) {
            errors.push('cabin');
            refCabinInput.current.className = 'uf-error-input-select'
        } else {
            newData.append('cabin', cabin);
        }
        if (!isValidPrice(price) || !price) {
            errors.push('price');
            refPriceInput.current.className = 'uf-error-input'
        } else {
            newData.append('price', price);
        }

        if (errors.length === 0) {
            async function fetchSend(data) {
                const headers = {};
                const permanentToken = localStorage.getItem('token');
                const token = sessionStorage.getItem('token');
                if (token) headers.authorization = token;
                if (permanentToken) headers.authorization = permanentToken;
                const fetchResponse = await fetchApi(`http://localhost:3001/api/products/update/flight/${id}`, {
                    method: 'PUT',
                    headers,
                    body: data,
                });
                if(fetchResponse.info.status === 200) window.location.href = `/flightsDetail/${id}`
                if(fetchResponse.info.status === 400) console.log(fetchResponse);
            }

            fetchSend(newData)
        } else {
            console.log('Validation errors:', errors);
        }
    };



    return (
        <div className="App-flightUpdate">
            <main>
                <form onSubmit={submitFormHandler} className="uf-crate-flight">

                    <div className="uf-form-createFlight-top">

                        <div className="uf-form-createFlight-top-1">
                            <input type="file" id="input-flight-create" name="productFile" multiple onChange={handleImageChange}></input>
                            <label className="uf-add-img-label-flight" >Select the images of the flight:</label>
                            <h5 ref={refImagenError} className='uf-error-hidden'>File extension not allowed</h5>
                            <div ref={refImagesInput} className="uf-img-section">
                                {oldImages.length > 0 ? oldImages.map((image, index) => (
                                    <div key={index} className="uf-preview-image">
                                        <img src={`http://localhost:3001/images/flights/product_${userId}/${image}`} alt={`Image ${index}`} />
                                        <a onClick={(event) => removeImage(index, event)}><i className="fa-solid fa-xmark"></i></a>
                                    </div>
                                )) : null}
                                {newImages.length > 0 ? newImages.map((image, index) => (
                                    <div key={index} className="cf-preview-image">
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                        <a onClick={(event) => removeNewImage(index, event)}><i className="fa-solid fa-xmark"></i></a>
                                    </div>
                                )) : null}
                                <label htmlFor="input-flight-create"><i ref={refImageIcon} className="uf-add-img-icon fa-solid fa-circle-plus"></i></label>
                            </div>
                        </div>

                        <div className="uf-form-createFlight-top-2">

                            <div className="uf-form-createFlight-top-2-div">
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="airline">Airline:</label>
                                    <input className="uf-form-createFlight-input" type="text" id="airline" value={airline} ref={refAirlineInput} onChange={airlineChangeHandler} name="airline" ></input>

                                </div>
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="description">Description:</label>
                                    <input className="uf-form-createFlight-input" type="text" id="description" value={description} ref={refDescriptionInput} onChange={descriptionChangeHandler} name="description"></input>

                                </div>
                            </div>

                            <div className="uf-form-createFlight-top-2-div">
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="departure"><i className="fa-solid fa-plane-dexparture"></i></label>
                                    <input className="uf-form-createFlight-input" type="text" id="departure" value={departure} ref={refDepartureInput} onChange={departureChangeHandler} name="departure" placeholder="Departure"></input>
                                </div>
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="reach"><i className="fa-solid fa-location-dot"></i></label>
                                    <input className="uf-form-createFlight-input" type="text" id="reach" value={reach} ref={refReachInput} onChange={reachChangeHandler} name="reach" placeholder="Reach"></input>

                                </div>
                            </div>

                            <div className="uf-form-createFlight-top-2-div">
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="departureDate">Departure date</label>
                                    <input className="uf-form-createFlight-input" type="date" id="departureDate" value={departureDate} ref={refDepartureDateInput} onChange={departureDateChangeHandler} name="departureDate"></input>
                                </div>
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="reachDate">Return date</label>
                                    <input className="uf-form-createFlight-input" type="date" id="reachDate" value={reachDate} ref={refReachDateInput} onChange={reachDateChangeHandler} name="reachDate"></input>
                                </div>
                            </div>

                            <div className="uf-form-createFlight-top-2-div">

                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="departureHour">Departure hour</label>
                                    <input className="uf-form-createFlight-input" type="time" id="departureHour" value={departureHour} ref={refDepartureHourInput} onChange={departureHourChangeHandler} name="departureHour"></input>
                                </div>
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="reachHour">Return hour</label>
                                    <input className="uf-form-createFlight-input" type="time" id="reachHour" value={reachHour} ref={refReachHourInput} onChange={reachHourChangeHandler} name="reachHour"></input>
                                </div>

                            </div>

                            <div className="uf-form-createFlight-top-2-div">

                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="cabin.">Cabin type:</label>
                                    <select name="cabin" id="cabin" value={cabin} ref={refCabinInput} className='uf-form-createFlight-select' onChange={cabinChangeHandler}>
                                        <option value="none">Select a cabin</option>
                                        <option value="Economy">Economy</option>
                                        <option value="Premium">Premium</option>
                                        <option value="Premium VIP">Premium VIP</option>
                                    </select>
                                </div>
                                <div className="uf-form-createFlight-inputDiv">
                                    <label className="uf-form-createFlight-label" htmlFor="price">Price:</label>
                                    <input className="uf-form-createFlight-input" type="number" id="price" value={price} ref={refPriceInput} onChange={priceChangeHandler} name="price"></input>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="uf-form-createFlight-bottom">
                        <button className="uf-mary" type="submit">Crear</button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default FlightCreate;