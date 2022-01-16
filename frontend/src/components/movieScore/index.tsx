import MoveiStars from 'components/moveiStars';
import { type } from 'os';
import './stile.css';

type Props = {
    score: number;
    count: number;

}

function MovieScore({score, count} : Props) {
    
    return (

        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MoveiStars score={score}/>
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>

    );
}
export default MovieScore;