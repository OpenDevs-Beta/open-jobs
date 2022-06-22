import Image from "next/image";
import styles from "../../styles/OfertaDetail.module.css";

const OfertaDetail = ({ data }: { data: any }) => {
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
          {console.log(data)}
          <span>{data.empresa.nombre}</span>
          <span>{data.empresa.createdAt}</span>
        </div>
      </div>
      <div className={styles.ofertaDetailTitle}>
        <h4>{data.nombre}</h4>
        <div>
          <span>{data.ubicacion}</span>
          <span>{data.experiencia}</span>
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
