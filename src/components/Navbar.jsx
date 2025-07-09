import { Link } from "react-router-dom";
import LogoSW from "../assets/img/logosw.png";
import useGlobalReducer from "../hooks/useGlobalReducer";




export const Navbar = () => {
	const {store, dispatch} = useGlobalReducer

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between">
				<Link to="/" className="logo mw-3">
					<img src ={LogoSW}  style={{ maxWidth: "120px", height: "auto" }} />
				</Link>
				<div className="dropdown">
				  <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				    Favoritos
				  </a>

				  <ul className="dropdown-menu">
				    <li><a className="dropdown-item" href="#">Action</a></li>
				    
				  </ul>
				</div>
			</div>
		</nav>
	);
};

