import {useEffect, useState} from "react";
import Rocket from "./Rocket";

const Rockets = () => {
    const [rockets, setRockets] = useState([]);

    useEffect( ()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights =>
                setRockets(flights.filter(flight=>flight.launch_year !== '2020')))
    }, [])
    return(
        <div>
            {rockets.map(value => <Rocket key={value.flight_number} item={value} styleClass= {'missionInfo'}/>)}
        </div>
    )
}


export default Rockets;