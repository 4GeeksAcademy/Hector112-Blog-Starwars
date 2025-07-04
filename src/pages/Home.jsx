import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Planetas} from "../components/Planetas.jsx";
import {Personajes} from "../components/Personajes.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container text-center mt-5">
			<h1>Bienvenidos a mi blog de Star Wars</h1>
			<div className="contPersonajes d-flex flex-wrap mt-4">
				<Personajes />
			</div>
			<div className="contPlanetas d-flex flex-wrap mt-4">
				<Planetas />
			</div>

		</div>
	);
}; 