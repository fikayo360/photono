import './navMobile.css'
import { useInView } from 'react-intersection-observer';

const NavMobile = ({navActive}) => {
    const [ref, inView] = useInView();
    return (
    <div id="navMobile" ref={ref} className={`${inView?'animate__animated animate__fadeInLeft animate__slow':''}`}>
        <div id="navMobileHead">
            <h1>PHOTONO</h1>
            <img src='./x.png' onClick={navActive} />
        </div>

        <ul id="navMobileBody">
            <li ref={ref} onClick={navActive}><a href='#portfolio' className={`${inView?'animate__animated animate__fadeInDownBig  animate__delay-1s':''}`}>portfolio</a></li>
            <li ref={ref} onClick={navActive}><a href='#about' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>about</a></li>
            <li ref={ref} onClick={navActive}><a href='#contact' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>contact</a></li>
        </ul>

    </div>)
}

export default NavMobile