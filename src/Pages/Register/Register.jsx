import styles from '../Login/Login.module.css'
import Form from "../../components/form/Form"

const Register = () => {
  return (
    <div className={styles.loginMain}>
      <Form name='Sign up'/>
    </div>
  )
}

export default Register