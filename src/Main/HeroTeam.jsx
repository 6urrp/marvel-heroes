import { useEffect, useState } from "react";
import { getHeroes } from "../services/getHeroes";

import SingleHero from "./SingleHero";

const HeroTeam = () => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        getHeroes()
            .then(heroes => setHeroes(heroes));
    }, []);

    console.log(heroes);

    return (
        <div>
            <div>
                <p>Hero Team</p>
            </div>
            <div>
                <input type="text" />
                <button type="submit">go</button>
            </div>
            <div>
                {
                heroes.map((hero, index) => (
                    <SingleHero hero={hero} key={index} />
                ))
                }
            </div>
        </div>
    )
}

export default HeroTeam;