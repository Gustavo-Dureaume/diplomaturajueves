import '../style/ContactoPage.css'


const ContactoPage = (props) => {
    return(
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"></input></p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 43432485</li>
                    <li>Email: contacto@transportex.com</li>
                    <li>Twitter</li>
                    <li>Skipe</li>
                </ul>
            </div>

        </main>
    )
}
export default ContactoPage;