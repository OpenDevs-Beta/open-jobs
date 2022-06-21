import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Accordeon.module.css";
import { useRouter } from "next/router";
import preguntasFrecuentes from "../../pages/preguntas-frecuentes";

export default function Accordeon({ items }: { items: any[] }) {

  const router = useRouter();

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

  return (
    <div className={styles["questions-wrapper"]}>
      <div className={styles["main-content"]}>
        <h1 className={styles.title}>Preguntas frecuentes</h1>
      </div>
      <div className={styles["list-wrapper"]}>
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
