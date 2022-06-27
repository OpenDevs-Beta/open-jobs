import React, { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "./SearchFilter.module.css"
import FilterCiudad from "./filtros/FilterCiudad"
import FilterExperiencia from "./filtros/FilterExperiencia"
import FilterHabilidades from "./filtros/FilterHabilidades"
import FilterSalario from "./filtros/FilterSalario"
import useOutsideClick from "../utils/hooks/useOutsideClick"
import dynamic from "next/dynamic"

const DynamicFilterCiudad = dynamic(() => import('./filtros/FilterCiudad'), {
  loading: () => <FilterCiudad />
})

const DynamicFilterExperiencia = dynamic(() => import('./filtros/FilterExperiencia'), {
  loading: () => <FilterExperiencia />
})

const DynamicFilterHabilidades = dynamic(() => import('./filtros/FilterHabilidades'), {
  loading: () => <FilterHabilidades />
})

const DynamicFilterSalario = dynamic(() => import('./filtros/FilterSalario'), {
  loading: () => <FilterSalario />
})

const SearchFilter = () => {

  const router: any = useRouter()
  const filtersPopup = useRef<HTMLHeadingElement>(null)

  const [filter, setFilter] = useState<JSX.Element | undefined>(undefined)
  const handleFilter = (filter: JSX.Element) => { setFilter(filter) }

  const handleClick = (filter: boolean) => {
    router.query.remote = filter
    router.push({ pathname: '/ofertas', query: router.query })
  }

  const handleEraseSearch = () => {
    router.push("/ofertas")
  }

  useOutsideClick(filtersPopup, () => {
    filter ? setFilter(undefined) : null
  })

  return (
    <div className={styles.searcherOfertasFilters} ref={filtersPopup}>
      {router.query.skill ? <button className={styles.filterSelected} onClick={() => handleFilter(<DynamicFilterHabilidades />)}>Habilidades</button> : <button onClick={() => handleFilter(<DynamicFilterHabilidades />)}>Habilidades</button>}
      {router.query.salarioMin || router.query.salarioMax? <button className={styles.filterSelected} onClick={() => handleFilter(<DynamicFilterSalario />)}>Salario aprox.</button> : <button onClick={() => handleFilter(<DynamicFilterSalario />)}>Salario aprox.</button>}
      {router.query.anos ? <button className={styles.filterSelected} onClick={() => handleFilter(<DynamicFilterExperiencia />)}>Años de experiencia</button> : <button onClick={() => handleFilter(<DynamicFilterExperiencia />)}>Años de experiencia</button>}
      {router.query.ciudad ? <button className={styles.filterSelected} onClick={() => handleFilter(<DynamicFilterCiudad />)}>Ciudad</button> : <button onClick={() => handleFilter(<DynamicFilterCiudad />)}>Ciudad</button>}
      <div className={styles.switchButton} >
        { router.query.remote == "true" ? 
          ( <input type="checkbox" id="switch-label" onClick={() => handleClick(false)} checked /> )
          :
          ( <input type="checkbox" id="switch-label" onClick={() => handleClick(true)}  /> )
        }
        <label htmlFor="switch-label" />
        <span>Remoto</span>
      </div>
      <button onClick={handleEraseSearch} className={styles.crossButton} >
        <Image src="/cross.svg" width="12" height="12"/>
      </button>
      <div className={styles.filtersPopup}>
        { filter }
      </div>
  </div>
  )
}

export default SearchFilter