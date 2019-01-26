import React from 'react';

const PortfolioCard = props => {
  const {title, subtitle, description, image, demo, code} = props.project;
  return(
    <div className="portfolio-square">
      <a href={demo} className="portfolio-thumbnail" style={{backgroundImage: `url(${image})`}}></a>
      <div className="portfolio-content">
        <h3>{title}</h3>
        <h5 className="subtitle">{subtitle}</h5>
        <p>{description}</p>
      </div>
      <div className="portfolio-details">
        <div className="read-more">
          <a href={demo}>View Demo</a>
        </div>
        <div className="read-more">
          <a href={code}>View Code</a>
        </div>
      </div>
    </div>
  );

}

export default PortfolioCard;
