import { viewState, actionsInterFace } from './type'
import axios from 'axios'

export let initViewState: viewState = {
    list: [],
    code: "9999",
    "pageSize": 1,
    "totalCount": 1
}


export const getViewData = async () => {
    const result = await axios.get('/static/data/View.json')
    
    return result.data
}


export const viewReducer = (state: viewState, actions: actionsInterFace) => {
    let viewData = actions.data
    return viewData;
}




