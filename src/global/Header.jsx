import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="left-menu">
                    <h2 className="logo">Movie<span className="">pass</span> </h2>
                    <ul className="menu-list">
                        <l1><Link to="/">Home</Link></l1>
                        <l1><Link to="/upcoming-movies">Upcoming Movies</Link></l1>
                        <l1><Link to="/sports">Sports</Link></l1>
                    </ul>
                </div>
                <button className="login">Login</button>
            </div>
        </header>
    )
}

export default Header;

