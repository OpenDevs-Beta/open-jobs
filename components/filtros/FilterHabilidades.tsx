import { useRouter } from "next/router"

import styles from "../../styles/SearchFilter.module.css"

const FilterHabilidades = () => {

  const router: any = useRouter()

  const handleClick = (filter: string) => {
    router.replace("/ofertas/?query=" + filter)
  }

  return (
    <div className={styles.filterHabilidades}>
      <div>
        <span onClick={() => handleClick('development')}>Development</span>
      </div>
      <div>
        <span onClick={() => handleClick('data')}>Data</span>
      </div>
      <div>
        <span onClick={() => handleClick('sysops and cybersecurity')}>SysOps and Cybersecurity</span>
      </div>
      <div>
        <span onClick={() => handleClick('quality assurance')}>Quality Assurance</span>
      </div>
      <div>
        <span onClick={() => handleClick('digital product')}>Digital Product</span>
      </div>
    </div>
  )
}

export default FilterHabilidades