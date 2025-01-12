import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio.json"

const Portfolio = () => {

    useEffect(() => {
        document.title = "Portfolio";
      }, []);

    const [letterClass, setLetterClass] = useState('text-animate')
        console.log(portfolioData);


        useEffect (()=> {
                const timeoutId= setTimeout(() => {
                    setLetterClass('text-animate-hover')
                }, 3000);
        
                return () => {
                    clearTimeout(timeoutId);
                };
            }, []);

            const renderPortfolio = (portfolio) => {
                return(
                    <div className="images-container">
                        {
                            portfolio.map((port,idx) => {
                               return(
                                <div className="image-box" key={idx}>
                                    <img className="portfolio-image" src={port.cover} alt="portfolio"/>
                                    <div className="content">
                                        <p className="title">{port.title}</p>
                                        <p className="description">{port.description}</p>
                                        <button className="btn"
                                        onClick={()=>window.open(port.url)}>
                                            View
                                            </button>
                                    </div>
                                </div>
                               ) 
                            })
                        }
                    </div>
                );
            }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")} 
                        idx={15}   
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
        
    )
}

export default Portfolio;
