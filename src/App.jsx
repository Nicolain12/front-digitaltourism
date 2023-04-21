import React from 'react';
import './App.css';

// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainIndex from './components/mainIndex/mainIndex';
import ProductDelete from './components/productDelete/productDelete' // TO DO
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
import Choose from './components/User/choose/choose'
import Profile from './components/User/profile/profile'
import Loggin from './components/User/loggin/loggin'
import Register from './components/User/register/register'
import CreateChose from './components/createChoose/createChoose'
import Cart from './components/cart/cart'
import DeleteConfirmUser from './components/User/deleteConfirm/deleteConfirm'
import EditUser from './components/User/editUser/editUser'

// ***********************************************
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        {/****************** HOME ******************/}
        <Route exact path="/" element={<MainIndex />} />

        {/* ***************** PRODUCTS **************** */}
        <Route exact path="/productDelete" element={<ProductDelete />} />
        
        {/* Flights */}
        <Route exact path="/flights" element={<Flights />} />
        <Route exact path="/flightsCreate" element={<FlightsCreate />} />
        <Route exact path="/flightsDetail/:id" element={<FlightsDetail />} />
        <Route exact path="/flightsUpdate" element={<FlightsUpdate />} />

        {/* Hotels */}
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/hotelCreate" element={<HotelCreate />} />
        <Route exact path="/hotelDetail" element={<HotelDetail />} />
        <Route exact path="/hotelUpdate" element={<HotelUpdate />} />

        {/* Packages */}
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/packageCreate" element={<PackageCreate />} />
        <Route exact path="/packageDetail" element={<PackageDetail />} />
        <Route exact path="/packageUpdate" element={<PackageUpdate />} />

        {/****************** USER ******************/}
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/loggin" element={<Loggin />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/createChoose" element={<CreateChose />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/deleteConfirmUser" element={<DeleteConfirmUser />} />
        <Route exact path="/editUser" element={<EditUser />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;