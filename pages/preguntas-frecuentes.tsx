import React from "react";
import Image from "next/image";
import Questions from "../components/questions";

export default function preguntasFrecuentes() {
  const questions = [
    {
      question: "Soy autónomo, ¿Puedo facturar la recompensa?",
    },
    {
      question: "¿Qué pasa si no quiero recibir la recompensa?",
    },
    {
      question: "¿Qué pasa si no quiero recibir la recompensa?",
    },
    {
      question: "¿Qué pasa si no quiero recibir la recompensa?",
    },
  ];

  return (
    <div>
      <Questions items={questions} />
    </div>
  );
}
