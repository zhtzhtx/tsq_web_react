import { newsState, actionsInterFace } from './type'
import axios from 'axios'

export let initNewsState: newsState = {
    list: [],
    code: "9999",
    pageSize: 1,
    totalCount: 1
}


export const getNewsData = async () => {
    const result = await axios.get('/static/data/News.json')
    return result.data
}


export const newsReducer = (state: newsState, actions: actionsInterFace) => {
    let newsData = actions.data
    for (const i in newsData.list) {
        newsData.list[i].textContent = newsData.list[i].textContent.replace(/&nbsp;/ig, '');
        newsData.list[i].textContent = newsData.list[i].textContent.replace(/<[^>]+>/g, '');
    }
    return newsData;
}




