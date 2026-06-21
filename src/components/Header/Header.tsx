import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/RoutePaths";
import "./Header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 300);
    };
    return (
        <header className="header">
            <div className="header__logo">
                Dayal.
            </div>
            <div className="header__center">
                <nav className="header__navigation">
                    <NavLink to={ROUTE_PATHS.DASHBOARD}>Dashboard</NavLink>{' '}
                    <NavLink to={ROUTE_PATHS.EXPERIENCE}>Experience</NavLink>{' '}
                    <NavLink to={ROUTE_PATHS.EXPERTISE}>Expertise</NavLink>{' '}
                    <NavLink to={ROUTE_PATHS.PROJECTS}>Projects</NavLink>{' '}
                    <NavLink to={ROUTE_PATHS.RESUME}>Resume</NavLink>{' '}
                    <NavLink to={ROUTE_PATHS.CONTACT}>Contact</NavLink>
                </nav>
            </div>
            <button
                className="header__menu-button"
                onClick={() => setIsMenuOpen(true)}
            >
                ☰
            </button>

            {isMenuOpen && (
                <>
                    <div
                        className="mobile-overlay"
                        onClick={handleClose}
                    />

                    <div className={`mobile-drawer ${isClosing ? "closing" : "open"
                        }`}>
                        <button
                            className="mobile-drawer__close"
                            onClick={handleClose}
                        >
                            ✕
                        </button>

                        <a href="/">Dashboard</a>
                        <a href="/experience">Experience</a>
                        <a href="/expertise">Expertise</a>
                        <a href="/projects">Projects</a>
                        <a href="/resume">Resume</a>
                        <a href="/contact">Contact</a>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;