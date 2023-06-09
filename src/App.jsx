import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainIndex from './components/mainIndex/mainIndex';
import Flights from './components/Flights/flightsList/flightsList'
import FlightsCreate from './components/Flights/flightCreate/flightCreate'
import FlightsDetail from './components/Flights/flightDetail/flightDetail'
import FlightsUpdate from './components/Flights/flightUpdate/flightUpdate'
import Hotels from './components/Hotels/hotelList/hotelList'
import HotelCreate from './components/Hotels/hotelCreate/hotelCreate'
import HotelDetail from './components/Hotels/hotelDetail/hotelDetail'
import HotelUpdate from './components/Hotels/HotelUpdate/hotelUpdate'
import Packages from './components/Packages/packagesList/packagesList'
import PackageCreate from './components/Packages/packagesCreate/packageCreate'
import PackageDetail from './components/Packages/packageDetail/packageDetail'
import PackageUpdate from './components/Packages/packageUpdate/packageUpdate'
import Profile from './components/User/profile/profile'
import Loggin from './components/User/loggin/loggin'
import Register from './components/User/register/register'
import Cart from './components/cart/cart'
import EditUser from './components/User/editUser/editUser'

function App() {
  async function fetchApi(endpoint, config) {
    try {
      const responseApi = await fetch(endpoint, config)
      const jsonResponse = await responseApi.json()
      if (jsonResponse.info.status == 200) {
        sessionStorage.setItem('userLogged', JSON.stringify(jsonResponse.data))
      } else {
        return null
      }

    } catch (err) {
      return null
    }
  }

  useEffect(() => {
    const permanentToken = localStorage.getItem('token');
    if (permanentToken) {
      const headers = {
        authorization: permanentToken
      };
      fetchApi('http://localhost:3001/api/users/token/byId', {
        method: 'GET',
        headers,
      });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/****************** HOME ******************/}
        <Route exact path="/" element={<MainIndex />} />

        {/* ***************** PRODUCTS **************** */}
        {/* Flights */}
        <Route exact path="/flights" element={<Flights />} />
        <Route exact path="/flightsCreate" element={<FlightsCreate />} />
        <Route exact path="/flightsDetail/:id" element={<FlightsDetail />} />
        <Route exact path="/flightsUpdate/:id" element={<FlightsUpdate />} />

        {/* Hotels */}
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/hotelCreate" element={<HotelCreate />} />
        <Route exact path="/hotelDetail/:id" element={<HotelDetail />} />
        <Route exact path="/hotelsUpdate/:id" element={<HotelUpdate />} />

        {/* Packages */}
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/packageCreate" element={<PackageCreate />} />
        <Route exact path="/packageDetail/:id" element={<PackageDetail />} />
        <Route exact path="/packagesUpdate/:id" element={<PackageUpdate />} />

        {/****************** USER ******************/}
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/loggin" element={<Loggin />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/editUser" element={<EditUser />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;