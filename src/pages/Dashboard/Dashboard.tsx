import React from 'react';
import './Dashboard.scss';
import HeroSection from './components/HeroSection/HeroSection';
import NavigationCards from './components/NavigationCards/NavigationCards';
import CurrentFocus from './components/CurrentFocus/CurrentFocus';
import LatestLearnings from './components/LatestLearnings/LatestLearnings';
import BlogSection from './components/BlogSection/BlogSection';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <HeroSection />
            <NavigationCards />
            <CurrentFocus />
            <LatestLearnings />
            <BlogSection />
        </div>
    );
};
export default Dashboard;