import styles from "./card.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  image,
  companyName,
  location,
  tags,
  experience,
  id,
}: {
  title: string;
  image: string;
  companyName: string;
  location: string;
  tags: string[];
  experience: string;
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
          <div className={styles["card-title"]}>{title}</div>
          <div className={styles["card-inline"]}>
            <div className={styles["card-companyName"]}>{companyName}</div>
            <div>&nbsp;·&nbsp;</div>
            <div className={styles["card-location"]}>{location}</div>
          </div>
          <div className={styles["card-tags"]}>
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
          <div className={styles["card-experience"]}>{experience}</div>
        </a>
      </Link>
    </div>
  );
}
