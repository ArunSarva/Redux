import * as ActionTypes from '../Action/Task2types';
const initialstate ={
    itemc:5
};
export default(stateC=initialstate,action)=>
{
    debugger;
    switch(action.type)
    {
       case ActionTypes.UPDATEC:
           {
            //    console.log(stateA.age);
               return {...stateC,itemc:stateC.itemc+action.value3};
           }
           default:
               return stateC;
    }
}