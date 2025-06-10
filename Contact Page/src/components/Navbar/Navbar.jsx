import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <nav className={`${styles.navbar} container`}>
                <div className={`${styles.logo}`}>
                    <img src="/logo-2.jpg" alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;