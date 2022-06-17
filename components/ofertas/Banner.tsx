import Image from 'next/image'

import styles from '../../styles/Banner.module.css'

const DivBanner = ({ imgSrc }: any) => {

  return (
    <div className={styles.banner}>
      <picture>
        <img
          src='/banner.jpg'
          width={2560}
          height={1440}
          alt="Mano sosteniendo movil con efectos de colores"
        />
      </picture>
    </div>
  )
}

export default DivBanner