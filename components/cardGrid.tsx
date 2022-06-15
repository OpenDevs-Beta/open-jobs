import styles from './cardGrid.module.css'
import Card from './card';

export const CardGrid = (ofertas: any) => {

  const cards: [] = ofertas.ofertas

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card: any) => (
            <Card nombre={card.nombre} image={'/'} empresa={card.empresa.nombre} ubicacion={card.ubicacion} habilidades={card.habilidades} experiencia={card.experiencia} id={card.id} />
          ))}
        </div>

      </div>
    </div>
  )
}

