import './index.scss'
import Image from '../../../assets/images/AstonImg.jpg'

const Logo = () => {
   return(
    <div className="card">
        <div className="imgbox">
            <img className="img" src={Image} alt="developer"></img>
        </div>
        <div className="details">
            <span className="title">Aston Varghese</span>
            <span className="caption">Developer</span>
        </div>
    </div>
   ); 
}

export default Logo;

