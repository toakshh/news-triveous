
import './NotFound.css';
import { Link } from 'react-router-dom';
import error from "../../assets/access-denied.png"
const NotFound = () => {
  return (
    <div className='notfound-parent'>
    <img className='notfound-img' src={error} alt="notfound page" />
    <div className='notfound-main'>
        <h3>Oops !</h3>
        <span>Error : <h1>404</h1></span>
        <h4>Page Not Found</h4>
        <Link className='notfound-link' to="/">Go to Home</Link>
    </div>
    </div>
  )
}

export default NotFound