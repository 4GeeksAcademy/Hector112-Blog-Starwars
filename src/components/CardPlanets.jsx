 import useGlobalReducer from "../hooks/useGlobalReducer"
 import { Link } from "react-router-dom";
 
 export const CardPlanets = ({ name, id }) => {
     return (
        <div className="container text-center mt-5">
               
           <img src=".." className="card-img-top" alt=".." />
           <div className="card-body">
               <h5 className="card-title" id={id}> {name}  </h5>
               <p className="card-text"> Example  </p>
               <Link to="/details/1" className="btn btn-primary" >  Go somewhere </Link>
           </div>                              
           
        </div>
    )
};