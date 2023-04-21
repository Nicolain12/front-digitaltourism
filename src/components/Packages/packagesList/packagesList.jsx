import React from 'react';
import './packageList.css';

function PackagesList() {
    return (
        <div className="App-package-list">
            
            <main>

                <div className="main-packages">

                <article className="package-article">

<div className="Departure-reach-pack">
    <h3>Departure</h3>
    <h3>------</h3>
    <h3>Reach</h3>
</div>
<div className="second-pack-main-div">

    <div className="img-div-pack">
        <img src="/images/hotels/logo2.jpg" alt=""></img>
    </div>

    <div className="main-pack-info">
        <div className="info-pack-div-2">
            <div className="departure-info-pack">
                <div>
                    <h4>Salida:</h4>
                    <p className="date-pack">dd/mm/aaaa</p>
                    <section className="line-f"></section>
                    <p className="hour-pack">hh:mm</p>
                </div>
                <section className="date-f"></section>
                <div>
                    <h4>Llegada:</h4>
                    <p className="date-pack">dd/mm/aaaa</p>
                    <section className="line-f"></section>
                    <p className="hour-pack">A confirmar...</p>
                </div>
            </div>
        </div>

        <div className="cabin-type">
            <h4>Tipo de Cabina:</h4>
            <p className="cabin">"Cabina tal"</p>
        </div>

        <div className="hotel-info-start">
            <h5>HOTEL</h5>
        </div>

        <div className="name-hotel-pack">
            <h3>Name</h3>
            <div className="service-hotel-pack">
                <p>Stars</p>
            </div>
        </div>
        <div className="spot-hotel">
            <p>Spot</p>
        </div>

        <div className="info-pack-div-5">
            <p>$ 9999999</p>
            <a href=""><i className="fa-solid fa-plane-up add-cart-flight"></i></a>
            <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a>
        </div>
    </div>
</div>
</article>


                </div>

            </main>
        </div>
    );
}

export default PackagesList;
