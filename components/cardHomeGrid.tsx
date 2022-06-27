import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import styles from './cardHomeGrid.module.css'
import Image from 'next/image'
import left from '../utils/images/left-arrow.svg'
import right from '../utils/images/right-arrow.svg'
import CardHome from './cardHome';

export const CardHomeGrid = (ofertas: any) => {

  const windowWidth = useWindowSize()
  const router = useRouter()
  const cards: [] = ofertas.ofertas
  cards.sort((a: any, b: any) => a.createdAt < b.createdAt ? 1 : -1)

  const [cardIndex, setCardIndex] = useState(0)
  const [cardLimit, setCardLimit] = useState(4)
  const [totalPages, setTotalPages] = useState(1)
  const [cardsPaginated, setCardsPaginated] = useState<any>([])
  const [animation, setAnimation] = useState(styles.grid)

  const cardIndexForward = () => {
    let numerator = totalPages - 1;
    cardIndex < numerator ? setCardIndex(cardIndex + 1) : setCardIndex(cardIndex)
    setAnimation(styles.gridleft)
    setTimeout(() => setAnimation(styles.grid), 550)
  }

  const cardIndexRewind = () => {
    cardIndex > 0 ? setCardIndex(cardIndex - 1) : setCardIndex(cardIndex)
    setAnimation(styles.gridright)
    setTimeout(() => setAnimation(styles.grid), 550)
  }

  const cardIndexReset = () => { cardIndex > totalPages ? setCardIndex(0) : setCardIndex(cardIndex) }

  const paginateCards = () => {

    if (windowWidth >= 1088) { setCardLimit(4) }
    else if (windowWidth <= 1088 && windowWidth >= 836) { setCardLimit(3) }
    else if (windowWidth <= 836 && windowWidth >= 555) { setCardLimit(2) }
    else { setCardLimit(10) }

    if (Math.ceil(cards.length / cardLimit) === cards.length / cardLimit) {
      setTotalPages((cards.length / cardLimit) + 1)
    } else {
      setTotalPages(Math.ceil(cards.length / cardLimit))
    }

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
        <div className={styles.control}>
          {cardIndex !== 0 ? <button onClick={cardIndexRewind} className={styles.button}><Image src={left} width='20' height='20' /></button> : <button className={styles.buttonInactive}><Image src={left} width='20' height='20' /></button>}
          {cardIndex !== totalPages - 1 ? <button onClick={cardIndexForward} className={styles.button}><Image src={right} width='20' height='20' /></button> : <button className={styles.buttonInactive}><Image src={right} width='20' height='20' /></button>}
        </div></div>
      <div className={styles.container}>
        <div className={animation} id='carousel'>
          {cardsPaginated.map((card: any) => (
            <CardHome nombre={card.nombre} image={'/'} empresa={card.empresa.nombre} ubicacion={card.ubicacion} habilidades={card.habilidades} experiencia={card.experiencia} id={card.id} />
          ))}
          {cardsPaginated.length < cardLimit || cardLimit > 4 ? <div className={styles.see} onClick={() => router.push('/ofertas')}><div className={styles.outercircle}><div className={styles.innercircle}><h1>+</h1></div></div><span>Ver más</span></div> : null}
        </div>

      </div>
    </div>
  )
}

