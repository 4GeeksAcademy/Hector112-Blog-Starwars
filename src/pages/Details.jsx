import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getCharacterDetails } from "../services/starwarsServices";

export const Details = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getCharacterDetails(id)
            .then(data => dispatch({ type: "update_characterDetails", payload: data }));
    }, [id, dispatch]);

    // Asegúrate de que characterDetails existe antes de acceder a sus propiedades
    const character = store.characterDetails?.properties;

    return (
        <div className="container text-center mt-5">
            {character ? (
                <>
                    <h1>{character.name}</h1>
                    <p>Altura: {character.height}</p>
                    <p>Peso: {character.mass}</p>
                    <p>Color de pelo: {character.hair_color}</p>
                    <p>Color de piel: {character.skin_color}</p>
                    <p>Color de ojos: {character.eye_color}</p>
                    <p>Año de nacimiento: {character.birth_year}</p>
                    <p>Género: {character.gender}</p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
            <button className="btn btn-primary mt-3">
                <NavLink to="/" className="card-link text-white">Volver al blog</NavLink>
            </button>
        </div>
    );
};