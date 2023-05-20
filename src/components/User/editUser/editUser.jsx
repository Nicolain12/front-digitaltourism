import React, { useState, useRef } from 'react';
import './editUser.css';
import { Link } from 'react-router-dom';


function EditUser() {
    async function fetchApi(endpoint, config) {
        try {
            const response = await fetch(endpoint, config);
            const jsonResponse = await response.json();
            if (jsonResponse.info.status === 200) {
                sessionStorage.removeItem('userLogged')
                sessionStorage.setItem('userLogged', JSON.stringify(jsonResponse.data))
                window.location.href = `/profile/${userLogged.id}`
            }
            if (jsonResponse.info.status === 400) {
                console.log(jsonResponse);
            }
        } catch (err) {
            console.error(err);
        }
    }


    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))
    const [name, setName] = useState(userLogged.firstName)
    const [surname, setSurname] = useState(userLogged.lastName)
    const [email, setEmail] = useState(userLogged.email)
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageToChange, setImageToChange] = useState(null);

    const nameInputRef = useRef()
    const nameRefError = useRef()
    const surnameInputRef = useRef()
    const surnameRefError = useRef()
    const emailInputRef = useRef()
    const emailRefError = useRef()
    const imageRefError = useRef()

    const nameChangeHandle = (e) => {
        setName(e.target.value)
    }
    const surnameChangeHandle = (e) => {
        setSurname(e.target.value)
    }
    const emailChangeHandle = (e) => {
        setEmail(e.target.value)
    }
    // ************************************************************************************************************************************************

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            const fileType = file.type.toLowerCase();
            const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
            if (!allowedExtensions.includes(fileExtension)) {
                imageRefError.current.className = 'error-shown'
            } else {
                imageRefError.current.className = 'error-hidden'
                const imageUrl = URL.createObjectURL(file);
                setSelectedImage(imageUrl);
                setImageToChange(file)
            }
        }
    };
    // ************************************************************************************************************************************************

    const updateUserSubmit = (e) => {
        e.preventDefault();
        const errors = []
        const headers = {};
        const permanentToken = localStorage.getItem('token');
        const token = sessionStorage.getItem('token');
        if (token) headers.authorization = token;
        if (permanentToken) headers.authorization = permanentToken;
        const newUserData = new FormData();
        newUserData.append('name', name);
        newUserData.append('surname', surname);
        newUserData.append('email', email);
        // ************************************************************************************************************************************************
        if (imageToChange != null) {
            newUserData.append('fileEdit', imageToChange, imageToChange.name);
            imageRefError.current.className = 'error-hidden'
        } 
        // ************************************************************************************************************************************************

        // VALIDATIONS
        const nameValidate = newUserData.get('name') ? /^[a-z]{3,}$/i.test(newUserData.get('name')) : null
        const surnameValidate = newUserData.get('surname') ? /^[a-z]{3,}$/i.test(newUserData.get('surname')) : null
        const emailValidate = newUserData.get('email') ? newUserData.get('email').length > 13 : null
        const imageValidate = newUserData.get('fileEdit') ? true : false
        if (!nameValidate) {
            errors.push('name')
            nameInputRef.current.className = 'input-error'
            nameRefError.current.className = 'error-shown'
        } else {
            nameInputRef.current.className = 'input-edit-user'
            nameRefError.current.className = 'error-hidden'
        }
        if (!surnameValidate) {
            errors.push('surname')
            surnameInputRef.current.className = 'input-error'
            surnameRefError.current.className = 'error-shown'
        } else {
            surnameInputRef.current.className = 'input-edit-user'
            surnameRefError.current.className = 'error-hidden'
        }
        if (!emailValidate) {
            errors.push('email')
            emailInputRef.current.className = 'input-error'
            emailRefError.current.className = 'error-shown'
        } else {
            emailInputRef.current.className = 'input-edit-user'
            emailRefError.current.className = 'error-hidden'
        }
        // ***********************************************************

        if (errors < 1) {
            fetchApi(`http://localhost:3001/api/users/update/${userLogged.id}`, {
                method: 'PUT',
                headers,
                body: newUserData,
            });
        } else {
            console.log(`errors: ${errors}`);
        }



    };

    const cancelUpdate = () => {
        window.location.href = `profile/${userLogged.id}`
    }


    return (
        <div onSubmit={updateUserSubmit} className="App-editUser">
            <main>
                <form className="main-profile-div-EDIT">
                    <section className="img-profile-EDIT">
                        <label htmlFor="fileEdit">
                            {selectedImage ? <img src={selectedImage} alt="Selected Image" /> : <img src={`http://localhost:3001/images/users/${userLogged.image}`} alt="Imagen del usuario" />}
                            <p>Edit Image</p>
                        </label>
                        <input onChange={handleImageChange} type="file" defaultValue="" name="fileEdit" id="fileEdit" />
                        <h5 ref={imageRefError} className="error-hidden">Type of file not allowed</h5>
                    </section>
                    <section className="main-info-profile-EDIT">
                        <div className="name-edit">
                            <label htmlFor="nameEdit">Name:</label>
                            <h5 ref={nameRefError} className="error-hidden">Not allowed, try again</h5>
                            <input
                                className='input-edit-user'
                                ref={nameInputRef}
                                onChange={nameChangeHandle}
                                type="text"
                                defaultValue={name}
                                name="nameEdit"
                                id="nameEdit"
                            />
                        </div>
                        <div className="surname-edit">
                            <label htmlFor="surnameEdit">Surname:</label>
                            <h5 ref={surnameRefError} className="error-hidden">Not allowed, try again</h5>
                            <input
                                className='input-edit-user'
                                ref={surnameInputRef}
                                onChange={surnameChangeHandle}
                                type="text"
                                defaultValue={surname}
                                name="surnameEdit"
                                id="surnameEdit"
                            />
                        </div>
                        <div className="email-edit">
                            <label htmlFor="emailEdit">Email:</label>
                            <h5 ref={emailRefError} className="error-hidden">Not allowed, try again</h5>
                            <input
                                className='input-edit-user'
                                ref={emailInputRef}
                                onChange={emailChangeHandle}
                                type="email"
                                defaultValue={email}
                                name="emailEdit"
                                id="emailEdit"
                            />
                        </div>
                        <div className="button-profile-edit">
                            <button className='submitEditUser' type="submit">Update</button>
                            {/* ******************************************************************* */}
                            <Link onClick={cancelUpdate} className='cancelEditUser'>Cancel</Link>
                            {/* ******************************************************************* */}
                        </div>
                    </section>
                </form>
            </main>
        </div>
    );
}

export default EditUser;
