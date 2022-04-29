import axios from "axios";
import API_KEY from "../secrets";
import { GET_NEWS, GET_MORE_NEWS } from "./types";

export const getNews = () => (dispatch: any) => {
    axios.get(`https://newsapi.org/v2/everything?q=tech&apiKey=${API_KEY}`).then(res => {
        // console.log(res.data.articles);
        
        dispatch({
            type: GET_NEWS, 
            payload: res.data.articles
        })

    }).catch(err => console.error(err))
}

export const getMoreNews = (pageNum: number) => (dispatch: any) => {
    axios.get(`https://newsapi.org/v2/everything?q=tech&page=${pageNum}&apiKey=${API_KEY}`)
    .then(res => {
        const newPageNum = pageNum++
        dispatch({
            type:GET_MORE_NEWS,
            payload: {
                count: newPageNum,
                articles: res.data.articles
            }
        })
    })
}