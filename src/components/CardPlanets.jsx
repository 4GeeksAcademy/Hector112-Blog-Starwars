import { Link } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPlanets = ({ name, id }) => {
  const { dispatch } = useGlobalReducer();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    
  };

  return (
    <div className="card root d-flex horizontal-scroll-container" style={{  minWidth: '18rem', margin: '0 10px', flexShrink: 0 }}>
      <img src={`url la foto`}
        className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text flex-grow-1">Personaje de Star Wars</p>
        
        <div className="d-flex justify-content-between mt-auto">
          <Link to={`/details/${id}`} className="btn btn-primary btn-sm">
            Detalles
          </Link>
          <button onClick={handleFavorite} className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'} style={{minWidth:'2.5rem'}}>
            {isFavorite ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};