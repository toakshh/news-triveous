import user from "../../assets/user.svg"
import styles from './User.module.css'
import { Link } from "react-router-dom"
const User = () => {
  return (
    <div className={`${styles.userMain} dflex`}>
        <img src={user} alt="user_profile" loading="lazy" className={styles.userAvatar} />
        <Link to="/login" className={styles.login }>Log in</Link>
        <Link to='/register' className={styles.signup}>Sign up</Link>
    </div>
  )
}

export default User