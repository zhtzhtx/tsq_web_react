import React, { useReducer, useEffect } from 'react';

import { initNewsState, newsReducer, getNewsData } from './reducer';
import { Props } from './type'

export const NewsContext = React.createContext(initNewsState);
const Provider = (props: Props) => {
    const [state, dispatch] = useReducer(newsReducer, initNewsState);
    useEffect(()=>{
        getNewsData().then(resp=>{
            if(resp.code === '0000'){
                dispatch({type:'news',data:resp})
              }
        })
    },[])
    return (
        <NewsContext.Provider value={ state }>
            {props.children}
        </NewsContext.Provider>
    );
}
export default Provider