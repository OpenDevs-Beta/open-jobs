import { useRouter } from "next/router"

import styles from "../../styles/SearchFilter.module.css"

const FilterExperiencia = () => {

  const router: any = useRouter()

  const handleClick = (filter: string) => {
    router.replace("/ofertas/?query=" + filter)
  }

  return (
    <div className={styles.fitlerExperiencia}>
      <div onClick={() => handleClick('')}>
        <span>0-2 años</span>
      </div>
      <div onClick={() => handleClick('')}>
        <span>3-5 años</span>
      </div>
      <div onClick={() => handleClick('')}>
        <span>+5 años</span>
      </div>
    </div>
  )
}

export default FilterExperiencia