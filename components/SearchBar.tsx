import { useRouter } from 'next/router'
import { useState } from 'react'

import Image from 'next/image'

import styles from './Search.module.css'

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
    await fetch('/jobs', {
      method: 'POST',
      body: searchInputHome
    })

    router.push({
      pathname: '/jobs',
      query: {
        lookFor: searchInputHome
      }
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.Container}>
        <label htmlFor='searchBar' className={styles.label}>
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

          <button className={styles.btnForm}>
            <Image src={searchIcon}/>
          </button>
        </label>
      </div>
    </div>
  )
}

export default SearchBar