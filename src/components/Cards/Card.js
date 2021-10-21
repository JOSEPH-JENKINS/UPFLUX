import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap ,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function Card({ name, profession, study }) {
    return (
        <div className="card">
            <div className="love-icon">
                <FontAwesomeIcon icon={faHeart}/>
            </div>
            <div className="card-details">
                <h1>{name}</h1>
                <div className="card-profession">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>{profession}</p>
                </div>
                <div className="card-study">
                    <FontAwesomeIcon icon={faGraduationCap}/>
                    <p>{study}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;