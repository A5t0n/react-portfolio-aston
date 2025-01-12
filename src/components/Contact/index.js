import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    useEffect(() => {
        document.title = "Contact";
      }, []);

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm=useRef();

    useEffect (()=> {
                const timeoutId= setTimeout(() => {
                    setLetterClass('text-animate-hover')
                }, 3000);
        
                return () => {
                    clearTimeout(timeoutId);
                };
            }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a1iossb', 'template_46n1qnw',refForm.current,'0YTFNcbHImPBvRdds')
          .then(() => {
              alert('Message sent successfully');
              window.location.reload(false);
          }, 
          (error) => {
              alert('Message failed to send, try again !!');
              console.log('Error details:', error);
          });
    }

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
                <form ref={refForm} onSubmit={sendEmail}>
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
        <div className='info-map'>
            Aston Varghese,
            <br/>
            Scarborough,
            <br/>
            Ontario,
            <br/>
            Canada.
            <span>astonvarghese8@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[43.770124, -79.261279]} zoom={25}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[43.770124, -79.261279]}>
                <Popup>
                    <div style={{ fontSize: '16px', color: '#333' }}>
                        Aston resides here, Let's grab a coffee from Timmies and talk :)
                    </div>
                </Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Contact;