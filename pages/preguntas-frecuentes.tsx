import React from "react";
import Image from "next/image";

export default function preguntasFrecuentes() {
  return (
    <div>
      <Image src="/question.png" width={60} height={60} />
      <h1>FAQ</h1>
      <p>Las preguntas más comunes de nuestros usuarios</p>
      <div>
        <div>Recomendadores</div>
        <div className="question-list">
          <div className="question-item"></div>
        </div>
      </div>
    </div>
  );
}
