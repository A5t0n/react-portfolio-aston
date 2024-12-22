import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                        idx={15}   
                    />
                </h1>
                <p> I'm very ambitious front-end developer looking for a role in
                    establshed IT Company with the opportunity to work with latest technologies
                    on challenging and diverse projects.
                </p>
                <p>
                    I'm a great team player, with great attention to details and a passion for
                    learning new technologies and constantly growing.
                </p>
                <p>If I need to define myself in one sentence that would be a family person,
                    ,A sports enthusiast, a tech geek and a passionate developer.
                </p>
            </div>
        </div>
    )
}

export default About
