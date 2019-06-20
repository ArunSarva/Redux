const initialstate ={
    age:1,
    age1:1,
    age2:1,
    age3:1,
    name:"arun",
    array:[],
    abc:[]
};
var i=0;

const reducer = (state=initialstate,action) => {
    const newstate ={...state};
    switch (action.type){
        case "Update1":
            newstate.age+=newstate.age2;
            console.log(action.value)
            break;
        case "Update2" :
            newstate.age1+=newstate.age3;
            break;          
        case "Update3" :
            newstate.age2+=newstate.age;
            break;
        case "Update4" :
            newstate.age3+=newstate.age1;
            break;
        case "name" :
            {
              
                newstate.array[i] =action.value;
                console.log(newstate.array);
                i++;
              newstate.abc=newstate.array;
                // newstate.abc= newstate.array.concat(action.value);
                // console.log(newstate.abc);
                

                break;
            }                
    }
    return newstate;
};
export default reducer;