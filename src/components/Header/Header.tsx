import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/RoutePaths";

const Header = () => {
    return (
        <header>
            <h1>Dayal Dev</h1>
            <p>Frontend Engineer</p>

            <nav>
                <NavLink to={ROUTE_PATHS.DASHBOARD}>Dashboard</NavLink>{' '}
                <NavLink to={ROUTE_PATHS.EXPERIENCE}>Experience</NavLink>{' '}
                <NavLink to={ROUTE_PATHS.EXPERTISE}>Expertise</NavLink>{' '}
                <NavLink to={ROUTE_PATHS.PROJECTS}>Projects</NavLink>{' '}
                <NavLink to={ROUTE_PATHS.RESUME}>Resume</NavLink>{' '}
                <NavLink to={ROUTE_PATHS.CONTACT}>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;