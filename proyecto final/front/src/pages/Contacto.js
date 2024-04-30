import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>contacto</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <imput type="text" name="" />
                    </p>

                    <p>
                        <label for="email">Email</label>
                        <imput type="text" name="" />
                    </p>

                    <p>
                        <label for="telefono">Telefono</label>
                        <imput type="text" name="" />
                    </p>

                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>

                    <p class="acciones"><imput type="submit" value="enviar" />
                    </p>
                </form>
            </div>

            <div class="datos">
                <h2>otras vias de comunicación</h2>
                <p>tambien puede contactarse con nosotros por estos medios</p>
                <ul>
                    <li>telefono: *********</li>
                    <li>emial: ************</li>
                    <li>facebook</li>
                </ul>
            </div>
        </main>
    );
}

export default Contacto;
