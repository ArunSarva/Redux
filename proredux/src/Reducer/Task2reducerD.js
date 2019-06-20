import * as ActionTypes from '../Action/Task2types';
const initialstate ={
    itemd:5
};
export default(stateD=initialstate,action)=>
{
   
    switch(action.type)
    {
       case ActionTypes.UPDATED:
           {
            //    console.log(stateA.age);
               return {...stateD,itemd:stateD.itemd+action.value4};
           }
           default:
               return stateD;
    }
}