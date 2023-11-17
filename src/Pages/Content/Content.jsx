import useApiCall from "../../hooks/useApiCall";
import styles from "./Content.module.css";
import Button from "@mui/material/Button";
import Loading from "../../components/loading/Loading";
import Error from "../../components/Error/Error";
import { useState, useEffect } from "react";
import CardItem from "../../components/card/CardItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsError,
  fetchNewsStart,
  fetchNewsSuccess,
} from "../../Redux/slice/news";

const Content = () => {
  //to show circular progress instead of login button
  const [gridView, setGridView] = useState(false);
  const URL = `https://api.currentsapi.services/v1/latest-news?apiKey=${
    import.meta.env.VITE_APP_API_KEY
  }`;
  // const URL = `http://api.mediastack.com/v1/news?access_key=${
  //   import.meta.env.VITE_APP_API_KEY
  // }`;
  // http://api.mediastack.com/v1/news?access_key=6475ca3708e916e3d8c488f746e23564
  // -----------------------------------------------
  // This URL runs on localhost only and not on the production link...
  //------------------------------------------------
  // const URL =
  //   "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2f231bd224374748bb24c03bb05002b9";

  const dispatch = useDispatch();

  //to read data from slice
  const { newsData, loading, error } = useSelector((state) => state.fetchNews);

  //custom hook to get data from url
  const {
    apiData: fetchData,
    loading: fetchLoading,
    error: fetchError,
  } = useApiCall(URL);

  useEffect(() => {
    //checking if user is offline then show localstorage data
    if (!navigator.onLine) {
      const storedData = localStorage.getItem("newsData");
      if (storedData) {
        const localData = JSON.parse(storedData);
        dispatch(fetchNewsSuccess(localData));
      }
    } else {
      //working on basis of custom hooks response
      if (fetchLoading) {
        dispatch(fetchNewsStart());
      } else if (fetchData) {
        dispatch(fetchNewsSuccess(fetchData));
      } else if (fetchError) {
        dispatch(fetchNewsError(fetchError));
      }
    }
  }, [fetchLoading, fetchData, fetchError, dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error msg={error} />;
  }

  //toggle view mode
  const handleView = () => {
    setGridView(!gridView);
  };

  // console.log(newsData);
  return (
    <div className={styles.contentMain}>
      <h2>Top Headlines</h2>
      <Button size="small" variant="outlined" onClick={handleView}>
        Toggle View
      </Button>
      <div className={styles.cardsParent}>
        {newsData ? (
          newsData?.map((each, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <CardItem id={index} each={each} gridView={gridView} />
            );
          })
        ) : (
          <>
            <h1>Please refresh to get more news</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
