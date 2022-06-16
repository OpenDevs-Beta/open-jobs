import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Searcher.module.css'
import searchIcon from '../utils/images/search-24.svg'
import cross from '../utils/images/cross.svg'
import { useState } from 'react'

const SearchBar = (query: any) => {

  const router: any = useRouter()

  const [queryParam, setQueryParam] = useState(query.query)

  const handleSearchInputHome = (e: any): void => {
    e === undefined || e === '' ? router.replace('/ofertas') : router.replace(`/ofertas/?query=${e}`)
    setQueryParam(e)
  }

  const handleEraseSearch = () => {
    setQueryParam('')
    router.replace('/ofertas')
  }

  return (
    <div className={styles.searcher}>
      <div className={styles.searcherForm}>
        <input
            name='searchBar'
            type='text'
            placeholder='Front End Developer, Madrid'
            className={styles.inputSearch}
            value={queryParam}
            onChange={
              (e) => handleSearchInputHome(e.target.value)
            }
            ></input>
            { queryParam === undefined || queryParam === '' ? <button className={styles.searcherOfertasButton}><Image src={searchIcon}/></button> : <button className={styles.searcherOfertasButton} onClick={handleEraseSearch}><Image src={cross} width='15' height='15'/></button>}
      </div>
      <div className={styles.searcherOfertasFilters}>
          <button>Área</button>
          <button>Salario aprox.</button>
          <button>Años de experiencia</button>
          <button>Ciudad</button>
      </div>
    </div>
  )
}

export default SearchBar