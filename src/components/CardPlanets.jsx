import { Link } from "react-router-dom";
import { useState } from "react";

export const CardPlanets = ({ name, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {store,dispatch} = useGlobalReducer
  
  function addFavs () {
    dispatch({type:'add_favs', payload:{name:name,id:id}})
    console.log (addFavs)
  }

  return (
    <div className="card root d-flex horizontal-scroll-container" style={{  minWidth: '18rem', margin: '0 10px', flexShrink: 0 }}>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text flex-grow-1">Personaje de Star Wars</p>
        
        <div className="d-flex justify-content-between mt-auto">
          <Link to={`/details/${id}`} className="btn btn-primary btn-sm">
            Detalles
          </Link>
          <button onClick={() => setIsFavorite(!isFavorite)} className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}>
            {isFavorite ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};