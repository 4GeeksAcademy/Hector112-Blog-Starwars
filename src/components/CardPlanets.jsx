import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPlanetDetails } from "../services/starwarsServices.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardPlanets = ({ name, id }) => {
  const [planetDetails, setPlanetDetails] = useState(null);
  const [imgUrl, setImgUrl] = useState(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
  const { store, dispatch } = useGlobalReducer();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getPlanetDetails(id).then(data => {
      if (data && data.properties) setPlanetDetails(data.properties);
    });
    setIsFavorite(store.favs.some(fav => fav.id === id && fav.type === "planet"));
  }, [id, store.favs]);

  const handleImgError = () => {
    setImgUrl("https://starwars-visualguide.com/assets/img/placeholder.jpg");
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "remove_fav", payload: { id } });
    } else {
      dispatch({ type: "add_favs", payload: { name, id, type: "planet" } });
    }
    // El estado isFavorite se actualizará automáticamente por el useEffect
  };

  return (
    <div className="card" style={{ minWidth: '18rem', margin: '0 10px', flexShrink: 0 }}>
      <img
        src={imgUrl}
        onError={handleImgError}
        className="card-img-top"
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        {planetDetails?.error ? (
          <p className="text-danger">{planetDetails.error}</p>
        ) : planetDetails ? (
          <>
            <p>Clima: {planetDetails.climate}</p>
            <p>Terreno: {planetDetails.terrain}</p>
            <p>Población: {planetDetails.population}</p>
          </>
        ) : (
          <p>Cargando detalles...</p>
        )}
        <div className="d-flex justify-content-between mt-auto">
          <Link to={`/planetdetails/${id}`} className="btn btn-primary btn-sm">
            Detalles
          </Link>
          <button
            onClick={handleFavorite}
            className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            style={{ minWidth: '2.5rem' }}
          >
            {isFavorite ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};