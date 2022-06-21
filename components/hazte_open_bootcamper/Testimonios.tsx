import { useState } from 'react'
import { ITestimonio } from '../../shared/models/models.interface'
import styles from '../../styles/Testimonios.module.css'
import { TestimoniosItem } from './TestimoniosItem'

export const Testimonios = ({testimonios}: {testimonios: ITestimonio[]}) => {  

  const [carouselPosition, setCarouselPosition] = useState<number>(0)
  const minCarouselPosition = 0
  const maxCarouselPosition = -((testimonios.length - 1) * 100)

  const handleLeft = () => {
    if(carouselPosition != minCarouselPosition){
      setCarouselPosition(carouselPosition + 100)
    }
  }

  const handleRight = () => {
    if(carouselPosition != maxCarouselPosition){
      setCarouselPosition(carouselPosition - 100)
    }
  }

    return (
        <div className={styles.testimoniosContainer}>
          <div className={styles.testimoniosBox}>
            <div className={styles.testimoniosOpiniones}>
              <div>
                <div className={styles.testimoniosCarousel} style={{transform: "translateX(" + carouselPosition + "%)"}}>
                    {testimonios.map((testimonio: ITestimonio) => (
                      <TestimoniosItem testimonio={testimonio} />
                    ))}
                </div>
                {minCarouselPosition != carouselPosition ? (
                  <div className={`${styles.testimoniosArrow} ${styles.testimoniosArrowLeft}`} onClick={handleLeft}>
                    <span></span>
                    <span></span>
                  </div>
                ) : null }
                {maxCarouselPosition != carouselPosition ? (
                  <div className={`${styles.testimoniosArrow} ${styles.testimoniosArrowRight}`} onClick={handleRight}>
                    <span></span>
                    <span></span>
                  </div>
                ) : null }
              </div>
            </div>
            <hr/>
            <div className={styles.testimoniosData}>
              <p>Y como ellos muchos más</p>
              <div>
                <div>
                  <h3>+1.000</h3>
                  <h6>Recomendadores activos</h6>
                </div>
                <div>
                  <h3>+30.000</h3>
                  <h6>Alumnos inscritos</h6>
                </div>
                <div>
                  <h3>+50</h3>
                  <h6>Cursos a tu disposición</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}