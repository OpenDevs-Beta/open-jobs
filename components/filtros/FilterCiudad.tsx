import { useRouter } from "next/router"

import styles from "../SearchFilter.module.css"

const FilterCiudad = (query: any) => {

  const router: any = useRouter()

  let question = router.query ? '?' : '';
  let search = router.query.search ? `&search=${router.query.search}` : '';
  let skill = router.query.skill ? `&skill=${router.query.skill}` : '';
  let salarioMin = router.query.salarioMin ? `&salarioMin=${router.query.salarioMin}` : '';
  let salarioMax = router.query.salarioMax ? `&salarioMax=${router.query.salarioMax}` : '';
  let anos = router.query.anos ? `&anos=${router.query.anos}` : '';
  let remote = router.query.remote ? `&remote=${router.query.remote}` : '';

  const handleClick = (filter: string) => {
    router.query.ciudad != filter ? router.query.ciudad = filter : router.query.ciudad = ''
    router.push(router.query.ciudad.length !== 0 ? '/ofertas' + question + search + skill + salarioMin + salarioMax + anos + remote + `&ciudad=${router.query.ciudad}` : '/ofertas' + question + search + skill + salarioMin + salarioMax + anos + remote)
  }

  // TODO: Modificar cuando se tenga la api del back
  return (
    <div id='city' className={styles.filtersPopup}>
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
    </div>
  )
}

export default FilterCiudad