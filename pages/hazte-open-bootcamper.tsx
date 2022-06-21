import { GetStaticProps } from 'next'
import HeroOpenBootcamper from '../components/bootcamper/Hero'
import { Testimonios } from '../components/hazte_open_bootcamper/Testimonios'
import HeroOpenBootcamper from '../components/hazte_open_bootcamper/Hero'
import { Navbar } from '../components/navBar'
import Questions from '../components/questions'

import faqs from '../public/faqs.json'

import testimonios from '../utils/data/testimonios.json'

const BeOpenBootcamper = () => {

  const firstFourQuestions = faqs.slice(0, 4)

  return (
    <>
      <Navbar />
      <HeroOpenBootcamper />
      <Testimonios testimonios={testimonios} />
      <Questions questionsList={firstFourQuestions} />
    </>
  )
}

export default BeOpenBootcamper