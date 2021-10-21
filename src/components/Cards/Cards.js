import TopBar from './TopBar'
import Card from './Card'
import './Cards.css'

function Cards() {
    const data = {
        name: "Raghav Kapoor",
        profession: "Researcher at Benaras Hindu University",
        study: "Physics, AstroPhysics, Nuclear Physics, Tunnel Vision"
    }
    const numberOfItems = 8;
    return (
        <>
        <TopBar />
        <div className="cards">
            {Array(numberOfItems).fill(<Card name={data.name} profession={data.profession} study={data.study} />)}
        </div>
        </>
    );
}

export default Cards;