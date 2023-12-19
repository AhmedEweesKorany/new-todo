import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { MdDelete } from "react-icons/md";

export default function Home(){
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3010/get").then(e=>setTodos(e.data)).catch(e=>console.log(e))
    },[todos])

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3010/delete/${id}`).then(re=>{
        }).catch(e=>console.log(e))
    }
    return(<div className="home">
    <h1>To do List</h1>

    <Create/>

    {
    todos.length === 0 ?<h1 style={{textTransform:"capitalize"}}>your Tasks Will added here</h1>:
    todos.map(item=>{
       return  <div className="one-task" key={item.id}>
            {item.task}
            <MdDelete size={24} style={{cursor:"pointer"}} onClick={()=>{handleDelete(item._id)}}/>
        </div>
    })}
    </div>)
}