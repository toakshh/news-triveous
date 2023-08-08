import styles from './Login.module.css';

import Form from '../form/Form'
const Login = () => {

  return (
    <div className={styles.loginMain}>
        <Form name='Login'/>
    </div>
  )
}


export default Login