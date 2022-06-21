import HeroOpenBootcamper from '../components/hazte_open_bootcamper/Hero'
import { Navbar } from '../components/navBar'
import Questions from '../components/questions'

import faqs from '../public/faqs.json'

const BeOpenBootcamper = () => {

  const firstFourQuestions = faqs.slice(0, 4)

  return (
    <>
      <Navbar />
      <HeroOpenBootcamper />
      <Questions questionsList={firstFourQuestions} />
    </>
  )
}

export default BeOpenBootcamper