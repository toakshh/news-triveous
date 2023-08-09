import userProfile from "../../assets/boy.png";
import styles from './User.module.css';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listenToAuthChanges } from "../../Redux/slice/authSlice"
import { useEffect } from "react"
import { clearUser } from "../../Redux/slice/authSlice";
import { Tooltip,Zoom,tooltipClasses } from "@mui/material";
import styled from "@emotion/styled";
import { enqueueSnackbar } from "notistack";


const ThemedTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--theme)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--dark-color)",
    color: "black",
    padding: "10px",
    fontSize:"14px",
    fontWeight: "600",
    borderRadius:"15px",
    boxShadow: " 0 0 15px black",
    border: "1px solid black",
  },
  
}));

const User = () => {

  const dispatch= useDispatch();
  const {isLoggedIn,user}= useSelector((state)=>state.auth);

  const handleLogOut=()=>{
    enqueueSnackbar("Logged out ",{variant: 'info'})
    dispatch(clearUser())
    // console.log("logging out")
  }
  useEffect(()=>{
    dispatch(listenToAuthChanges());
    // console.log(isLoggedIn)
  },[dispatch,isLoggedIn])

  if(!isLoggedIn){
    return (
      <div className={`${styles.userMain} dflex`}>
        <Link to="/login" className={styles.login }>Log in</Link>
        <Link to='/register' className={styles.signup}>Sign up</Link>
      </div>)
    
  }
  return (
    <div className={`${styles.userMain} dflex`}>
        <ThemedTooltip 
          title={user} 
          placement='top' 
          TransitionComponent={Zoom} 
          disableFocusListener enterTouchDelay={0}  
        >
          <img 
            src={userProfile} 
            alt="user_profile" 
            loading="lazy" 
            className={styles.userAvatar} 
          />
        </ThemedTooltip>
        <Link to="/login" className={styles.logout} onClick={handleLogOut}>Log Out</Link>
    </div>
  )
}

export default User