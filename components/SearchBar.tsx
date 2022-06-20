import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Searcher.module.css";
import searchIcon from "../utils/images/search-24.svg";
import cross from "../utils/images/cross.svg";
import { useState } from "react";
import FilterModal from "./FilterModal";

const SearchBar = (query: any) => {
  const router: any = useRouter();

  const [queryParam, setQueryParam] = useState(query.query);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const setModalShow = (status: boolean) => {
    setIsModalOpen(status)
  }

  const handleSearchInputHome = (e: any): void => {
    e === undefined || e === ""
      ? router.replace("/ofertas")
      : router.replace(`/ofertas/?query=${e}`);
    setQueryParam(e);
  };

  const handleEraseSearch = () => {
    setQueryParam("");
    router.replace("/ofertas");
  };

  const toggleExperience = (e: any) => {
    const node: any = document.querySelector("#experience");
    if (node) {
      const displayValue = node.style.display !== "block" ? "block" : "none";
      hidePopovers();

      const topValue = e.target.offsetTop + 30;
      node.style.setProperty("top", `${topValue}px`);

      node.style.setProperty("display", displayValue);
    }
    setModalShow(true)
  };

  const toggleSalary = (e: any) => {
    const node: any = document.querySelector("#salary");
    if (node) {
      const displayValue = node.style.display !== "flex" ? "flex" : "none";
      hidePopovers();

      const topValue = e.target.offsetTop + 30;
      node.style.setProperty("top", `${topValue}px`);

      node.style.setProperty("display", displayValue);
    }
    setModalShow(true)
  };

  const toggleCity = (e: any) => {
    const node: any = document.querySelector("#city");
    if (node) {
      const displayValue = node.style.display !== "block" ? "block" : "none";
      hidePopovers();

      const topValue = e.target.offsetTop + 30;
      node.style.setProperty("top", `${topValue}px`);

      node.style.setProperty("display", displayValue);
    }
    setModalShow(true)
  };

  const hidePopovers = () => {
    const experienceNode: any = document.querySelector("#experience");
    const salaryNode: any = document.querySelector("#salary");
    const cityNode: any = document.querySelector("#city");
    if (experienceNode) {
      experienceNode.style.setProperty("display", "none");
    }
    if (salaryNode) {
      salaryNode.style.setProperty("display", "none");
    }
    if (cityNode) {
      cityNode.style.setProperty("display", "none");
    }
  };

  return (
    <div className={styles.searcher}>
      <div className={styles.searcherForm}>
        <input
          name="searchBar"
          type="text"
          placeholder="Front End Developer, Madrid"
          className={styles.inputSearch}
          value={queryParam}
          onChange={(e) => handleSearchInputHome(e.target.value)}
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
      <div className={styles.searcherOfertasFilters}>
        <button>Habilidades</button>
        
        <button onClick={(e: any) => toggleSalary(e)}>Salario aprox.</button>

        <button onClick={(e: any) => toggleExperience(e)}>
          Años de experiencia
        </button>

        <button onClick={(e: any) => toggleCity(e)}>Ciudad</button>

        <div className={styles["switch-button"]}>
          <input
            type="checkbox"
            name="switch-button"
            id="switch-label"
            className={styles["switch-button__checkbox"]}
          />{" "}
          <label
            htmlFor="switch-label"
            className={styles["switch-button__label"]}
          ></label>
          <span className={styles.remote}>Remoto</span>
        </div>
      </div>


      {
        isModalOpen ? (
          <FilterModal setIsModalOpen={setModalShow} divId='experience'>
            <button>0-2 años</button>
            <button>3-5 años</button>
            <button>+5 años</button>
          </FilterModal>
        )
        : null
      }

      {/* {
        isModalOpen ? (
          <FilterModal setIsModalOpen={setModalShow} divId='salary'>
            <div>
              <label>Salario mín</label>
              <input type="number" step="500" value="10000" />
            </div>
            <span>&nbsp;-&nbsp;</span>
            <div>
              <label>Salario máx</label>
              <input type="number" step="500" value="45000" />
            </div>
          </FilterModal>
        )
        : null
      }

      {
        isModalOpen ? (
          <FilterModal setIsModalOpen={setModalShow} divId='city'>
              <input type={"text"} />
              <div>
                <button>Madrid</button>
                <button>Barcelona</button>
                <button>Málaga</button>
                <button>Valencia</button>
                <button>Sevilla</button>
              </div>
          </FilterModal>
        )
        : null
      } */}
      
    </div>
  );
};

export default SearchBar;
