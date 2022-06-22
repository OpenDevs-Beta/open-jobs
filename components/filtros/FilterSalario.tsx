import { useRouter } from "next/router"
import { useState } from "react"

import styles from "../../styles/SearchFilter.module.css"

const FilterSalario = () => {

  const router: any = useRouter()
  const [salario, setSalario] = useState<string>('18000')

  const handleClick = (filter: string) => {
    setSalario(filter)
    router.replace("/ofertas/?salario=" + filter)
  }

  return (
    <div className={styles.filterSalario}>
      <input type="range" min="18000" max="80000" step="1000" onChange={(e) => handleClick(e.target.value)} />
      <output>{salario} &euro;</output>
    </div>
  )
}

export default FilterSalario