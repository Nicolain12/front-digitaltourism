import React, { useState, useRef, useEffect } from 'react'
import './hotelUpdate.css'
import { useParams } from 'react-router-dom';

function HotelUpdate() {
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
    // State variables to store form input values
    const [userId, setUserId] = useState('');
    const [oldImages, setOldImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [removeImages, setRemoveImages] = useState([]);
    const [name, setName] = useState('')
    const [spot, setSpot] = useState('')
    const [description, setDescription] = useState('')
    const [service, setService] = useState('')
    const [price, setPrice] = useState('')

    const refErrorImg = useRef()
    const refInputImg = useRef()
    const refImageIcon = useRef()
    const refNameInput = useRef()
    const refUbiInput = useRef()
    const refDescriptionInput = useRef()
    const refServiceInput = useRef()
    const refPriceInput = useRef()

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

    const isValidName = (value) => /^[a-zA-Z\s]{3,}$/.test(value);
    const isValidDescription = (value) => value.length >= 15;
    const isValidPlace = (value) => {
        if (allowedCountries.includes(value)) return true
        if (!allowedCountries.includes(value)) return false
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
                const hotelData = await fetchApi(`http://localhost:3001/api/products/hotel/${id}`, {
                    method: 'GET',
                    headers,
                });
                const parsedHotelData = {
                    ...hotelData.data,
                };
                parsedHotelData.image = JSON.parse(hotelData.data.image)
                const imagesToPush = []
                if (typeof parsedHotelData.image == 'object'); {
                    for (let key in parsedHotelData.image) {
                        if (parsedHotelData.image.hasOwnProperty(key)) {
                            imagesToPush.push(parsedHotelData.image[key])
                        }
                    }
                }
                setOldImages(imagesToPush)
                setUserId(parsedHotelData.user_id)
                setName(parsedHotelData.name)
                setSpot(parsedHotelData.spot)
                setDescription(parsedHotelData.description)
                setService(parsedHotelData.service)
                setPrice(parsedHotelData.price)



            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [])

    // Handle input changes 
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);

        const allowedExtensions = /\.(jpg|jpeg|png|gif)$/i;
        const validatedImages = [];

        files.forEach((file) => {
            if (allowedExtensions.test(file.name)) {
                validatedImages.push(file);
            } else {
                refErrorImg.current.className = 'uh-error-shown'
                setTimeout(() => {
                    refErrorImg.current.className = 'uh-error-hidden'
                }, 2000);
            }
        });
        refInputImg.current.className = 'uh-img-section'
        refImageIcon.current.className = 'uh-add-img-icon fa-solid fa-circle-plus'
        setNewImages([ ...newImages, ...validatedImages]);
    };
    const handleNameChange = (event) => {
        const hotelName = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
        setName(hotelName)
        if (!isValidName(hotelName)) {
            refNameInput.current.className = 'uh-error-input'
        } else {
            refNameInput.current.className = 'uh-create-hotel-input'
        }
    }

    const handleSpotChange = (event) => {
        const hotelSpot = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
        setSpot(hotelSpot)
        if (!isValidPlace(hotelSpot)) {
            refUbiInput.current.className = 'uh-error-input'
        } else {
            refUbiInput.current.className = 'uh-create-hotel-input'
        }
    }

    const handleDescriptionChange = (event) => {
        const hotelDescription = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
        setDescription(hotelDescription)
        if (!isValidDescription(hotelDescription)) {
            refDescriptionInput.current.className = 'uh-error-input'
        } else {
            refDescriptionInput.current.className = 'uh-create-hotel-input'
        }
    }

    const handleServiceChange = (event) => {
        const service = event.target.value
        setService(service)
    }

    const handlePriceChange = (event) => {
        const hotelPrice = event.target.value
        setPrice(hotelPrice)
        if (!isValidPrice(hotelPrice)) {
            refPriceInput.current.className = 'uh-error-input'
        } else {
            refPriceInput.current.className = 'uh-create-hotel-input'
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

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        const newData = new FormData();
        const errors = [];

        // Perform validations
        if (oldImages.length === 0 && newImages.length === 0) {
            errors.push('images');
            refInputImg.current.className = 'uh-img-section-error'
            refImageIcon.current.className = 'uh-add-img-icon-error fa-solid fa-circle-plus'
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
        if (!isValidName(name)) {
            errors.push('name');
            refNameInput.current.className = 'uh-error-input'
        } else {
            newData.append('name', name);
        }
        if (!isValidDescription(description)) {
            errors.push('description');
            refDescriptionInput.current.className = 'uh-error-input'
        } else {
            newData.append('description', description);
        }
        if (!isValidPlace(spot)) {
            errors.push('spot');
            refUbiInput.current.className = 'uh-error-input'
        } else {
            newData.append('spot', spot);
        }
        if (service == 'none' || !service) {
            errors.push('service');
            refServiceInput.current.className = 'uh-error-input-select'
        } else {
            newData.append('service', service);
        }
        if (!isValidPrice(price) || !price) {
            errors.push('price');
            refPriceInput.current.className = 'uh-error-input'
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
                const fetchResponse = await fetchApi(`http://localhost:3001/api/products/update/hotel/${id}`, {
                    method: 'PUT',
                    headers,
                    body: data,
                });
                if(fetchResponse.info.status === 200) window.location.href = `/hotelDetail/${id}`
                if(fetchResponse.info.status === 400) console.log(fetchResponse);
            }

            fetchSend(newData)
        } else {
            console.log('Validation errors:', errors);
        }
    };


    return (
        <div className="App-hotelUpdate">
            <form className="uh-crate-hotel" onSubmit={handleSubmit}>

                <div className="uh-create-hotel-top">

                    <div className="uh-create-hotel-top-1">
                        <input type="file" id="input-hotel-create" name="productFile" multiple onChange={handleImageChange}></input>
                        <label className="uh-add-img-label-hotel">Choose the product images:</label>
                        <h5 ref={refErrorImg} className='uh-error-hidden'>File extension not allowed</h5>
                        <div ref={refInputImg} className="uh-img-section">
                        {oldImages.length > 0 ? oldImages.map((image, index) => (
                                    <div key={index} className="uf-preview-image">
                                        <img src={`http://localhost:3001/images/hotels/product_${userId}/${image}`} alt={`Image ${index}`} />
                                        <a onClick={(event) => removeImage(index, event)}><i className="fa-solid fa-xmark"></i></a>
                                    </div>
                                )) : null}
                                {newImages.length > 0 ? newImages.map((image, index) => (
                                    <div key={index} className="cf-preview-image">
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                        <a onClick={(event) => removeNewImage(index, event)}><i className="fa-solid fa-xmark"></i></a>
                                    </div>
                                )) : null}
                            <label htmlFor="input-hotel-create"><i ref={refImageIcon} className="uh-add-img-icon fa-solid fa-circle-plus"></i></label>
                        </div>

                    </div>

                    <div className="uh-create-hotel-top-2">

                        <section className="uh-create-hotel-name-spot">
                            <div className="uh-create-hotel-inputDiv">
                                <label className="uh-create-hotel-label" htmlFor="name">Name:</label>
                                <input className="uh-create-hotel-input" ref={refNameInput} type="text" id="name" name="name" value={name} onChange={handleNameChange}></input>
                            </div>
                            <div className="uh-create-hotel-inputDiv">
                                <label className="uh-create-hotel-label" htmlFor="spot">Ubication:</label>
                                <input className="uh-create-hotel-input" type="text" ref={refUbiInput} id="spot" name="spot" value={spot} onChange={handleSpotChange}></input>
                            </div>
                        </section>

                        <section className="uh-create-hotel-description">
                            <div className="uh-create-hotel-inputDiv">
                                <label className="uh-create-hotel-label" htmlFor="descriptionH">Description:</label>
                                <input className="uh-create-hotel-input" type="textarea" ref={refDescriptionInput} name="descriptionH" id="descriptionH" value={description} onChange={handleDescriptionChange}></input>
                            </div>
                        </section>

                        <section className="uh-create-hotel-service ">
                            <div className="uh-create-hotel-inputDiv">
                                <label className="uh-create-hotel-label" htmlFor="service">Service:</label>
                                <select name="service" id="service" ref={refServiceInput} className='uh-input-select' value={service} onChange={handleServiceChange}>
                                    <option value="none">Select a service</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="uh-create-hotel-inputDiv">
                                <label className="uh-create-hotel-label" htmlFor="price">Price by night:</label>
                                <input ref={refPriceInput} className="uh-create-hotel-input" type="number" name="price" id="price" value={price} onChange={handlePriceChange}></input>
                            </div>
                        </section>

                    </div>
                </div>

                <div className="uh-crate-hotel-button">
                    <button className="uh-" >Create</button>
                </div>

            </form>
        </div>
    )
}

export default HotelUpdate
