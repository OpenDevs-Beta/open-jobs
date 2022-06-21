import Link from 'next/link'
import styles from '../../styles/BannerOpenBootcamper.module.css'

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
            <Link href={'https://www.open-bootcamp.com/register'}><button name='startNow'>Empieza ahora</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner