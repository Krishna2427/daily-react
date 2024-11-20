import { useReducer, useRef } from "react";

const  ACTION_TYPE={
    CREATE : 'CREATE',
    UPDATE :'UPDATE',
    DELETE : 'DELETE'
}

const intialState = [
    {id: 1, name:'Krishna Reddy', age: 28},
    {id:2, name:'loki ', age: 25},
    {id:3, name:'venkat', age:24}
]

function reducer(state, action){
      switch(action.type){
        case ACTION_TYPE.CREATE:
            return [...state, {id:Date.now(),...action.payload}];
        case ACTION_TYPE.UPDATE:
            return state.map((item)=>
              item.id === action.payload.id ? {...item,...action.payload}:item
            );

        case ACTION_TYPE.CREATE:
            return state.filter((item)=> item.id !== action.payload.id)   
        default:
            return state;     
      }
}

const CrudWithReduc=()=>{
    const [state, dispatch] = useReducer(reducer, intialState);

    const nameRef = useRef();
    const ageRef = useRef();
    const editingIdRef = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const age = ageRef.current.value;

        if(editingIdRef.current){
           dispatch({
            type:ACTION_TYPE.UPDATE,
            payload:{id: editingIdRef.current, name, age},
           });
           editingIdRef.current= null;
        }else{
            dispatch({
                type:ACTION_TYPE.CREATE,
                payload:{name, age}
            })
        }
        nameRef.current.value ='';
        ageRef.current.value ='';
    }
    const handleEdit = (item)=>{
        nameRef.current.value = item.name;
        ageRef.current.value  = item.age;
        editingIdRef.current  = item.id;
        nameRef.current.focus();
    }
    const handleDelete =()=>{
        dispatch({type:ACTION_TYPE.DELETE, payload:{id}});
    }
    return(
        <div>
            <h1>Crud With useReducer and UseRef</h1>
        <form>
            <input type="text" 
            ref={nameRef}
            placeholder="Name"
            required/>

            <input type="number" 
            placeholder="Age"
            ref={ageRef}/>

            <button type="submit">{editingIdRef.current ? 'Update':'Add'}</button>
        </form>
        <ul>
            {state.map((item)=>(
                <li key={item.id}>
                    {item.name}({item.age} years)
                    <button onClick={()=> handleEdit(item)}>Edit</button>
                    <button onClick={()=> handleDelete(item.id)}>DELETE</button>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default CrudWithReduc;


