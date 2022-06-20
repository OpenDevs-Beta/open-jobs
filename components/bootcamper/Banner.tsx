import Image from 'next/image'
import styles from '../../styles/BannerOpenBootcamper.module.css'
import playBtn from '../../utils/images/play-btn.svg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <picture>
        <img
          src='/bannerOpenBootcamper.jpg'
          width={2560}
          height={1440}
          alt="Mano sosteniendo movil con efectos de colores"
        />
      </picture>
      <div className={styles.bannerTitleBox}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Hazte Open Bootcamper</h1>
          <p className={styles.description}>Por fin tendrás la recompensa que te mereces por recomendar al mejor talento</p>
          <div className={styles.btnsContainer}>
            <button name='startNow'>Empieza ahora</button>
            <button name='howItWorks'><span><Image width={20} height={20} src={playBtn}></Image></span> Cómo funciona</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner