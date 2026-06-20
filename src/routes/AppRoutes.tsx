import {Routes, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import Experience from '../pages/Experience/Experience';
import Expertise from '../pages/Expertise/Expertise';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Resume from '../pages/Resume/Resume';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    );
}

export default AppRoutes;