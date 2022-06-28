import { useRouter } from "next/router";
import Image from "next/image";
import searchIcon from "../utils/images/search-24.svg";
import cross from "../utils/images/cross.svg";
import { useState } from "react";
import SearchFilter from "./SearchFilter";

import styles from "./Searcher.module.css";

const SearchBar = () => {
  const router: any = useRouter()

  let question = router.query ? '?' : '';
  let skill = router.query.skill ? `&skill=${router.query.skill}` : '';
  let salarioMin = router.query.salarioMin ? `&salarioMin=${router.query.salarioMin}` : '';
  let salarioMax = router.query.salarioMax ? `&salarioMax=${router.query.salarioMax}` : '';
  let anos = router.query.anos ? `&anos=${router.query.anos}` : '';
  let remote = router.query.remote ? `&remote=${router.query.remote}` : '';
  let ciudad = router.query.ciudad ? `&ciudad=${router.query.ciudad}` : '';

  const [queryParam, setQueryParam] = useState(router.query.search)

  const handleSearchInput = (e: any): void => {
    e === undefined || e === ""
      ? router.replace('/ofertas' + question + skill + salarioMin + salarioMax + anos + ciudad + remote)
      : router.replace(`/ofertas/?search=${e}` + skill + salarioMin + salarioMax + anos + ciudad + remote)
    setQueryParam(e)
  }

  const handleEraseSearch = () => {
    setQueryParam("")
    router.replace("/ofertas")
  }

  return (
    <div className={styles.searcher}>
      <div className={styles.searcherForm}>
        <input
          name="searchBar"
          type="text"
          placeholder="Front End Developer, Madrid"
          className={styles.inputSearch}
          value={queryParam}
          onChange={(e) => handleSearchInput(e.target.value)}
        ></input>
        {queryParam === undefined || queryParam === "" ? (
          <button className={styles.searcherOfertasButton}>
            <Image src={searchIcon} />
          </button>
        ) : (
          <button
            className={styles.crossOfertasButton}
            onClick={handleEraseSearch}
          >
            <Image src={cross} width="15" height="15" />
          </button>
        )}
      </div>
      <SearchFilter />
    </div>
  )
}

export default SearchBar;
