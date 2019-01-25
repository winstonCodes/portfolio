import React from 'react';
import './style.scss';

import PortfolioCard from './components/PortfolioCard';
import Projects from './components/Projects';

const PortfolioPage = props => {
  const portfolio = Projects.map((project, i) => (
    <PortfolioCard project={project} key={i} />
  ))
  return(
  <div>

    <section className="hero">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        {portfolio}
      </div>
    </section>




  </div>
);
}

export default PortfolioPage;
