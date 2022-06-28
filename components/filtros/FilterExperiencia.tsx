import { useRouter } from "next/router"

import styles from "../SearchFilter.module.css"

const FilterExperiencia = () => {

  const router: any = useRouter()

  let question = router.query ? '?' : '';
  let search = router.query.search ? `&search=${router.query.search}` : '';
  let skill = router.query.skill ? `&skill=${router.query.skill}` : '';
  let salarioMin = router.query.salarioMin ? `&salarioMin=${router.query.salarioMin}` : '';
  let salarioMax = router.query.salarioMax ? `&salarioMax=${router.query.salarioMax}` : '';
  let ciudad = router.query.ciudad ? `&ciudad=${router.query.ciudad}` : '';
  let remote = router.query.remote ? `&remote=${router.query.remote}` : '';

  const handleClick = (filter: string) => {
    router.query.anos != filter ? router.query.anos = filter : router.query.anos = ''
    router.push(router.query.anos.length !== 0 ? '/ofertas' + question + search + skill + salarioMin + salarioMax + ciudad + remote + `&anos=${router.query.anos}` : '/ofertas' + question + search + skill + salarioMin + salarioMax + ciudad + remote)
  }

  // TODO: Modificar cuando se tenga la api del back
  return (
    <div id='experience' className={styles.filtersPopup}>
      <div className={styles.filter}>
        <div onClick={() => handleClick('junior')}>
          {  router.query.anos == 'junior' ? 
            (<span className={styles.selected}>0-2 años</span>)
          :
            (<span>0-2 años</span>)
          }
        </div>
        <div onClick={() => handleClick('semisenior')}>
          {  router.query.anos == 'semisenior' ? 
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
    </div>
  )
}

export default FilterExperiencia