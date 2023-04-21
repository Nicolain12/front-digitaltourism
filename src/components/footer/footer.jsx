import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="App-footer">
            <footer className="footer">
                <div className="container_footer">
                    <div className="row_footer">
                        <div className="footer-col">
                            <h4>DT Airlines</h4>
                            <ul className="item">
                                <li><Link to='#'>Experiencia DT</Link></li>
                                <li><Link to='#'>Prepara tu viaje</Link></li>
                                <li><Link to='#'>Mis viajes</Link></li>
                                <li><Link to='#'>Estado de vuelo</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Informacion Legal</h4>
                            <ul className="item">
                                <li><Link to='#'>Devolución de tasas de embarque</Link></li>
                                <li><Link to='#'>Conoce tus derechos</Link></li>
                                <li><Link to='#'>Cargos por servicio</Link></li>
                                <li><Link to='#'>Políticas de privacidad y seguridad</Link></li>
                                <li><Link to='#'>Términos de uso</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Portales asociados</h4>
                            <ul className="item">
                                <li><Link to='#'>LATAM Pass</Link></li>
                                <li><Link to='#'>Vamos / LATAM</Link></li>
                                <li><Link to='#'>Paquetes, hoteles y más</Link></li>
                                <li><Link to='#'>LATAM Corporate</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>síguenos</h4>
                            <div className="social-links">
                                <Link to='#'><i className="fab fa-facebook-f"></i></Link>
                                <Link to='#'><i className="fab fa-twitter"></i></Link>
                                <Link to='#'><i className="fab fa-instagram"></i></Link>
                                <Link to='#'><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Nuestra app en tu teléfono</h4>
                            {/* <div className="plataformas">
                                <Link to='#'><img src="/images/partials/as.jpeg" alt=""></Link>
                                <Link to='#'><img src="/images/partials/gp.png" alt=""></Link>
                            </div>  */}
                        </div>
                    </div>

                    <div className="footer-footer">
                        <h3 className="ff-content">Copyright © 2022-2022 DigitalTourism S.R.L.</h3>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
