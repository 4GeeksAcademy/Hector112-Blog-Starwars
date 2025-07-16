import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import {Link, useParams } from "react-router-dom";
import { getCharactersDetails } from "../services/starwarsServices";

export const Details = () => {
     
    let { id } = useParams();
    const {store, dispatch} = useGlobalReducer();
    // const character = store.characters.find((item) => item.uid === id);
    // const planet = store.planets.find((item) => item.uid === id);

    useEffect(() => {
      
      getCharacterDetails(id)
        .then((data) => dispatch({ type: "update_details", payload: data }));

    }, []);

    return (
    <div className="container text-center mt-5">
      <h1>Detalles</h1>
      {character ? (
        <div>
          <h2>Personaje: {character.name}</h2>
          <p>Detalles del personaje...</p>
        </div>
      ) : planet ? (
        <div>
          <h2>Planeta: {planet.name}</h2>
          <p>Detalles del planeta...</p>
        </div>
      ) : (
        <p>No se encontraron detalles.</p>
      )}
    </div>
  );
}