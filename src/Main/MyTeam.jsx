import "./MyTeam.css"

const MyTeam = () => {
    return (
        <div className="col s5 m5 l4 xl3">
            <div className="container">
                <p>My Team</p>
            </div>
            <div className>
                <div className="card single-team-card">
                    <img src="https://images.news18.com/ibnlive/uploads/2021/06/1622715559_disha.jpg" className="responsive-img" />
                    <p className="single-hero-name">SomeHero</p>
                </div>
            </div>
        </div>
    )
}

export default MyTeam;