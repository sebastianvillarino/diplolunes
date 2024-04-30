const Homepage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="imagen fondo.png" alt="principal" />
            </div>
            <div className="columnas">
                <div className="Bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>lorem</p>
                    <p>lorem</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">simple y excelente</span>
                        <span class="autor">Sebastian Villarino</span>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Homepage;
