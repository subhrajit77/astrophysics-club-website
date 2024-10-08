import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navigation">
            <div>
                <picture className="nav-logo">
                    <img
                        src="/assets/club-logo.png"
                        alt="Astrophysics Club Logo"
                    />
                </picture>
            </div>
            <div className="nav-content">
                <ul className="nav-links">
                    <li className="nav-link">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-link">
                        <a href="/">Projects</a>
                    </li>
                    <li className="nav-link">
                        <a href="/">Crew</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
