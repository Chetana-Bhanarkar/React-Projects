function Navbar(){
    return (
        <>
            <nav className="container">
                <div style={{"width" : "76px", "height" : "42.75px"}}>
                    <img style={{"width" : "100%", "height" : "100%"}} src="/brand_page_logo.png" alt="Logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <div>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
