const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="left-menu">
                    <h2 className="logo">Movie<span className="">pass</span> </h2>
                    <ul className="menu-list">
                        <l1>Movies</l1>
                        <l1>Theatre</l1>
                        <l1>Sports</l1>
                    </ul>
                </div>
                <button className="login">Login</button>
            </div>
        </header>
    )
}

export default Header;

