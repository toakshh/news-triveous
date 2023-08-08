import useApiCall from "../../hooks/useApiCall"
import styles from './Content.module.css'
import Button  from '@mui/material/Button';
import Loading from '../loading/Loading'
import Error from "../Error/Error";
import { useState } from "react";
import CardItem from "../card/CardItem";

const Content = () => {
    const [gridView, setGridView] = useState(false)
    const URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f231bd224374748bb24c03bb05002b9';
    const [news, loading, error] = useApiCall(URL);
    // console.log(news)
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
                {news.map((each, index) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <CardItem id={index} each={each} gridView= {gridView}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Content