import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/navBar'
import styles from './empresa.module.css'
import { Footer } from '../components/Footer';

function Empresa() {
    return (
              <div className={styles.empresaContainer}>
          <Navbar />
            <div className={styles.empresaHeader}>
                <div>
                    <div className={styles.empresaHeaderText}>
                        <h3>Encuentra candidatos IT que de otra forma no encontrarías</h3>
                        <p>La única plataforma capaz de alcanzar el talento disponible en la red a través de la distribución inteligente.</p>
                        <Link href='#'>
                            <button>Publicar una oferta</button>
                        </Link>
                    </div>
                    <div className={styles.empresaHeaderGif}>
                        <div>
                            <Image
                                src="/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif"
                                alt="Animación de Open Jobs"
                                width={250}
                                height={250}
                            /> 
                        </div>
                    </div>
                </div>    
            </div>
            <div className={styles.empresaFeatured}>
                <div>
                    <h4>Portal de empleo tradicional</h4>
                    <p>Las ofertas de siempre. Solo los candidatos en búsqueda activa –15% del total– se inscriben en tus ofertas. Por eso sólo pagas la publicación.</p>
                </div>
                <div>
                    <h4>El futuro de los portales <br/> de empleo</h4>
                    <p>Las ofertas inteligentes. El algoritmo hace su trabajo: descubrir y activar el talento, también el pasivo –85% restante–.</p>
                </div>
            </div>
            <div className={styles.empresaContacto}>
                <div>
                    <h4>Un portal de empleo <br/> con la potencia de OpenBootcamp</h4>
                    <p>La revolución de las ofertas de empleo: gracias a la tecnología y las referencias alcanzas a los profesionales que estás buscando.</p>
                </div>
                <div>
                    OPEN JOBS
                </div>
                <div>
                    <div>
                        <h5>Oferta Open Jobs</h5>
                        <span>Oferta dinámica</span>
                        <span>Talento pasivo</span>
                        <span>+ Fuentes captación</span>
                        <Link href='#'>
                            <a>Contacta con nosotros</a>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Empresa