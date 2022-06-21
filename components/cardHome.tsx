import styles from "../styles/cardHome.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ICard = {
  nombre: string,
  image: string,
  empresa: string,
  ubicacion: string,
  habilidades: ISkill[],
  experiencia: string,
  id: number
}

type ISkill = {
  nombre: string,
}

export default function CardHome({
  nombre,
  image,
  empresa,
  ubicacion,
  habilidades,
  experiencia,
  id,
}: ICard) {
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
            {habilidades ? habilidades.map((habilidad: ISkill) => (
              <span>{habilidad.nombre}</span>
            )) : null}
          </div>
          <div className={styles["card-experience"]}>{experiencia}</div>
        </a>
      </Link>
    </div>
  );
}
