import { useEffect, useState } from "react";
import { getHeroes } from "../services/getHeroes";

import "./HeroTeam.css"

import SingleHero from "./SingleHero";
import MyTeam from "./MyTeam";

const HeroTeam = () => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        getHeroes()
            .then(heroes => setHeroes(heroes));
    }, []);

    console.log(heroes);

    return (
        <div>
            <div className="container col s12">
                <p>Hero Team</p>
            </div>
            
            <div className="row">
                <div className="col s7 m7 l8 xl9">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s3">
                                    <input id="input_text" type="text" data-length="10" />
                                    <label for="input_text">Search your hero...</label>
                                </div>
                                <div className="col s3">
                                    <a className="waves-effect waves-light btn">go</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        {
                        heroes.map((hero, index) => (
                            <SingleHero hero={hero} key={index} />
                        ))
                        }
                    </div>
                </div>
                <MyTeam />
            </div>
                        

        
        </div>
    )
}

export default HeroTeam;