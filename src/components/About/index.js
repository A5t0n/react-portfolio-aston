import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    useEffect(() => {
        document.title = "About";
      }, []);

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect (()=> {
            const timeoutId= setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }, []);
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                        idx={15}   
                    />
                </h1>
                <p> 
                    I am an ambitious front-end developer 
                    seeking a role in an established tech company 
                    where I can work with the latest technologies 
                    on challenging and diverse projects.
                </p>
                <p>
                    As a detail-oriented team player, I am passionate about learning new technologies 
                    and committed to continuous growth in my field.
                </p>
                <p>
                    If I were to describe myself in one sentence, 
                    I would say I am a dedicated family person, a sports enthusiast, 
                    a tech geek, and a passionate developer.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About
