import { useState } from "react"
import styles from "../styles/SearchFilter.module.css"
import FilterCiudad from "./filtros/FilterCiudad"
import FilterExperiencia from "./filtros/FilterExperiencia"
import FilterHabilidades from "./filtros/FilterHabilidades"
import FilterSalario from "./filtros/FilterSalario"

const SearchFilter = () => {

  const [filter, setFilter] = useState<JSX.Element | undefined>(undefined)
  const handleFilter = (filter: JSX.Element) => { setFilter(filter) }

  return (
    <div className={styles.searcherOfertasFilters}>
      <button onClick={() => handleFilter(<FilterHabilidades />)}>Habilidades</button>
      <button onClick={() => handleFilter(<FilterSalario />)}>Salario aprox.</button>
      <button onClick={() => handleFilter(<FilterExperiencia />)}>Años de experiencia</button>
      <button onClick={() => handleFilter(<FilterCiudad />)}>Ciudad</button>
      <div className={styles.switchButton}>
        <input type="checkbox" id="switch-label" />
        <label htmlFor="switch-label" />
        <span>Remoto</span>
      </div>
      <div className={styles.filtersPopup}>
        { filter }
      </div>
  </div>
  )
}

export default SearchFilter