import styles from '../../styles/BeOpenBootcamper.module.css'
import Banner from './Banner'

const HeroOpenBootcamper = () => {
  return (
    <>
      <Banner />

      <div className={styles.sectionHero}>
        <div className={styles.twoColumnGroup}>
          <div className={styles.column}>
            <h4>¿Sabes lo fácil que es ser en Open Bootcamper?</h4>
            <p>Solo tienes que rellenar un pequeño formulario y ¡ya serás de nuestra familia Open Bootcampers!</p>
          </div>

          <div className={styles.column}>
            <h4>Open Bootcampers lo revoluciona todo</h4>
            <p>Tienes a disposición candidatos con perfiles proactivos y de futuro para tu empresa</p>
          </div>
        </div>

        <div className={styles.stepperForOpenBootcamper}>
          <h3 className={styles.titleStepper}>Cómo convertirte en Open Bootcamper</h3>
          <div className={styles.threeStepsBox}>
            <div className={styles.stepContainer}>
              <h5 className={styles.stepTitle}>
                <span className={styles.stepNumber}>01</span>
                Elige la oferta de empleo
              </h5>
              <p className={styles.stepDesc}>
                Y descubre qué personas de tu red encajan con el puesto 
                con el botón «Contactos que podrían encajar».
              </p>
            </div>

            <div className={styles.stepContainer}>
              <h5 className={styles.stepTitle}>
                <span className={styles.stepNumber}>02</span>
                Recomienda a los mejores
              </h5>
              <p className={styles.stepDesc}>
                Elige entre ellos los que mejor encajen, así aumentarás 
                tus posibilidades de ganar la recompensa.
              </p>
            </div>

            <div className={styles.stepContainer}>
              <h5 className={styles.stepTitle}>
                <span className={styles.stepNumber}>03</span>
                Gana la recompensa
              </h5>
              <p className={styles.stepDesc}>
                Cuando uno de tus recomendados sea contratado, cobrarás 
                la recompensa el día de su incorporación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroOpenBootcamper