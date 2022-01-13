import './style.css';
import {ReactComponent as Estrelacheia} from "assets/img/estrelacheia.svg";
import {ReactComponent as Estrelameia} from "assets/img/estrela_meia.svg";
import {ReactComponent as Estrela} from "assets/img/estrela.svg";

function MovieStars(){
    return (

        <div className="dsmovie-stars-container">
        <Estrelacheia/>
        <Estrelacheia/>
        <Estrelacheia/>
        <Estrelameia/>
        <Estrela/>
      </div>
      
    );
}
export default MovieStars;