import Ordenamientos from "./Ordenamientos";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { restoreSearch, setUserLocation } from "../../redux/actions";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  combinarFiltros,
  handleCleanFilter,
  handleSelectedFilter,
} from "./handlersSideBar";
import swal from "sweetalert";

import styles from "./sidebar.module.css";

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [distancia, setDistancia] = useState("");
  const filtros = useSelector((state) => state.filters);
  const userLocation = useSelector((state) => state.userLocation);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (!userLocation.length) {
      locateUser();
      console.log("buscando");
    }
  }, []);
  let value = "default";

  function locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("no tenés geolocalización");
    }
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleDistancia = (event) => {
    setDistancia(event.target.value);
  };
  const inputSearch = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      swal({
        title: "Sorry!",
        text: "Debe escribir el nombre de una organizacion",
        icon: "warning",
        button: "Ok",
      });
      setSearchTerm("");
    } else {
      handleSelectedFilter(e, filtros, dispatch);
      setSearchTerm("");
    }
    navigate("/Adoptar");
  };

  const resetSearch = (e) => {
    e.preventDefault();
    dispatch(restoreSearch());
  };
  function handleSubmit(e) {
    e.preventDefault();
    e.target.value = distancia;
    handleSelectedFilter(e, filtros, dispatch);
    setDistancia("");
  }

  return (
    <div>
      {isMobile ? (
        <div
          className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}
        >
          <div className={styles.container}>
            <select
              onChange={(e) => handleSelectedFilter(e, filtros, dispatch)}
              className={styles.selectBox}
              name="species"
              defaultValue={value}
            >
              <option value="default" disabled hidden>
                Animal
              </option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              {/* <option value="conejo">Conejo</option>
                    <option value="tortuga">Tortuga</option>
                    <option value="cobayo">Cobayo</option> */}
            </select>
            <select
              defaultValue={value}
              onChange={(e) => handleSelectedFilter(e, filtros, dispatch)}
              className={styles.selectBox}
              name="size"
            >
              <option value="default" disabled hidden>
                Tamaño
              </option>
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
            <select
              defaultValue={value}
              onChange={(e) => handleSelectedFilter(e, filtros, dispatch)}
              className={styles.selectBox}
              name="sex"
            >
              <option value="default" disabled hidden>
                Sexo
              </option>
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>
            {/* <select className={styles.selectBox} name="age" defaultValue={value}>
        <option value="default" disabled hidden>Edad</option>
            <option value="menor1">Menor de un año</option>
            <option value="1a2">Entre uno  y dos años</option>
            <option value="2plus">Más de dos años</option>
        </select> */}
            <Ordenamientos />
            {userLocation?.latitude ? (
            <form
              onSubmit={handleSubmit}
              className={styles.formkms}
              name="distance"
              value={distancia}
            >
              <input
                type="number"
                min="1"
                placeholder="kms"
                value={distancia}
                className={styles.kms}
                onChange={handleDistancia}
              />
              <button type="submit" className={styles.kmsbtn}>
                Distancia Max
              </button>
            </form>
          ) : null}
            <button
              name="delete filters"
              onClick={(e) => handleCleanFilter(e, filtros, dispatch)}
              className={styles.btn}
            >
              Restablecer Filtros
            </button>
            <form onSubmit={inputSearch}>
              <div className={styles.searchContainer}>
                <div className={styles.newsearch}>
                  <input
                    type="text"
                    placeholder="Buscar mascotas de:"
                    value={searchTerm}
                    onChange={handleSearch}
                    className={styles.search}
                  />
                  <button
                    name="name"
                    value={searchTerm}
                    onClick={inputSearch}
                    className={styles.searchButton}
                  >
                    <Icon icon="fa6-solid:magnifying-glass" />
                  </button>
                </div>
                <button className={styles.restoreButton} onClick={resetSearch}>
                  Eliminar Búsqueda
                </button>
              </div>
            </form>
            <button
              className={`${styles.toggle} ${isExpanded ? styles.visible : ""}`}
              onClick={toggleSidebar}
            >
              <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <select
            onChange={(e) => handleSelectedFilter(e, filtros, dispatch)}
            className={styles.selectBox}
            name="species"
            defaultValue={value}
          >
            <option value="default" disabled hidden>
              Animal
            </option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            {/* <option value="conejo">Conejo</option>
                    <option value="tortuga">Tortuga</option>
                    <option value="cobayo">Cobayo</option> */}
          </select>
          <select
            defaultValue={value}
            onChange={(e) => handleSelectedFilter(e, filtros, dispatch)}
            className={styles.selectBox}
            name="size"
          >
            <option value="default" disabled hidden>
              Tamaño
            </option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
          <select
            defaultValue={value}
            onChange={(e) => handleSelectedFilter(e, filtros, dispatch)}
            className={styles.selectBox}
            name="sex"
          >
            <option value="default" disabled hidden>
              Sexo
            </option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
          {/* <select className={styles.selectBox} name="age" defaultValue={value}>
        <option value="default" disabled hidden>Edad</option>
            <option value="menor1">Menor de un año</option>
            <option value="1a2">Entre uno  y dos años</option>
            <option value="2plus">Más de dos años</option>
        </select> */}
          <Ordenamientos />
          {userLocation?.latitude ? (
            <form
              onSubmit={handleSubmit}
              className={styles.formkms}
              name="distance"
              value={distancia}
            >
              <input
                type="number"
                min="1"
                placeholder="kms"
                value={distancia}
                className={styles.kms}
                onChange={handleDistancia}
              />
              <button type="submit" className={styles.kmsbtn}>
                Distancia Max
              </button>
            </form>
          ) : null}

          <button
            name="delete filters"
            onClick={(e) => handleCleanFilter(e, filtros, dispatch)}
            className={styles.btn}
          >
            Restablecer Filtros
          </button>
          <form onSubmit={inputSearch}>
            <div className={styles.searchContainer}>
              <div className={styles.newsearch}>
                <input
                  type="text"
                  placeholder="Buscar mascotas de:"
                  value={searchTerm}
                  onChange={handleSearch}
                  className={styles.search}
                />
                <button
                  name="name"
                  value={searchTerm}
                  onClick={inputSearch}
                  className={styles.searchButton}
                >
                  <Icon icon="fa6-solid:magnifying-glass" />
                </button>
              </div>
              <button className={styles.restoreButton} onClick={resetSearch}>
                Eliminar Búsqueda
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
