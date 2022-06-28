import { useRouter } from 'next/router'
import styles from './BannerOpenBootcamper.module.css'

const Banner = () => {

  const router = useRouter()

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
          <p className={styles.description}>Por fín tendrás la educación que mereces para presentarte a las mejores ofertas IT</p>
          <div className={styles.btnsContainer}>
            <button onClick={() => router.push('https://www.open-bootcamp.com/register')} name='startNow'>Empieza ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner