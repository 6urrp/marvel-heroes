import { Button } from "react-materialize";

const SingleHero = props => {

    return (
        <div className="">
            <h3>{props.hero.name}</h3>
            <div>
                <img src={`${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`}/>
            </div>
            <Button>Info</Button>
            <Button>Add</Button>
        </div>
    )
}

export default SingleHero;