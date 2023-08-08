import User from '../User/User'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"><h3>News</h3></Link>
      <User/>
    </nav>
  )
}

export default Navbar