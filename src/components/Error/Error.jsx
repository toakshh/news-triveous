
import "./Error.css";
import error from '../../assets/error.png';
import PropTypes from 'prop-types'

const Error = (props) => {
    const {msg} = props;
  return (
    <div className='error-main'>
       <img src={error} alt="error" />
       <span>
            {msg}
            <div>Please try again later. Thanks</div>
       </span>  
    </div>
  )
}
Error.propTypes= {
  msg: PropTypes.string
}

export default Error