import { gallery } from "../../gallery"
import './portfolio.css'

const Portfoilo = () => {
    return (
        <section id="portfolio">
            <h1> COLLECTION </h1>
            <main id='gallery'>
                {
                    gallery.map((img) =>
                     (<div className='galleryItem'>
                        <img alt="images" src={img}/>
                    </div>) )
                }
            </main>
        </section>
    )
}

export default Portfoilo