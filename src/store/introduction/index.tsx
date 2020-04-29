import React, { useReducer, useEffect } from 'react';

import { initIntroductionState, introductionReducer, getIntroductionData } from './reducer';
import { Props } from './type'

export const IntroductionContext = React.createContext(initIntroductionState);
const Provider = (props: Props) => {
    const [state, dispatch] = useReducer(introductionReducer, initIntroductionState);
    useEffect(()=>{
        getIntroductionData().then(resp=>{
            if(resp.code === '0000'){
                dispatch({type:'introduction',data:resp})
              }
        })
    },[])
    return (
        <IntroductionContext.Provider value={ state }>
            {props.children}
        </IntroductionContext.Provider>
    );
}
export default Provider