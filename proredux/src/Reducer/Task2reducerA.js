import * as ActionTypes from '../Action/Task2types';
const initialstate ={
    itema:5
};
export default(stateA=initialstate,action)=>
{
    debugger;
    switch(action.type)
    {
       case ActionTypes.UPDATEA:
           {
            //    console.log(stateA.age);
               return {...stateA,itema:stateA.itema+action.value1};
           }
           default:
               return stateA;
    }
}