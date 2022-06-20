import Image from 'next/image'
import styles from '../../styles/Testimonios.module.css'

export const Testimonios = () => {
    return (
        <div className={styles.testimoniosContainer}>
          <div>
            <div className={styles.testimoniosOpiniones}>
              <div>
                <div className={styles.testimoniosCarousel}>
                  <div>
                    <div>
                      <Image 
                        src='/testimonio1.jpg'
                        width={84}
                        height={84}
                        alt='Testimonio'
                      />
                      <p>María Beatriz Vivanco</p>
                      <p>Software Developer</p>
                    </div>
                    <div>
                      Gracias a OpenBootcamp en 4 meses pude actualizarme y conocer nuevas tecnologías con las que conseguí un trabajo como FullStack en el que estoy muy contenta
                    </div>
                  </div>
                </div>
                <div className={`${styles.testimoniosArrow} ${styles.testimoniosArrowLeft}`}>
                  <span></span>
                  <span></span>
                </div>
                <div className={`${styles.testimoniosArrow} ${styles.testimoniosArrowRight}`}>
                  <span></span>
                  <span></span>
                </div>
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
                  <h3>+30.000&euro;</h3>
                  <h6>Repartidos en recompensas</h6>
                </div>
                <div>
                  <h3>+100</h3>
                  <h6>Recomendaciones diarias</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}