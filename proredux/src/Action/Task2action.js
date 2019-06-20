import * as ActionTypes from './Task2types';

export function UpDateA(itemc){
    return function(dispatch){
        dispatch({
            type:'UPDATEA',value1:itemc
        });
    }
}
export function UpDateB(itemd){
    return function(dispatch){
        dispatch({
            type:'UPDATEB',value2:itemd
        });
    }
}
export function UpDateC(itema){
    return function(dispatch){
        dispatch({
            type:'UPDATEC',value3:itema
        });
    }
}
export function UpDateD(itemb){
    return function(dispatch){
        dispatch({
            type:'UPDATED',value4:itemb
        });
    }
}