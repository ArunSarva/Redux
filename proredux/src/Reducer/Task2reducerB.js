// import Task2reduserA from './Task2reducerA';
import * as ActionTypes from '../Action/Task2types';
const initialstate ={
    itemb:5
};

export default(stateB=initialstate,action)=>
{
    switch(action.type)
    {
       case ActionTypes.UPDATEB:
           
                return {...stateB,itemb:stateB.itemb+action.value2};
               
           default:
                return stateB;
    }
}