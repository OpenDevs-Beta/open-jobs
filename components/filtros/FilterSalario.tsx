import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import styles from "../SearchFilter.module.css"

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

  useEffect(() => {
if(router.query.salarioMin === '' || router.query.salarioMin === undefined) {
  setSalarioMin('18000')
} else {
  setSalarioMin(router.query.salarioMin)
}

if(router.query.salarioMax === '' || router.query.salarioMax === undefined) {
  setSalarioMax('80000')
} else {
  setSalarioMax(router.query.salarioMax)
}
  }, [router])
  

  return (
    <div id='salary' className={styles.filtersPopup}>
      <div className={styles.filter}>
        <label>Min:</label>
        <input type="range" min="18000" max="80000" value={salarioMin} step="1000" onChange={(e) => handleMin(e.target.value)} />
        <output>{salarioMin} &euro;</output>
        <label>Max:</label>
        <input type="range" min="18000" max="80000" value={salarioMax} step="1000" onChange={(e) => handleMax(e.target.value)} />
        <output>{salarioMax} &euro;</output>
      </div>
    </div>
  )
}

export default FilterSalario