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

  let question = router.query ? '?' : '';
  let search = router.query.search ? `&search=${router.query.search}` : '';
  let skill = router.query.skill ? `&skill=${router.query.skill}` : '';
  let salarioMin = router.query.salarioMin ? `&salarioMin=${router.query.salarioMin}` : '';
  let salarioMax = router.query.salarioMax ? `&salarioMax=${router.query.salarioMax}` : '';
  let anos = router.query.anos ? `&anos=${router.query.anos}` : '';
  let ciudad = router.query.ciudad ? `&ciudad=${router.query.ciudad}` : '';

  const [filter, setFilter] = useState<JSX.Element | undefined>(undefined)

  const handleFilter = (filter: JSX.Element) => { setFilter(filter) }

  const handleClick = (filter: boolean) => {
    router.query.remote = filter
    router.push('/ofertas' + question + search + skill + salarioMin + salarioMax + anos + ciudad + `&remote=${router.query.remote}`)
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
      {router.query.anos ? <button className={styles.filterSelected} onClick={() => handleFilter(<DynamicFilterExperiencia />)}>A??os de experiencia</button> : <button onClick={() => handleFilter(<DynamicFilterExperiencia />)}>A??os de experiencia</button>}
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

      {/* Filter Popup */}
      { filter }
  </div>
  )
}

export default SearchFilter