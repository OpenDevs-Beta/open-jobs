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
    <div>
      <Link href={"/ofertas/" + id}>
        <a>
          <div>
            <Image src={image} width={50} height={50}></Image>
          </div>
          <div>{title}</div>
          <div>{companyName}</div>
          <div>{location}</div>
          <div>
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
          <div>{experience}</div>
        </a>
      </Link>
    </div>
  );
}
