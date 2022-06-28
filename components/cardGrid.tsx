import styles from './cardGrid.module.css'
import Card from './card';
import symbol from '../utils/images/symbol_mock.svg'
import { useEffect, useState } from 'react';
import { Skeleton } from './skeleton';

export const CardGrid = (ofertas: any) => {

  const cards: [] = ofertas.ofertas

  const fields: JSX.Element[] = [];

  for (let i = 1; i <= 12; i++) {
    fields.push(<Skeleton key={i} />);
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [cards])

  return (
    <div className={styles.wrapper}>
      {!isLoading ? <div className={styles.container}>

        {cards.length > 0 ? <div className={styles.grid}>
          {cards.map((card: any) => (
            <Card nombre={card.nombre} image={card.empresa.imagen ? card.empresa.imagen : symbol} empresa={card.empresa.nombre} ubicacion={card.ubicacion} habilidades={card.habilidades} experiencia={card.experiencia} id={card.id} />
          ))}
        </div> : <span>No hemos encontrado resultados que coincidan con tu búsqueda</span>}
      </div> :
        <div className={styles.container}>
          <div className={styles.grid}>
            {fields}
          </div>
        </div>}
    </div>
  )
}

