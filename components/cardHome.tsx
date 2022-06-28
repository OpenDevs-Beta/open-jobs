import styles from "./cardHome.module.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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

export default function Card({
  nombre,
  image,
  empresa,
  ubicacion,
  habilidades,
  experiencia,
  id,
}: ICard) {

const router = useRouter()

  return (
    <div className={styles.card} onClick={() => router.push("/ofertas/" + id)}>
          <div>
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
          </div><div>
            <div className={styles["card-experience"]}>{experiencia.toUpperCase()}</div>
            <div className={styles["card-tags"]}>
              {habilidades ? habilidades.map((habilidad: ISkill) => (
                <span>{habilidad.nombre}</span>
              )) : null}
            </div>
          </div>
    </div>
  );
}
