import React, { useState } from "react";
import Image from "next/image";
import styles from "./Accordeon.module.css";
import { useRouter } from "next/router";

export default function Accordeon({ items }: { items: any[] }) {
  const router = useRouter();

  const [elems, setElems] = useState(items);

  function rotate(node: any) {
    let value: number = 180;
    if (node.style.webkitTransform === "rotate(180deg)") {
      value = 0;
    }

    node.style.webkitTransform = "rotate(" + value + "deg)";
    node.style.msTransform = "rotate(" + value + "deg)";
    node.style.transform = "rotate(" + value + "deg)";
  }

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

    const height: any = document.getElementById(`question-item-${index}`);

    const lineHeight: any = document.getElementById(`question-line-${index}`);

    if (lineHeight) {
      const newHeight = lineHeight.style.height !== "30px" ? "30px" : "18px";
      lineHeight.style.setProperty("height", newHeight);
    }

    const buttonNode: any = document.getElementById(`question-button-${index}`);

    rotate(buttonNode);
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
              <div
                className={styles["question-line"]}
                id={`question-line-${index}`}
              >
                <div className={styles["question-text"]}>{elem.question}</div>
                <button
                  id={`question-button-${index}`}
                  className={styles["question-button"]}
                  onClick={() => toggleQuestion(elem, index)}
                >
                  <Image
                    src="/down-svgrepo-com.svg"
                    width={20}
                    height={20}
                  ></Image>
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
