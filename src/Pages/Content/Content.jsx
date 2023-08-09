import useApiCall from "../../hooks/useApiCall"
import styles from './Content.module.css'
import Button  from '@mui/material/Button';
import Loading from '../../components/loading/Loading'
import Error from "../../components/Error/Error";
import { useState,useEffect } from "react";
import CardItem from "../../components/card/CardItem";
import { useDispatch,useSelector } from "react-redux";
import { fetchNewsError,fetchNewsStart,fetchNewsSuccess } from "../../Redux/slice/news";

const Content = () => {
    const [gridView, setGridView] = useState(false)
    const URL = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2f231bd224374748bb24c03bb05002b9';
    const dispatch= useDispatch();
    const { newsData, loading, error } = useSelector(
        (state) => state.fetchNews  
      );
      const { apiData: fetchData, loading: fetchLoading, error: fetchError } =
      useApiCall(URL);

    useEffect(()=>{
        if(fetchLoading){
            dispatch(fetchNewsStart())
        }else if(fetchData){
            dispatch(fetchNewsSuccess(fetchData))
        }else if(fetchError){
            dispatch(fetchNewsError(fetchError))
        }else if (!navigator.onLine) {
            // Fetch data from local storage only when user is offline
            const storedData = localStorage.getItem("newsData");
            if (storedData) {
              dispatch(fetchNewsSuccess(JSON.parse(storedData)));
            }
        }
    },[fetchLoading,fetchData,fetchError,dispatch])

    if (loading) {
        return <Loading />
    }
    if (error) {

        return <Error msg={error} />
    }
    const handleView = () => {
        setGridView(!gridView)
    }
    return (
        <div className={styles.contentMain}>
            <h2>Top Headlines</h2>
            <Button size="small" variant="outlined" onClick={handleView}>Toggle View</Button>
            <div className={styles.cardsParent}>
                {newsData ?
                 newsData.map((each, index) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <CardItem id={index} each={each} gridView= {gridView}/>
                    )
                }): 
                <><h1>Please refresh to get more news</h1></>}
            </div>

        </div>
    )
}

export default Content