import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardCharacter } from "../components/CardCharacter";
import { CardPlanets } from "../components/CardPlanets";
import { useEffect } from "react";
import { getCharacters, getPlanets } from "../services/starwarsServices";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getCharacters();
        const planets = await getPlanets();

        await dispatch({ type: "update_planet", payload: planets });
        await dispatch({ type: "update_character", payload: characters });

        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  
  return (
    <div className="container text-center mt-5">
      <h1>Bienvenidos a mi blog de Star Wars</h1>

      {/* Personajes */}
      <div className="mt-4">
        <h1 className="text-center">Personajes</h1>
        <div className="d-flex overflow-x-auto py-3 "  >
          {store.characters.map((item) => (
            <div key={item.uid} style={{ flex: '0 0 auto', width: '18rem', scrollSnapAlign: 'start', paddingRight:'10px'}}>
              <CardCharacter name={item.name} id={item.uid} />
            </div>
          ))}
        </div>
      </div>

      {/*  Planetas */}
      <div className="mt-4">
        <h1 className="text-center">Planetas</h1>
        <div className="d-flex overflow-x-auto py-3" >
          {store.planets.map((item) => (
            <div key={item.uid} style={{ flex: '0 0 auto', width: '18rem', scrollSnapAlign: 'start' }}>
              <CardPlanets name={item.name} id={item.uid} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};