import { useRouter } from "next/router"
import { useState } from "react"

import styles from "../../styles/SearchFilter.module.css"

const FilterSalario = () => {

  const router: any = useRouter()
  const [salarioMin, setSalarioMin] = useState<string>('18000')
  const [salarioMax, setSalarioMax] = useState<string>('80000')

  const handleMin = (filter: string) => {
    setSalarioMin(filter)
    router.query.salarioMin = filter
    router.push({ 
      pathname: '/ofertas',
      query: router.query
    })
  }

  const handleMax = (filter: string) => {
    setSalarioMax(filter)
    router.query.salarioMax = filter
    router.push({ 
      pathname: '/ofertas',
      query: router.query
    })
  }

  return (
    <div className={styles.filter}>
      <label>Min:</label>
      <input type="range" min="18000" max="80000" step="1000" onChange={(e) => handleMin(e.target.value)} />
      <output>{salarioMin} &euro;</output>
      <label>Max:</label>
      <input type="range" min="18000" max="80000" step="1000" onChange={(e) => handleMax(e.target.value)} />
      <output>{salarioMax} &euro;</output>
    </div>
  )
}

export default FilterSalario