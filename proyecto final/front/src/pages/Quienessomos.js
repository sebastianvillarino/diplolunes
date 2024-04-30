import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Quienessomos = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>lorem</p>
                <p>lorem</p>
            </div>
            <div className="staff">
                <h2>staff</h2>
                <div className="persona">
                    <div className="persona">
                        <img src="fotoperfil.jpg" alt="Sebastian Villarino" />
                        <h5>Sebastian Villarino</h5>
                        <h6>Socio fundador</h6>
                        <p>Lorem</p>
                    </div>

                    <div className="persona">
                        <div className="persona">
                            <img src="fotopaola.jpg" alt="Paola Villarino" />
                            <h5>Paola Villarino</h5>
                            <h6>Socia cofundador</h6>
                            <p>Lorem</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Quienessomos;
