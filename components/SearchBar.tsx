import { useRouter } from 'next/router'
import { useState } from 'react'

import Image from 'next/image'

// import styles from '../styles/Search.module.css'
import styles from '../styles/Searcher.module.css'

import searchIcon from '../utils/images/search-24.svg'

const SearchBar = (query: any) => {

  const router: any = useRouter()

  const queryParam = query.query

  const [searchInputHome, setSearchInputHome] = useState<string>('')

  const handleSearchInputHome = (e: any): void => {
    const text: string = e.target.value
    setSearchInputHome(text)
    if (e.key === 'Enter') {
      handleClickSearchBtn()
    }
  }

  const handleClickSearchBtn = async (): Promise<any> => {
    await fetch('/ofertas', {
      method: 'POST',
      body: searchInputHome
    })

    router.push({
      pathname: '/ofertas',
      query: {
        lookFor: searchInputHome
      }
    })
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
              (e) => handleSearchInputHome(e)
            }
            onKeyDown={
              (e) => e.key === 'Enter' ? handleClickSearchBtn() : null
            }></input>
            <button className={styles.searcherOfertasButton} onClick={handleClickSearchBtn}>
              <Image src={searchIcon}/>
            </button>
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