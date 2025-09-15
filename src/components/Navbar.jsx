import { Link } from "react-router-dom";
import LogoSW from "../assets/img/logosw.png";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemoveFav = (id) => {
        dispatch({ type: "remove_fav", payload: { id } });
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container d-flex justify-content-between">
                <Link to="/" className="logo mw-3">
                    <img src={LogoSW} style={{ maxWidth: "120px", height: "auto" }} />
                </Link>
                <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos
                    </a>
                    <ul className="dropdown-menu">
                        {store.favs.length === 0 ? (
                            <li><span className="dropdown-item">Sin favoritos</span></li>
                        ) : (
                            store.favs.map((fav, idx) => (
                                <li key={idx} className="d-flex align-items-center justify-content-between">
                                    <Link
                                        className="dropdown-item"
                                        to={fav.type === "planet"
                                            ? `/planetdetails/${fav.id}`
                                            : `/peopledetails/${fav.id}`}
                                    >
                                        {fav.name}
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-outline-danger ms-2"
                                        onClick={() => handleRemoveFav(fav.id)}
                                        title="Eliminar favorito"
                                    >
                                        🗑️
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

