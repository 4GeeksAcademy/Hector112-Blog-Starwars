import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink, useParams } from "react-router-dom";
import { getCharacterDetails } from "../services/starwarsServices.js";
import { useEffect } from "react";


export const DetailsPeople = () => {
    let { id } = useParams();
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getCharacterDetails(id)
            .then(data => dispatch({ type: "update_characterDetails", payload: data }));
    }, [id, dispatch]);

    const character = store.characterDetails?.properties;
    const error = store.characterDetails?.error;

    return (
        <div className="container text-center mt-5">
            {error ? <p className="text-danger">{error}</p> : (
                character ? (
                    <>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5">
                                <img src="/src/assets/img/rigo-baby.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="col-5">
                                {<h1>{character.name}</h1>}
                                <p>The missing description of a character {" (" + id + ")"}</p>
                            </div>
                            <div className="col-1"></div>
                        </div>

                        <div className="container my-2">
                            <div className="row d-flex justify-content-between">
                                <div className="col-3">
                                    <h3>Gender</h3>
                                    <p>{character.gender}</p>
                                </div>

                                <div className="col-3">
                                    <h3>Birth year</h3>
                                    <p>{character.birth_year}</p>
                                </div>


                                <div className="col-3">
                                    <h3>Homeworld</h3>
                                    <p>{character.homeworld}</p>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-between">
                                <div className="col-3">
                                    <h3>Eye color</h3>
                                    <p>{character.eye_color}</p>
                                </div>

                                <div className="col-3">
                                    <h3>Height</h3>
                                    <p>{character.height}</p>
                                </div>

                                <div className="col-3">
                                    <h3>Skin color</h3>
                                    <p>{character.skin_color}</p>
                                </div>

                            </div>
                        </div>
                    </>
                ) : (
                    <p>Cargando...</p>
                )
            )}

            <button className="btn btn-primary">
                <NavLink to="/" className="card-link text-white">Back to blog</NavLink>
            </button>
        </div>
    );
};