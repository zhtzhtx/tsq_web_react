import React, { useReducer, useEffect } from 'react';

import { initViewState, viewReducer, getViewData } from './reducer';
import { Props } from './type'

export const ViewContext = React.createContext(initViewState);
const Provider = (props: Props) => {
    const [state, dispatch] = useReducer(viewReducer, initViewState);
    useEffect(()=>{
        getViewData().then(resp=>{
            if(resp.code === '0000'){
                dispatch({type:'View',data:resp})
              }
        })
    },[])
    return (
        <ViewContext.Provider value={ state }>
            {props.children}
        </ViewContext.Provider>
    );
}
export default Provider