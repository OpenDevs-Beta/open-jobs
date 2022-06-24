import styles from './BeOpenBootcamper.module.css'
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
                Entra en nuestro campus
              </h5>
              <p className={styles.stepDesc}>
                Y descubre que cursos puedes aprender.
              </p>
            </div>

            <div className={styles.stepContainer}>
              <h5 className={styles.stepTitle}>
                <span className={styles.stepNumber}>02</span>
                Aprende
              </h5>
              <p className={styles.stepDesc}>
                Elige entre ellos los que mejor encajen contigo.
              </p>
            </div>

            <div className={styles.stepContainer}>
              <h5 className={styles.stepTitle}>
                <span className={styles.stepNumber}>03</span>
                Presentate a nuestras ofertas
              </h5>
              <p className={styles.stepDesc}>
                Consigue un trabajo así de facil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroOpenBootcamper