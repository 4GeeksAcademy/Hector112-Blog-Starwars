import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { getCharacterDetails } from "../services/starwarsServices.js";

const PeopleCard = ({ name, id, image }) => {

    const { store, dispatch } = useGlobalReducer()
    const [characterDetails, setCharacterDetails] = useState(null);
    const [imgUrl, setImgUrl] = useState(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
    const [isFavorite, setIsFavorite] = useState(
        store.favs.some(fav => fav.id === id && fav.type === "character")
    );

    useEffect(() => {
        getCharacterDetails(id).then(data => {
            if (data && data.properties) setCharacterDetails(data.properties);
        });
        setIsFavorite(store.favs.some(fav => fav.id === id && fav.type === "character"));
    }, [id, store.favs]);

    const handleImgError = () => {
        setImgUrl("https://starwars-visualguide.com/assets/img/placeholder.jpg");
    };

    const addFav = () => {
        if (isFavorite) {
            Toastify({
                text: "Character already in your fav list!",
                duration: 1000
            }).showToast();
            return;
        }
        dispatch({ type: 'add_favs', payload: { name, id, type: "character" } });
        setIsFavorite(true);
    }

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "remove_fav", payload: { id } });
        } else {
            dispatch({ type: "add_favs", payload: { name, id, type: "character" } });
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="container-fluid py-2">

            <div className="card" style={{ width: "18rem" }}>
                <img src={imgUrl} onError={handleImgError} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" id={id}>{name}</h5>
                    {characterDetails ? (
                        <>
                            <p>Altura: {characterDetails.height}</p>
                            <p>Peso: {characterDetails.mass}</p>
                            <p>Color de pelo: {characterDetails.hair_color}</p>
                            <p>Color de piel: {characterDetails.skin_color}</p>
                        </>
                    ) : (
                        <p>Cargando detalles...</p>
                    )}
                    <div className="d-flex justify-content-between mt-auto">
                        <Link to={`/peopledetails/${id}`} className="btn btn-primary btn-sm">
                            Detalles
                        </Link>
                        <button onClick={handleFavorite} className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}>
                            {isFavorite ? '❤️' : '♡'}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PeopleCard;