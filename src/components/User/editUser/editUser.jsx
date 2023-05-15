import React, { useState } from 'react';
import './editUser.css';


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

    const nameChangeHandle = (e) => {
        setName(e.target.value)
    }
    const surnameChangeHandle = (e) => {
        setSurname(e.target.value)
    }
    const emailChangeHandle = (e) => {
        setEmail(e.target.value)
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
          setImageToChange(file)
        }
      };
      

    const updateUserSubmit = (e) => {
  e.preventDefault();

  const headers = {};

  const permanentToken = localStorage.getItem('token');
  const token = sessionStorage.getItem('token');
  if (token) headers.authorization = token;
  if (permanentToken) headers.authorization = permanentToken;

  const newUserData = new FormData();

  newUserData.append('name', name);
  newUserData.append('surname', surname);
  newUserData.append('email', email);

  if (imageToChange) {
    newUserData.append('fileEdit', imageToChange, imageToChange.name);
  }

  //******************** VALIDATIONS ************************
  //*********************************************************

  fetchApi(`http://localhost:3001/api/users/update/${userLogged.id}`, {
    method: 'PUT',
    headers,
    body: newUserData,
  });
};


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
                    </section>
                    <section className="main-info-profile-EDIT">
                        <div className="name-edit">
                            <label htmlFor="nameEdit">Name:</label>
                            <input
                                onChange={nameChangeHandle}
                                type="text"
                                defaultValue={name}
                                name="nameEdit"
                                id="nameEdit"
                            />
                        </div>
                        <div className="surname-edit">
                            <label htmlFor="surnameEdit">Surname:</label>
                            <input
                                onChange={surnameChangeHandle}
                                type="text"
                                defaultValue={surname}
                                name="surnameEdit"
                                id="surnameEdit"
                            />
                        </div>
                        <div className="email-edit">
                            <label htmlFor="emailEdit">Email:</label>
                            <input
                                onChange={emailChangeHandle}
                                type="email"
                                defaultValue={email}
                                name="emailEdit"
                                id="emailEdit"
                            />
                        </div>
                        <div className="button-profile-edit">
                            <button type="submit">Update</button>
                        </div>
                    </section>
                </form>
            </main>
        </div>
    );
}

export default EditUser;
