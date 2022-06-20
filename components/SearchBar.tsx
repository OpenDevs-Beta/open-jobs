import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Searcher.module.css";
import searchIcon from "../utils/images/search-24.svg";
import cross from "../utils/images/cross.svg";
import { useEffect, useState } from "react";

const SearchBar = (query: any) => {
  const router: any = useRouter();

  const [queryParam, setQueryParam] = useState(query.query);

  useEffect(() => {
    var input = document.querySelector("input[type=range]");
    actualizarInput(input);

    if (input) {
      input.addEventListener("input", function (evt) {
        actualizarInput(input);
      });
    }
  }, []);

  function actualizarInput(input: any) {
    var inputMin = input.getAttribute("min");
    var inputMax = input.getAttribute("max");
    var unidad = (inputMax - inputMin) / 100;
    input.style.setProperty("--value", (input.value - inputMin) / unidad);
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
      const newValue = node.style.display !== "block" ? "block" : "none";
      hidePopovers();
      node.style.setProperty("display", newValue);
    }
  };
  const toggleSalary = (e: any) => {
    const node: any = document.querySelector("#salary");
    if (node) {
      const newValue = node.style.display !== "block" ? "block" : "none";
      hidePopovers();
      node.style.setProperty("display", newValue);
    }
  };
  const toggleCity = (e: any) => {
    const node: any = document.querySelector("#city");
    if (node) {
      const newValue = node.style.display !== "block" ? "block" : "none";
      hidePopovers();
      node.style.setProperty("display", newValue);
    }
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
      <div id="salary" className={styles.salary}>
        <p>
          <label>Salario mín</label>
          <input type="range" min="30" max="170" step="1" value="90" />
          <label>Salario máx</label>
        </p>
      </div>

      <div id="experience" className={styles.experience}>
        <button>0-2 años</button>
        <button>3-5 años</button>
        <button>+5 años</button>
      </div>
      <div id="city" className={styles.city}>
        <input type={"text"} />
        <div>
          <button>Madrid</button>
          <button>Barcelona</button>
          <button>Málaga</button>
          <button>Valencia</button>
          <button>Sevilla</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
