import { GetStaticProps } from 'next'
import HeroOpenBootcamper from '../components/bootcamper/Hero'
import { Testimonios } from '../components/hazte_open_bootcamper/Testimonios'
import { Navbar } from '../components/navBar'

import testimonios from '../utils/data/testimonios.json'

const BeOpenBootcamper = () => {
  return (
    <>
      <Navbar />
      <HeroOpenBootcamper />
      <Testimonios testimonios={testimonios} />
    </>
  )
}

export default BeOpenBootcamper