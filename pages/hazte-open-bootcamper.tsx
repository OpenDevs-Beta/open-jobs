
import HeroOpenBootcamper from "../components/hazte_open_bootcamper/Hero";
import Accordeon from "../components/hazte_open_bootcamper/Accordeon";
import { Navbar } from "../components/navBar";
import { Testimonios } from '../components/hazte_open_bootcamper/Testimonios'

import faqs from '../public/faqs.json'

import testimonios from '../utils/data/testimonios.json'        

const BeOpenBootcamper = () => {

  const firstFourQuestions = faqs.slice(0, 4)

  return (
    <>
      <Navbar />
      <HeroOpenBootcamper />
     
      <Testimonios testimonios={testimonios} />
      
      <Accordeon items={firstFourQuestions}></Accordeon>
    </>
  );
};

export default BeOpenBootcamper;
