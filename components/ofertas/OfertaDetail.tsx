import Image from "next/image";
import styles from "./OfertaDetail.module.css";

const OfertaDetail = ({ data }: { data: any }) => {

  const experiencia: string = data.experiencia.toUpperCase()

  const date = new Date(data.createdAt)

  const actualDate = date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDay() + '/' + date.getMonth() + '/' +  date.getFullYear()

  console.log(date)

  return (
    <div className={styles.ofertaDetailContainer}>
      <div className={styles.ofertaDetailLogo}>
        <Image
          // TODO: Aplicar la imagen cuando el backend la mande
          // src={data.empresa.image}
          src="/tstory-1.jpg"
          width={40}
          height={40}
          alt="Logo de la empresa"
        />
        <div>
          <span>{data.empresa.nombre}</span>
          <span>{actualDate}</span>
        </div>
      </div>
      <div className={styles.ofertaDetailTitle}>
        <h4>{data.nombre}</h4>
        <div>
          <span>{data.ubicacion}</span>
          <span>{experiencia}</span>
        </div>
      </div>
      <hr />
      <div>
        <button className={styles["apply-button"]}>
          <div className={styles["apply-button-text"]}>INSCRIBIRME</div>
        </button>
      </div>
      <div className={styles.ofertaDetailDescription}>
        <h6>Descripción:</h6>
        <p>{data.descripcion}</p>
      </div>
    </div>
  );
};

export default OfertaDetail;
