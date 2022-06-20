import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/question.module.css";
import { useRouter } from "next/router";

export default function questions({ items }: { items: any[] }) {
  const [elems, setElems] = useState(items);

  const toggleQuestion = (elem: any, index: number) => {
    if (elem.collapsed === undefined) {
      elem.collapsed = true;
    }

    elem.collapsed = !elem.collapsed;

    const newElems = [...elems];

    newElems[index] = elem;

    setElems(newElems);

    const node: any = document.getElementById(`question-detail-${index}`);
    if (node) {
      const newOpacity = node.style.opacity !== "1" ? "1" : "0";
      const newVisibility =
        node.style.visibility !== "visible" ? "visible" : "hidden";

      const newHeight = node.style.height !== "auto" ? "auto" : "0";

      node.style.setProperty("opacity", newOpacity);
      node.style.setProperty("visibility", newVisibility);
      node.style.setProperty("height", newHeight);
    }
  };

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
          {elems.map((elem: any, index) => (
            <div className={styles["question-item"]}>
              <div className={styles["question-line"]}>
                <div className={styles["question-text"]}>{elem.question}</div>
                <button
                  className={styles["question-button"]}
                  onClick={() => toggleQuestion(elem, index)}
                >
                  {elem.collapsed === false ? (
                    <Image
                      src="/down-svgrepo-com.svg"
                      width={20}
                      height={20}
                    ></Image>
                  ) : (
                    <Image
                      src="/up-svgrepo-com.svg"
                      width={20}
                      height={20}
                    ></Image>
                  )}
                </button>
              </div>
              <div
                id={`question-detail-${index}`}
                className={styles["question-detail"]}
              >
                {elem.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
