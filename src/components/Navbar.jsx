import { Link } from "react-router-dom";
import LogoSW from "../assets/img/logosw.png";





export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between">
				<Link to="/" className="logo mw-3">
					<img src ={LogoSW}  style={{ maxWidth: "120px", height: "auto" }} />
				</Link>
				<div className="ml-auto">
					
					<button className="favoritos btn btn-primary">Favoritos</button>
					
				</div>
			</div>
		</nav>
	);
};