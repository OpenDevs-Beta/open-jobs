import { useRouter } from "next/router"

import styles from "../SearchFilter.module.css"

const FilterCiudad = (query: any) => {

  const router: any = useRouter()

  const handleClick = (filter: string) => {
    router.query.ciudad != filter ? router.query.ciudad = filter : router.query.ciudad = ''
    router.push({ 
      pathname: '/ofertas',
      query: router.query
    })
  }

  // TODO: Modificar cuando se tenga la api del back
  return (
    <div className={styles.filter}>
      <input type="text" placeholder="Madrid..." onChange={(e) => handleClick(e.target.value)} />
      <div onClick={() => handleClick('madrid')}>
        {  router.query.ciudad == 'madrid' ? 
          (<span className={styles.selected}>Madrid</span>)
        :
          (<span>Madrid</span>)
        }
      </div>
      <div onClick={() => handleClick('barcelona')}>
        {  router.query.ciudad == 'barcelona' ? 
          (<span className={styles.selected}>Barcelona</span>)
        :
          (<span>Barcelona</span>)
        }
      </div>
      <div onClick={() => handleClick('malaga')}>
        {  router.query.ciudad == 'malaga' ? 
          (<span className={styles.selected}>Málaga</span>)
        :
          (<span>Málaga</span>)
        }
      </div>
      <div onClick={() => handleClick('valencia')}>
        {  router.query.ciudad == 'valencia' ? 
          (<span className={styles.selected}>Valencia</span>)
        :
          (<span>Valencia</span>)
        }
      </div>
      <div onClick={() => handleClick('alicante')}>
        {  router.query.ciudad == 'alicante' ? 
          (<span className={styles.selected}>Alicante</span>)
        :
          (<span>Alicante</span>)
        }
      </div>
    </div>
  )
}

export default FilterCiudad