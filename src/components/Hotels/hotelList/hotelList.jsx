import React from 'react';
import './hotelList.css';

function HotelList() {
    return (
        <div className="App-hotel-list">
             <main>
                <div className="main-div-hotel">

                    <article className="main-article-hotel">
                        <div className="hotel-img">
                            <img src="/images/hotels/logo2.jpg" alt=""></img>
                        </div>
                        <div className="name-hotel">
                            <h3>Name</h3>
                            <div className="service-hotel">
                                <p>Stars</p>
                            </div>
                        </div>
                        <div className="spot-hotel">
                            <p>Spot</p>
                        </div>
                        <div className="price-hotel">
                            <p>$ 9999999</p>
                            <a href=""><i className="fa-solid fa-plane-up add-cart-flight"></i></a>
                            <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a>
                        </div>
                    </article>

               </div>
            </main>

        </div>
    );
}

export default HotelList;
