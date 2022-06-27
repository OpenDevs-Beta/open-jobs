import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./QuestionSearcher.module.css";
import searchIcon from "../utils/images/search-24.svg";
import cross from "../utils/images/cross.svg";
import { useState } from "react";

import logoWhite from '../utils/images/logo_mock_white.svg'

const QuestionSearcher = () => {

  const router: any = useRouter();

  const [queryParam, setQueryParam] = useState(router.query.query);

  const handleSearchInputHome = (e: any): void => {
    e === undefined || e === ""
      ? router.replace("/preguntas-frecuentes")
      : router.replace(`/preguntas-frecuentes/?query=${e}`);
    setQueryParam(e);
  };

  const handleEraseSearch = () => {
    setQueryParam("");
    router.replace("/preguntas-frecuentes");
  };

  return (
    <div className={styles.searcher}>
      <div className={styles.headerLogo}>
          <Image src={logoWhite} onClick={() => router.push('/')}/>
      </div>
      <div className={styles.searcherForm}>
        <input
          name="searchBar"
          type="text"
          placeholder="Buscar respuestas..."
          className={styles.inputSearch}
          value={queryParam}
          onChange={(e) => handleSearchInputHome(e.target.value)}
        ></input>
        {queryParam === undefined || queryParam === "" ? (
          <button className={styles.searcherOfertasButton}>
            <Image src={searchIcon} onClick={() => router.push('/preguntas-frecuentes')} />
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
    </div>
  );
};

export default QuestionSearcher;
