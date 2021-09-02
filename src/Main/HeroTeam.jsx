import { useEffect, useState } from "react";
import { getHeroes } from "../services/getHeroes";

import "./HeroTeam.css"

import SingleHero from "./SingleHero";
import MyTeam from "./MyTeam";

const HeroTeam = () => {
    const [heroes, setHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([]);
    const [typing, setTyping] = useState("");

    useEffect(() => {
        getHeroes()
            .then(heroes => {
                setHeroes(heroes);
                setFilteredHeroes(heroes)
            });
    }, []);

    const onSearchHandler = (event) => {
        setTyping(event.target.value);
    }

    const onButtonGoHandler = e => {
        e.preventDefault();
        let filtered = filteredHeroes.filter(hero => hero.name.includes(typing));
        setFilteredHeroes(filtered);
        setTyping("")
    }

    return (
        <div>
            <div className="container col s12">
                <p>Hero Team</p>
            </div>
            
            <div className="row">
                <div className="col s7 m7 l8 xl9">
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s3">
                                    <input id="input_text" type="text" value={typing} onChange={onSearchHandler} placeholder="Search..." />
                                </div>
                                <div className="col s3">
                                    <button className="waves-effect waves-light btn" onClick={onButtonGoHandler}>go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                        filteredHeroes.map((hero, index) => (
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