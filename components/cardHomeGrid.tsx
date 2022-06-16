import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import styles from '../styles/cardHomeGrid.module.css'
import Image from 'next/image'
import left from '../utils/images/left-arrow.svg'
import right from '../utils/images/right-arrow.svg'
import Card from './card';

export const CardHomeGrid = (ofertas: any) => {

  const windowWidth = useWindowSize()
  const router = useRouter()
  const cards: [] = ofertas.ofertas
  cards.sort((a: any, b: any) => a.createdAt < b.createdAt ? 1 : -1)

  const [cardIndex, setCardIndex] = useState(0)
  const [cardLimit, setCardLimit] = useState(4)
  const [totalPages, setTotalPages] = useState(1)
  const [cardsPaginated, setCardsPaginated] = useState<any>([])

  const cardIndexForward = () => {
    let numerator = totalPages - 1;
    cardIndex < numerator ? setCardIndex(cardIndex + 1) : setCardIndex(cardIndex)
  }

  const cardIndexRewind = () => { cardIndex > 0 ? setCardIndex(cardIndex - 1) : setCardIndex(cardIndex) }

  const cardIndexReset = () => { cardsPaginated.length === 0 ? setCardIndex(totalPages - 1) : setCardIndex(cardIndex) }

  const paginateCards = () => {

    if (windowWidth >= 948) { setCardLimit(4) }
    else if (windowWidth <= 948 && windowWidth >= 717) { setCardLimit(3) }
    else if (windowWidth <= 717 && windowWidth >= 486) { setCardLimit(2) }
    else { setCardLimit(1) }

    setTotalPages(Math.ceil(cards.length / cardLimit))

    let firstOperator = cardIndex * cardLimit
    let secondOperator = firstOperator + cardLimit

    setCardsPaginated(cards.slice(firstOperator, secondOperator))
  }

  useEffect(() => {
    paginateCards()
    cardIndexReset()
  }, [windowWidth, cardIndex])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}><div><span>Últimas ofertas</span><span className={styles.link} onClick={() => router.push('/ofertas')}>Ver todas</span></div>
        <div className={styles.control}><button onClick={cardIndexRewind}><Image src={left} width='20' height='20' /></button><button onClick={cardIndexForward}><Image src={right} width='20' height='20' /></button></div></div>
      <div className={styles.container}>
        <div className={styles.controlSmall}><button onClick={cardIndexRewind}><Image src={left} width='20' height='20' /></button><button onClick={cardIndexForward}><Image src={right} width='20' height='20' /></button></div>
        <div className={styles.grid}>
          {cardsPaginated.map((card: any) => (
            <Card nombre={card.nombre} image={'/'} empresa={card.empresa.nombre} ubicacion={card.ubicacion} habilidades={card.habilidades} experiencia={card.experiencia} id={card.id} />
          ))}
        </div>

      </div>
    </div>
  )
}

