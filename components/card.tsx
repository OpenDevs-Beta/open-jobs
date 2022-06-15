import styles from "../styles/card.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  nombre,
  image,
  empresa,
  ubicacion,
  habilidades,
  experiencia,
  id,
}: {
  nombre: string;
  image: string;
  empresa: string;
  ubicacion: string;
  habilidades: string[];
  experiencia: string;
  id: string;
}) {
  return (
    <div className={styles.card}>
      <Link href={"/ofertas/" + id}>
        <a>
          <div>
            <Image
              className={styles["card-image"]}
              src={image}
              width={64}
              height={64}
            ></Image>
          </div>
          <div className={styles["card-title"]}>{nombre}</div>
          <div className={styles["card-inline"]}>
            <div className={styles["card-companyName"]}>{empresa}</div>
            <div>&nbsp;·&nbsp;</div>
            <div className={styles["card-location"]}>{ubicacion}</div>
          </div>
          <div className={styles["card-tags"]}>
            {habilidades ? habilidades.map((habilidad: string) => (
              <span>{habilidad}</span>
            )) : null}
          </div>
          <div className={styles["card-experience"]}>{experiencia}</div>
        </a>
      </Link>
    </div>
  );
}
