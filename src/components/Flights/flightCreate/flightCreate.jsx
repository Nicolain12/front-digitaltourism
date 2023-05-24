import React, { useState, useRef } from 'react';
import './flightCreate.css';

function FlightCreate() {
    const [selectedImages, setSelectedImages] = useState([]);
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

    // Validation functions
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
                refImagenError.current.className = 'cf-error-shown'
                setTimeout(() => {
                    refImagenError.current.className = 'cf-error-hidden'
                }, 2000);
            }
        });

        setSelectedImages([...selectedImages, ...validatedImages]);
    };
    const airlineChangeHandler = (e) => {
        const airline = e.target.value
        setAirline(airline)
        if (!isValidAirline(airline)) {
            refAirlineInput.current.className = 'cf-error-input'
        } else {
            refAirlineInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const descriptionChangeHandler = (e) => {
        const description = e.target.value
        setDescription(description)
        if (!isValidDescription(description)) {
            refDescriptionInput.current.className = 'cf-error-input'
        } else {
            refDescriptionInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const departureChangeHandler = (e) => {
        const departure = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setDeparture(departure)
        if (!isValidPlace(departure)) {
            refDepartureInput.current.className = 'cf-error-input'
        } else {
            refDepartureInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const reachChangeHandler = (e) => {
        const reach = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setReach(reach)
        if (!isValidPlace(reach)) {
            refReachInput.current.className = 'cf-error-input'
        } else {
            refReachInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const departureDateChangeHandler = (e) => {
        const departureDate = e.target.value
        setDepartureDate(departureDate)
        if (!isValidDate(departureDate)) {
            refDepartureDateInput.current.className = 'cf-error-input'
        } else {
            refDepartureDateInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const reachDateChangeHandler = (e) => {
        const reachDate = e.target.value
        setReachDate(reachDate)
        if (!isValidDate(reachDate)) {
            refReachDateInput.current.className = 'cf-error-input'
        } else {
            refReachDateInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const departureHourChangeHandler = (e) => {
        const departureHour = e.target.value
        setDepartureHour(departureHour)
        if (!departureHour) {
            refDepartureHourInput.current.className = 'cf-error-input'
        } else {
            refDepartureHourInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const reachHourChangeHandler = (e) => {
        const reachHour = e.target.value
        setReachHour(reachHour)
        if (!reachHour) {
            refReachHourInput.current.className = 'cf-error-input'
        } else {
            refReachHourInput.current.className = 'cf-form-createFlight-input'
        }
    }
    const cabinChangeHandler = (e) => {
        setCabin(e.target.value)
    }
    const priceChangeHandler = (e) => {
        const price = e.target.value
        setPrice(price)
        if (!isValidPrice(price)) {
            refPriceInput.current.className = 'cf-error-input'
        } else {
            refPriceInput.current.className = 'cf-form-createFlight-input'
        }
    }



    const removeImage = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        const newFlightData = {
            selectedImages,
            airline,
            description,
            departure,
            reach,
            departureDate,
            reachDate,
            departureHour,
            reachHour,
            cabin,
            price,
        };
        const errors = [];








        // Perform validations
        if (selectedImages.length === 0) {
            errors.push('images');
            refImagesInput.current.style.borderColor = 'red'
            refImageIcon.current.style.color = 'red'
        }
        if (!isValidAirline(airline)) {
            errors.push('airline');
            refAirlineInput.current.className = 'cf-error-input'
        }
        if (!isValidDescription(description)) {
            errors.push('description');
            refDescriptionInput.current.className = 'cf-error-input'
        }
        if (!isValidPlace(departure)) {
            errors.push('departure');
            refDepartureInput.current.className = 'cf-error-input'
        }
        if (!isValidPlace(reach)) {
            errors.push('reach');
            refReachInput.current.className = 'cf-error-input'
        }
        if (!isValidDate(departureDate)) {
            errors.push('departureDate');
            refDepartureDateInput.current.className = 'cf-error-input'
        }
        if (!isValidDate(reachDate)) {
            errors.push('reachDate');
            refReachDateInput.current.className = 'cf-error-input'
        }
        if (!departureHour) {
            errors.push('departureHour');
            refDepartureHourInput.current.className = 'cf-error-input'
        }
        if (!reachHour) {
            errors.push('reachHour');
            refReachHourInput.current.className = 'cf-error-input'
        }
        if (!isValidPrice(price) || !price) {
            errors.push('price');
            refPriceInput.current.className = 'cf-error-input'
        }

        if (errors.length === 0) {
            console.log(newFlightData);
        } else {
            console.log('Validation errors:', errors);
            console.log('Data of error:', newFlightData);
        }
    };



    return (
        <div className="App-flightCreate">
            <main>
                <form onSubmit={submitFormHandler} className="cf-crate-flight">

                    <div className="cf-form-createFlight-top">

                        <div className="cf-form-createFlight-top-1">
                            <input type="file" id="input-flight-create" name="productFile" multiple onChange={handleImageChange}></input>
                            <label className="cf-add-img-label-flight" >Select the images of the flight:</label>
                            <h5 ref={refImagenError} className='cf-error-hidden'>File extension not alloed</h5>
                            <div ref={refImagesInput} className="cf-img-section">
                                {selectedImages.map((image, index) => (
                                    <div key={index} className="cf-preview-image">
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                        <button onClick={() => removeImage(index)}><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                ))}
                                <label htmlFor="input-flight-create"><i ref={refImageIcon} className="cf-add-img-icon fa-solid fa-circle-plus"></i></label>
                            </div>

                        </div>

                        <div className="cf-form-createFlight-top-2">

                            <div className="cf-form-createFlight-top-2-div">
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="airline">Airline:</label>
                                    <input className="cf-form-createFlight-input" type="text" id="airline" ref={refAirlineInput} onChange={airlineChangeHandler} name="airline" ></input>

                                </div>
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="description">Description:</label>
                                    <input className="cf-form-createFlight-input" type="text" id="description" ref={refDescriptionInput} onChange={descriptionChangeHandler} name="description"></input>

                                </div>
                            </div>

                            <div className="cf-form-createFlight-top-2-div">
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="departure"><i className="fa-solid fa-plane-dexparture"></i></label>
                                    <input className="cf-form-createFlight-input" type="text" id="departure" ref={refDepartureInput} onChange={departureChangeHandler} name="departure" placeholder="Departure"></input>
                                </div>
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="reach"><i className="fa-solid fa-location-dot"></i></label>
                                    <input className="cf-form-createFlight-input" type="text" id="reach" ref={refReachInput} onChange={reachChangeHandler} name="reach" placeholder="Reach"></input>

                                </div>
                            </div>

                            <div className="cf-form-createFlight-top-2-div">
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="departureDate">Departure date</label>
                                    <input className="cf-form-createFlight-input" type="date" id="departureDate" ref={refDepartureDateInput} onChange={departureDateChangeHandler} name="departureDate"></input>
                                </div>
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="reachDate">Return date</label>
                                    <input className="cf-form-createFlight-input" type="date" id="reachDate" ref={refReachDateInput} onChange={reachDateChangeHandler} name="reachDate"></input>
                                </div>
                            </div>

                            <div className="cf-form-createFlight-top-2-div">

                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="departureHour">Departure hour</label>
                                    <input className="cf-form-createFlight-input" type="time" id="departureHour" ref={refDepartureHourInput} onChange={departureHourChangeHandler} name="departureHour"></input>
                                </div>
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="reachHour">Return hour</label>
                                    <input className="cf-form-createFlight-input" type="time" id="reachHour" ref={refReachHourInput} onChange={reachHourChangeHandler} name="reachHour"></input>
                                </div>

                            </div>

                            <div className="cf-form-createFlight-top-2-div">

                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="cabin.">Cabin type:</label>
                                    <select name="cabin" id="cabin" ref={refCabinInput} onChange={cabinChangeHandler}>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                                <div className="cf-form-createFlight-inputDiv">
                                    <label className="cf-form-createFlight-label" htmlFor="price">Price:</label>
                                    <input className="cf-form-createFlight-input" type="number" id="price" ref={refPriceInput} onChange={priceChangeHandler} name="price"></input>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="cf-form-createFlight-bottom">
                        <button className="cf-mary" type="submit">Crear</button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default FlightCreate;