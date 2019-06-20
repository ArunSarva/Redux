// import AgeUpDown from "../Components/AgeUpDown";
import * as ActionTypes from '../Action/Types';

const initialstate ={
    age:5
};
export default(state=initialstate,action)=>
{
    switch(action.type)
    {
       case ActionTypes.AGE_UP:
           {
               console.log(state.age);
               return {...state,age:state.age+action.value};
           }
           case ActionTypes.Age_down:
           {
            if(state.age>0){
                return {...state,age:state.age-action.value};
            }
            else
            {
                alert("age is 0")
                return state;
            }   
           }
           default:
               return state;
    }
}