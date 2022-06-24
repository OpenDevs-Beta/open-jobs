import { useRouter } from "next/router"

import styles from "../SearchFilter.module.css"

const FilterExperiencia = () => {

  const router: any = useRouter()

  const handleClick = (filter: string) => {
    router.query.anos != filter ? router.query.anos = filter : router.query.anos = ''
    router.push({ 
      pathname: '/ofertas',
      query: router.query
    })
  }

  // TODO: Modificar cuando se tenga la api del back
  return (
    <div className={styles.filter}>
      <div onClick={() => handleClick('junior')}>
        {  router.query.anos == 'junior' ? 
          (<span className={styles.selected}>0-2 años</span>)
        :
          (<span>0-2 años</span>)
        }
      </div>
      <div onClick={() => handleClick('semisenior')}>
        {  router.query.anos == 'senior' ? 
          (<span className={styles.selected}>3-5 años</span>)
        :
          (<span>3-5 años</span>)
        }
      </div>
      <div onClick={() => handleClick('senior')}>
        {  router.query.anos == 'senior' ? 
          (<span className={styles.selected}>+5 años</span>)
        :
          (<span>+5 años</span>)
        }
      </div>
    </div>
  )
}

export default FilterExperiencia