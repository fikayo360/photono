import './hero.css'
import { useState } from 'react'
import NavMobile from '../navMobile/navMobile'
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [navActive,setNavActive] = useState(false)

  const [ref, inView] = useInView();

   const toggleMobileNav = () => {
      setNavActive((prev) => !prev)
      console.log('hi')
   }

    return(
      <section id="hero" style={{backgroundImage:'url(./heroBg2.jpg)'}}>

         {navActive?<NavMobile navActive={toggleMobileNav} />:null}
        <div id="heroNav">
                <h1>PHOTONO</h1>
                <div id="navCenter">
                    <h1><a href='#portfolio'>PORTFOLIO</a></h1>
                    <h1><a href='#about'>ABOUT</a></h1>
                </div>
                <div id="navRight">
                    <h1><a href='#contact'>CONTACT</a></h1>
                </div>
                <img src='./burger.png' onClick={toggleMobileNav}/>
        </div>

        <p  ref={ref} id="heroPtext" className={`${inView?'animate__animated animate__fadeInDown animate__slow':''}`}> THE BEST FOR ALL YOUR PHOTOGRAPHY NEEDS </p>
        <p ref={ref} id="heroPtextO" className={`${inView?'animate__animated animate__fadeInDown animate__slow':''}`}> choose us to immortalize your precious moments in priceless and immersive works of art </p>

      </section>
    )
}

export default Hero