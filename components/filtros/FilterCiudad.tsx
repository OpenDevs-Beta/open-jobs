import { useRouter } from "next/router"

import styles from "../../styles/SearchFilter.module.css"

const FilterCiudad = (query: any) => {

  const router: any = useRouter()

  const handleClick = (filter: string) => {
    router.replace("/ofertas/?ciudad=" + filter)
  }

  return (
    <div className={styles.filterCiudad}>
      <input placeholder="Madrid..." onChange={(e) => handleClick(e.target.value)} />
      <div>
        <span onClick={() => handleClick('madrid')}>Madrid</span>
      </div>
      <div>
        <span onClick={() => handleClick('barcelona')}>Barcelona</span>
      </div>
      <div>
        <span onClick={() => handleClick('malaga')}>Málaga</span>
      </div>
      <div>
        <span onClick={() => handleClick('valencia')}>Valencia</span>
      </div>
      <div>
        <span onClick={() => handleClick('alicante')}>Alicante</span>
      </div>
    </div>
  )
}

export default FilterCiudad