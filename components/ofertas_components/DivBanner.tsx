import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Ofertas.module.css'

import divBannerImg from '../../utils/images/banner.jpg'

const DivBanner = ({ imgSrc }: any): JSX.Element => {

  const [bannerImg, setBannerImg] = useState<any>(imgSrc)

  return (
    <div className={ styles.imgWrapper }>
      <div className={ styles.coverBackground }></div>
      <Image
        objectPosition='center'
        objectFit='cover'
        src={ bannerImg || divBannerImg }
        height={300}
        alt="cover image"
      ></Image>
    </div>
  )
}

export default DivBanner