import { Link } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardCharacter = ({ name, id }) => {
  const { dispatch } = useGlobalReducer();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    
  };

  return (
    <div className="container aling-item-horizontal">  
      <div style={{ flex: '0 0 auto', width: '18rem', scrollSnapAlign: 'start' }} >
        <div className="card h-100" style={{ minWidth: '18rem' }}>
          <img src={`https://lumiere-a.akamaihd.net/v1/images/luke-skywalker.jpeg`}
               className="card-img-top" alt={name} style={{ height: '200px',  objectFit: 'cover', objectPosition: 'top' }} />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate">{name}</h5>
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
      </div>
    </div>
  );
};