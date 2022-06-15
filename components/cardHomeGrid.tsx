import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../shared/hooks/useWindowSize';
import styles from '../styles/cardHomeGrid.module.css'
import left from '../utils/images/left-arrow.svg'
import right from '../utils/images/right-arrow.svg'
import Card from './card';

export const CardHomeGrid = (ofertas: any) => {

  const windowWidth = useWindowSize()

  // Mock info para comprobar que funciona
  const gridData = {
    title: 'Últimas ofertas',
    allLink: '#',
 }

 const cards: [] = ofertas.ofertas

  const extractCards = cards
 
  const [cardIndex, setCardIndex] = useState(0)
  const [cardLimit, setCardLimit] = useState(4)
  const [totalPages, setTotalPages] = useState(1)
  const [cardsPaginated, setCardsPaginated] = useState<any>([])

  const cardIndexForward = () => {
    let numerator = totalPages - 1;
    cardIndex < numerator ? setCardIndex(cardIndex + 1) : setCardIndex(cardIndex)
  }

  const cardIndexRewind = () => {
    cardIndex > 0 ? setCardIndex(cardIndex - 1) : setCardIndex(cardIndex)
  }

  const cardIndexReset = () => {
    if (cardsPaginated.length < 1) {
      setCardIndex(Math.ceil(extractCards.length / cardLimit) - 1)
    }
  }

  const paginateCards = () => {
    if (windowWidth > 925) { setCardLimit(4) }
    else if (windowWidth < 925 && windowWidth > 693) { setCardLimit(3) }
    else if (windowWidth < 694 && windowWidth > 461) { setCardLimit(2) }
    else { setCardLimit(1) }

    setTotalPages(Math.ceil(extractCards.length / cardLimit))

    let firstOperator = cardIndex * cardLimit
    let secondOperator = firstOperator + cardLimit

    setCardsPaginated(extractCards.slice(firstOperator, secondOperator))

    // console.log(windowWidth)
    // console.log(cardIndex, cardLimit)

  }

  useEffect(() => {
    paginateCards()
    cardIndexReset()
  }, [cardIndex, windowWidth])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}><div><span>{gridData.title}</span><Link href={gridData.allLink}>Ver todas</Link></div>
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

