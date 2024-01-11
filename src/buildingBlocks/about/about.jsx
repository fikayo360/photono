import './about.css'
import { useInView } from 'react-intersection-observer';




const About = () => {
    const [ref, inView] = useInView();
    return(
    <section id="about">
        <h1>About us</h1>
        <p id="aboutFirstPara" ref={ref} className={`${inView?'animate__animated animate__flipInX animate__slow':''}`}>A dedicated Team Of Photographers capturing precious moments with every click </p>
        <p id='aboutLastPara'>with our expertise and artistic vision, we are commited to presenting a unique story every time our shutter closes. we believe beauty lies in small details</p>
        <div id="imagesCont">
            <div className='imgCont' id="cont1"><img src='https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
            <div className='imgCont' id="cont2"><img src='https://images.pexels.com/photos/1146238/pexels-photo-1146238.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
            <div className='imgCont' id="cont3"><img src="https://images.pexels.com/photos/1471028/pexels-photo-1471028.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
            <div className='imgCont' id="cont4"><img src='https://images.pexels.com/photos/1615824/pexels-photo-1615824.jpeg?auto=compress&cs=tinysrgb&w=600' /></div>
            <div className='imgCont' id="cont5"><img src='https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
        </div>
    </section>
    )
}

export default About 