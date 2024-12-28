import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {

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
      <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}
                />
            </h1>
            <p>
                I am always looking for new opportunities to learn and grow.
                If you have a project that you would like to discuss, or have any questions, feel free to reach out to me
                using the form below.
            </p>
            <div className="contact-form">
                <form>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Contact;