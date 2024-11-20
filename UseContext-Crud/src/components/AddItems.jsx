import { useContext, useState } from "react"
import { CrudContext } from "../context/CrudContext";


const AddItems = ()=>{
    const [name, setName] = useState('');
    const {creatItem} = useContext(CrudContext)

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        creatItem({name});
        setName('');
    }
    return(
        <form onSubmit={handleSubmit}>
             <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Add Item"/>
            <button type="submit">Add</button>
        </form>
    )
};
export default AddItems;