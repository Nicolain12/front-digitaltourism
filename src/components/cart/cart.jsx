import React from 'react';
import './cart.css';

function Cart() {
    return (
        <div className="App-cart">
             <main className="cart-main">

<section className="cart-flight-section">
    <h2>Vuelos</h2>

    <div className="cart-article-flight-div">
        <div className="cart-tools-flight">
            <div className="cart-add-subtract-item-f">
                <p className="cart-subtract-item-f"><i className="fa-sharp fa-solid fa-minus"></i></p>
                <p className="cart-number-item-f">1</p>
                <p className="cart-add-item-f"><i className="fa-solid fa-plus"></i></p>
            </div>
            <div className="cart-delete-item-f">
                <p><i className="fa-solid fa-trash"></i></p>
            </div>
        </div>
        <article className="cart-article-flight">
            <div className="img-flight">
                <img src="/images/flights/logo2.jpg" alt=""></img>
            </div>
            <div className="info-flight-div">
                <div className="info-flight-div-1">
                    <h3>Departure</h3>
                    <h3>------</h3>
                    <h3>Reach</h3>
                </div>
                <div className="info-flight-div-2">
                    <div className="departure-info">
                        <div>
                            <h4>Salida:</h4>
                            <p className="date">dd/mm/aaaa</p>
                            <section className="line-f"></section>
                            <p className="hour">hh:mm</p>
                        </div>
                        <section className="date-f"></section>
                        <div>
                            <h4>Llegada:</h4>
                            <p className="date">dd/mm/aaaa</p>
                            <section className="line-f"></section>
                            <p className="hour">A confirmar...</p>
                        </div>
                    </div>
                </div>

                <div className="cabin-type">
                    <h4>Tipo de Cabina:</h4>
                    <p className="cabin">"Cabina tal"</p>
                </div>

                <div className="info-flight-div-5">
                    <p>$ 9999999</p>
                    <a href=""><i className="fa-solid fa-plane-up add-cart-flight"></i></a>
                    <a href=""><i className="fa-solid fa-plane-circle-check added-cart-flight"></i></a>
                </div>
            </div>
        </article>
    </div>
</section>

<section className="cart-hotel-section">
    <h2>Hoteles</h2>
    <div className="cart-hotel-div">
<div className="cart-article-hotel-div">

            <article className="cart-article-hotel">
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

            <div className="cart-tools-hotel">
                <div className="cart-add-subtract-item-h">
                    <p className="cart-subtract-item-h"><i className="fa-sharp fa-solid fa-minus"></i></p>
                    <p className="cart-number-item-h">1</p>
                    <p className="cart-add-item-h"><i className="fa-solid fa-plus"></i></p>
                </div>
                <div className="cart-delete-item-h">
                    <p><i className="fa-solid fa-trash"></i></p>
                </div>
            </div>

        </div>

</div>
</section>
<section className="cart-package-section">
    <h2>Paquetes</h2>
    <div className="cart-package-div">

        <div className="cart-article-package-div">

            <article className="cart-package-article">

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
                            <a href=""><i
                                    className="fa-solid fa-plane-circle-check added-cart-flight"></i></a>
                        </div>
                    </div>
                </div>
            </article>


            <div className="cart-tools-package">
                <div className="cart-tools-package-top">
                    <div className="cart-tools-package-specification">
                        <p>Noches:</p>
                        <div className="cart-add-subtract-item-p">
                            <p className="cart-subtract-item-p"><i className="fa-sharp fa-solid fa-minus"></i>
                            </p>
                            <p className="cart-number-item-p">1</p>
                            <p className="cart-add-item-p"><i className="fa-solid fa-plus"></i></p>
                        </div>
                    </div>
                    <div className="cart-tools-package-specification">
                        <p>Personas:</p>
                        <div className="cart-add-subtract-item-p">
                            <p className="cart-subtract-item-p"><i className="fa-sharp fa-solid fa-minus"></i>
                            </p>
                            <p className="cart-number-item-p">1</p>
                            <p className="cart-add-item-p"><i className="fa-solid fa-plus"></i></p>
                        </div>
                    </div>

                </div>
                <div className="cart-delete-item-p">
                    <p><i className="fa-solid fa-trash"></i></p>
                </div>
            </div>

        </div>

    </div>
</section>

<section className="cart-button-section">
    <div className="cart-total">
        <p>Total:</p>
        <p className="cart-total-numb">$999999</p>
    </div>
    <div className="cart-buttons">
        <button className="cart-button-delete">Eliminar Carrito</button>
    <button className="cart-button-buy">Comprar Carrito</button>
    </div>
</section>
</main>
        </div>
    );
}

export default Cart;
