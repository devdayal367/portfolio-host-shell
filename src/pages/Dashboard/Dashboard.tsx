import React from 'react';
import './Dashboard.scss';
import HeroSection from './components/HeroSection/HeroSection';
import NavigationCards from './components/NavigationCards/NavigationCards';
import CurrentFocus from './components/CurrentFocus/CurrentFocus';
import LatestLearnings from './components/LatestLearnings/LatestLearnings';
import BlogSection from './components/BlogSection/BlogSection';
import { dashboardContent } from './constants/dashboardContent'

const Dashboard = () => {

    return (
        <div className="dashboard">
            <section className="dashboard__hero">
                <HeroSection content={dashboardContent.hero} />
            </section>

            <section className="dashboard__navigation-cards">
                <NavigationCards cards={dashboardContent.navigationCards} />
            </section>

            {/* <section className="dashboard__current-focus">
                <CurrentFocus />
            </section>

            <section className="dashboard__latest-learnings">
                <LatestLearnings />
            </section> */}
            <section className="dashboard__insights">

                <CurrentFocus
                    content={dashboardContent.currentFocus}
                />

                <LatestLearnings
                    content={dashboardContent.latestLearnings}
                />

            </section>

            <section className="dashboard__blog">
                <BlogSection />
            </section>
        </div>
    );
};
export default Dashboard;