import { introductionState, actionsInterFace } from './type'
import axios from 'axios'

export let initIntroductionState: introductionState = {
    list: [],
    code: "9999",
    resultMsg: "未连接"
}


export const getIntroductionData = async () => {
    const result = await axios.get('https://zhtzhtx.github.io/tsq_web_react/static/data/Introduction.json')
    
    return result.data
}


export const introductionReducer = (state: introductionState, actions: actionsInterFace) => {
    let introductionData = actions.data
    return introductionData;
}




