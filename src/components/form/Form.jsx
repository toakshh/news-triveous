import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import { enqueueSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import {app} from '../../firebase'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth= getAuth(app) 


const Form = ({ name }) => {
    const usernameRef = useRef()
    const passRef = useRef()
    const confirmPassRef = useRef()
    const navigate = useNavigate()

    const createUser= ()=>{
            createUserWithEmailAndPassword(auth, usernameRef?.current?.value, passRef?.current?.value)
            .then(()=>{
                enqueueSnackbar("Successfully Registered. Login to continue",{variant:'success'})
                navigate('/login')
            })
            .catch(()=> enqueueSnackbar("Invalid credentials. Try again",{variant:"error"}))
    }
    const signIn=()=>{
        signInWithEmailAndPassword(auth, usernameRef?.current?.value, passRef?.current?.value)
        .then(()=>{
            enqueueSnackbar("Logged in successfully",{variant:'success'})
            navigate("/")
        })
        .catch(()=>{
            enqueueSnackbar("Username or password donot matches. Please try again",{variant:"error"})
        })
    }

    const handleUserData = (e) => {
        e.preventDefault();
        const user = usernameRef?.current?.value
        const pass = passRef?.current?.value
        const cnfPass = confirmPassRef?.current?.value
        
        if (!user || user.length < 6) {
            enqueueSnackbar("Username should be at least 6 characters", { variant: "error" })
        } else if (!pass || pass.length < 8) {
            enqueueSnackbar("Password should be at least 8 characters", { variant: 'error' })
        } else if (name === "Sign up" && (cnfPass.length < 8 || pass !== cnfPass)) {
            enqueueSnackbar("Passwords do not match", { variant: 'error' })
        } else {
            if(name==="Sign up"){
                createUser()
            }else{
                signIn()
            }
        }
    }
    return (
    
        <form className={styles.form}>
            <h3>{name}</h3>
            <input className={styles.input} ref={usernameRef} type="email" placeholder='Email' required />
            <input className={styles.input} ref={passRef} type="password" placeholder='Password' required />
            {name === "Sign up" && <input className={styles.input} type="password" placeholder='Confirm Password' required ref={confirmPassRef} />}
            <div className={styles.bottom}>
                <button className={styles.btn} onClick={(e) => { handleUserData(e) }} >{name}</button>
                {name==="Login"? <Link to="/register">Register</Link> :<Link to="/login">login ?</Link>}
            </div>
        </form>

    )
}
Form.propTypes = {
    name: PropTypes.string
}

export default Form