import '../style/HomePage.css'

const HomePage = (props) => {
    return(
      <main className='holder'>
        <div className='homeimg'>
            <img src='img/img01.jpg' alt='Avion'/>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, 
                officia? Accusantium libero sunt non magni quidem ipsam ipsum fuga,
                ut ratione aperiam dolorem temporibus natus, vitae quam, perferendis 
                quis ex!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, 
                officia? Accusantium libero sunt non magni quidem ipsam ipsum fuga,
                ut ratione aperiam dolorem temporibus natus, vitae quam, perferendis 
                quis ex!</p>
            </div>
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                <span className="cita">Simplemente Excelente</span>
                <span className="autor">Juan Perez - zapatos.com</span>
                </div>
            </div>
        </div>

      </main>
        
    );
}
export default HomePage;