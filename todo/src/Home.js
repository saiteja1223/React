import './Home.css'
import React  from 'react'
 import { useState } from 'react'

export const Home = () => {
    let [todoInput,updateInput]=useState("test")
    let[nextId,increament]=useState(3);
  let [todolist,updateTodos]=  useState(
        [
            {
                id:1,
                task:"learn react"
            },
            
            {
                id:2,
                task:"learn angular"
            },
          

        ]
    )
    console.log(todolist)
     
    function addNewTodo(){
        
       if(todoInput ===""){
        alert("add some task")
       }
       else{
       let newTodos=[
            ...todolist,

            {
               id:nextId,
               
               task:todoInput 
            }
        ]
        
        updateTodos(newTodos)
       increament(nextId+1)
             
        
        updateInput("")
       }

    }
    function deleteTodo(id){
        console.log(id);
        let updatedTodos= todolist.filter(
            (todo)=>{
               return todo.id!==id;
            }
         )
         updateTodos(updatedTodos)

    }
  return (
    <div className='container'>
        <h3 className='text-center'>Todo App Using React </h3>
        <div className='input-group mt-5 w-50'>
            <input className='form-control' type='text' onChange={(e)=>{
                let task=e.target.value;
                
                updateInput(task);
            }}  value={todoInput}/>
        
            <button type="button" class="btn btn-primary"onClick={()=>{
                addNewTodo()
            }}>Add</button>
        </div>
        <ul className='list-group mt-4 w-4' >{
            todolist.map(
                (todo)  =>{
                    return (
                        <li className='list-group-item  ' >
                            <p>{todo.task}</p>
                           
                           
                            <button className='btn' onClick={()=>{
                                deleteTodo(todo.id)
                            }}>❌</button>
                        </li>
                    )
                    
                }
                )
                }
        </ul>
    </div>
    
  )
}
