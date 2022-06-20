import React from "react";
import Image from "next/image";
import Questions from "../components/questions";

export default function preguntasFrecuentes() {
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
    <div>
      <Questions items={questions} />
    </div>
  );
}
