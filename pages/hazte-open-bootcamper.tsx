import HeroOpenBootcamper from "../components/bootcamper/Hero";
import Accordeon from "../components/hazte_open_bootcamper/Accordeon";
import { Navbar } from "../components/navBar";

const BeOpenBootcamper = () => {
  const questions = [
    {
      question: "Soy autónomo, ¿Puedo facturar la recompensa?",
      answer: "Respuesta 1",
    },
    {
      question: "¿Qué pasa si no quiero recibir la recompensa?",
      answer: "respuesta 2",
    },
    {
      question: "¿Qué pasa si no quiero recibir la recompensa?",
      answer: "respuesta 2",
    },
    {
      question: "¿Qué pasa si no quiero recibir la recompensa?",
      answer: "respuesta 2",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroOpenBootcamper />
      <Accordeon items={questions}></Accordeon>
    </>
  );
};

export default BeOpenBootcamper;
