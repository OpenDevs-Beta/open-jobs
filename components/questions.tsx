import React from "react";
import Image from "next/image";
import styles from "../styles/question.module.css";
import { useRouter } from "next/router";

export default function questions(questions: any) {

  const questionsDelivered: [] = questions.questions

  const router = useRouter();

  const queryParam = router.query.query;

  return (
    <div className={styles["questions-wrapper"]}>
      <div className={styles["main-content"]}>
        <div className={styles["main-image-wrapper"]}>
          <Image src="/question.png" width={48} height={48} />
        </div>
        <div>
          <h1 className={styles.title}>FAQ</h1>
          <p className={styles.description}>
            Las preguntas más comunes de nuestros usuarios
          </p>
        </div>
      </div>
      <div className={styles["list-wrapper"]}>
        {queryParam === "" || queryParam === undefined ? (
          <div className={styles.title}>Recomendadores</div>
        ) : null}
        <div className={styles["question-list"]}>
          {questionsDelivered.map((item: any) => (
            <div className={styles["question-item"]}>
              <div className={styles["question-text"]}>{item.question}</div>
              <div className={styles["question-response"]}>{item.response}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
