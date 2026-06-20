import {Routes, Route} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Experience from '../pages/Experience/Experience';
import Expertise from '../pages/Expertise/Expertise';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Resume from '../pages/Resume/Resume';
import { ROUTE_PATHS } from '../constants/RoutePaths';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />} >
            <Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTE_PATHS.EXPERIENCE} element={<Experience />} />
            <Route path={ROUTE_PATHS.EXPERTISE} element={<Expertise />} />
            <Route path={ROUTE_PATHS.PROJECTS} element={<Projects />} />
            <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
            <Route path={ROUTE_PATHS.RESUME} element={<Resume />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;