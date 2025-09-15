import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPlanetDetails } from "../services/starwarsServices.js";

export const DetailsPlanet = () => {

    let { id } = useParams()

    const { store, dispatch } = useGlobalReducer()

    console.log(id);

    useEffect(() => {

        getPlanetDetails(id)
            .then((data) => dispatch({ type: "update_planetDetails", payload: data }))

    }, [])

    const planetDetailsContainer = store.planetDetails?.properties;
    console.log(planetDetailsContainer);


    return (
        <div className="container text-center mt-5">
            {planetDetailsContainer ? (
                <>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5">
                            <img src="/src/assets/img/rigo-baby.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="col-5">
                            {<h1>{planetDetailsContainer.name}</h1>}
                            <p>The missing description of a Planet {" (" + id + ")"}</p>
                        </div>
                        <div className="col-1"></div>
                    </div>

                    <div className="row">
                        
                    </div>


                    <div className="container my-2">
                        <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <h3>Climate</h3>
                                <p>{planetDetailsContainer.climate}</p>
                            </div>

                            <div className="col-3">
                                <h3>Diameter</h3>
                                <p>{planetDetailsContainer.diameter}</p>
                            </div>


                            <div className="col-3">
                                <h3>Surface water</h3>
                                <p>{planetDetailsContainer.surface_water}</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <h3>Terrain</h3>
                                <p>{planetDetailsContainer.terrain}</p>
                            </div>

                            <div className="col-3">
                                <h3>Gravity</h3>
                                <p>{planetDetailsContainer.gravity}</p>
                            </div>

                            <div className="col-3">
                                <h3>Population</h3>
                                <p>{planetDetailsContainer.population}</p>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <p>Cargando</p>
            )}



            <button className="btn btn-primary">
                <NavLink to="/" className="card-link text-white">Back to blog</NavLink>
            </button>
        </div>
    );
};

