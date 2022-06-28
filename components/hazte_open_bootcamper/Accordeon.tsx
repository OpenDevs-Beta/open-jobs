import React, { useState } from "react";
import Image from "next/image";
import styles from "./Accordeon.module.css";
import { useRouter } from "next/router";

export default function Accordeon({ items }: { items: any[] }) {
  const router = useRouter();

  const [opened, setOpened] = useState(-1);

  const [elems, setElems] = useState(items);

  const toggleQuestion = (elem: any, index: number) => {
    if (opened === index) {
      return setOpened(-1);
    }
    setOpened(index);
  };

  return (
    <div className={styles["questions-wrapper"]}>
      <div className={styles["main-content"]}>
        <h1 className={styles.title}>Preguntas frecuentes</h1>
      </div>
      <div className={styles["list-wrapper"]}>
        <div className={styles["question-list"]}>
          {elems.map((elem: any, index) => (
            <div
              className={styles["question-item"]}
              onClick={() => toggleQuestion(elem, index)}
            >
              <div
                className={`${styles["question-line"]} ${
                  opened === index ? styles["question-line-special"] : ""
                }`}
              >
                <div className={styles["question-text"]}>{elem.question}</div>
                <button
                  className={`${styles["question-button"]} ${
                    opened === index ? styles["question-button-rotated"] : ""
                  }`}
                >
                  <Image
                    src="/down-svgrepo-com.svg"
                    width={20}
                    height={20}
                  ></Image>
                </button>
              </div>
              <div
                className={`${styles["question-detail"]} ${
                  opened === index
                    ? styles["question-detail-opened"]
                    : styles["question-detail-closed"]
                }`}
              >
                {elem.response}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["button-wrapper"]}>
        <button
          className={styles["view-all-button"]}
          onClick={() => router.push("/preguntas-frecuentes")}
        >
          Ver todas
        </button>
      </div>
    </div>
  );
}
