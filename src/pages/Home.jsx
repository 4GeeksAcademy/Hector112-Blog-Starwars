import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import { useEffect } from "react";
import { getCharacters, getPlanets } from "../services/starwarsServices.js";


export const Home = () => {
  const { store, dispatch } = useGlobalReducer(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getCharacters();
        const planets = await getPlanets();

        dispatch({ type: "update_character", payload: characters });
        dispatch({ type: "update_planet", payload: planets });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Bienvenidos a mi blog de Star Wars</h1>

      <div className="contPersonajes horizontal-scroll-container d-flex flex-wrap mt-4">
        <h1 className="col-12 text-center"> Personajes</h1>
        <div className="scrolling-wrapper" >
          {store.characters.map((item) => (
            <CardCharacter name={item.name} id={item.uid} key={item.uid} />
          ))}
        </div>
      </div>

      <div className="contPlanetas d-flex flex-wrap mt-4">
        <h1 className="col-12 text-center">Planetas</h1>
        <div className="scrolling-wrapper">
          {store.planets.map((item) => (
            <CardPlanets name={item.name} id={item.uid} key={item.uid} />
          ))}
        </div>
      </div>
    </div>
  );
};
