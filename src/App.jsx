import About from "./buildingBlocks/about/about"
import Contact from "./buildingBlocks/contact/contact"
import Footer from "./buildingBlocks/footer/footer"
import Hero from "./buildingBlocks/hero/hero"
import Misc from "./buildingBlocks/misc/other"
import Portfoilo from "./buildingBlocks/portfolio/portfolio"
import WhyChooseUs from "./buildingBlocks/whyus/whyChooseUs"
import 'animate.css';
import { useEffect } from "react"

function App() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', viewport.content + `, height=${window.innerHeight}`);
      }
    }
  }, []);


  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Portfoilo />
      <Misc />
      <Contact />
      <Footer />
    </>
  )
}

export default App
