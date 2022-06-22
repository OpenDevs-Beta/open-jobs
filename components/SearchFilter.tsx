import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/SearchFilter.module.css"
import FilterCiudad from "./filtros/FilterCiudad"
import FilterExperiencia from "./filtros/FilterExperiencia"
import FilterHabilidades from "./filtros/FilterHabilidades"
import FilterSalario from "./filtros/FilterSalario"

const SearchFilter = () => {

  const router: any = useRouter()

  const [filter, setFilter] = useState<JSX.Element | undefined>(undefined)
  const handleFilter = (filter: JSX.Element) => { setFilter(filter) }

  const handleClick = (filter: boolean) => {
    router.query.remote = filter
    router.push({ pathname: '/ofertas', query: router.query })
  }

  const handleEraseSearch = () => {
    router.push("/ofertas")
  }

  return (
    <div className={styles.searcherOfertasFilters}>
      <button onClick={() => handleFilter(<FilterHabilidades />)}>Habilidades</button>
      <button onClick={() => handleFilter(<FilterSalario />)}>Salario aprox.</button>
      <button onClick={() => handleFilter(<FilterExperiencia />)}>Años de experiencia</button>
      <button onClick={() => handleFilter(<FilterCiudad />)}>Ciudad</button>
      <div className={styles.switchButton} >
        { router.query.remote == "true" ? 
          ( <input type="checkbox" id="switch-label" onClick={() => handleClick(false)} checked /> )
          :
          ( <input type="checkbox" id="switch-label" onClick={() => handleClick(true)}  /> )
        }
        <label htmlFor="switch-label" />
        <span>Remoto</span>
      </div>
      <button onClick={handleEraseSearch} >
        <Image src="/cross.svg" width="15" height="15"/>
      </button>
      <div className={styles.filtersPopup}>
        { filter }
      </div>
  </div>
  )
}

export default SearchFilter