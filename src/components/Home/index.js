import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import ALogoTitle from '../../assets/images/ALogo.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['s','t','o','n']
    const jobArray = ['A',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect (()=> {
        const timeoutId= setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i!</span>
                    <br />

                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <img src={ALogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>
                <h2>Full-Stack Developer / JavaScript Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="LogoBox">
            <Logo />
            </div>
            

        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home;