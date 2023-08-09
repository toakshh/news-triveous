import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from './App.module.css'
import Navbar from './components/Nav/Navbar'
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Content from "./Pages/Content/Content";
import NotFound from "./components/notFound/NotFound"
import { SnackbarProvider } from "notistack";



function App() {


  return (
    <div className={styles.main}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Content />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
