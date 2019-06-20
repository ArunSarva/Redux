import * as ActionTypes from './Types';
export function OnAgeUp(){
    return function(dispatch){
        dispatch({
            type:"AGE_UP",value:1
        });
    }
}
export function OnAgeDown(){
    return function(dispatch){
        dispatch({
            type:"Age_down",value:1
        });
    }
}