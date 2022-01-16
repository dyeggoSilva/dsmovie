import './style.css';
import {ReactComponent as Estrelacheia} from "assets/img/estrelacheia.svg";
import {ReactComponent as Estrelameia} from "assets/img/estrela_meia.svg";
import {ReactComponent as Estrelav} from "assets/img/estrela.svg";

type props = {
  score:number;
}
type  estrelaProps = {
  fill:number;
}
// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Estrela ({fill} : estrelaProps){
  if (fill ===0){
    return <Estrelav/>
  }
  else if (fill ===1){
    return <Estrelacheia/>
  }
  else {
    return <Estrelameia/>
  }

}

function MovieStars({score}:props){

  const fills = getFills(score);

    return (

        <div className="dsmovie-stars-container">
        <Estrela fill ={fills[0]}/>
        <Estrela fill ={fills[1]}/>
        <Estrela fill ={fills[2]}/>
        <Estrela fill ={fills[3]}/>
        <Estrela fill ={fills[4]}/>
        
      </div>
      
    );
}
export default MovieStars;