import React, { useEffect, useState} from 'react'
import List from '../../Lists/components/List'
import classes from "../helpers/AddedList.module.css"
import axios from 'axios'

export default function AddedList() {
    const URL = "https://jsonplaceholder.typicode.com/todos"
    

    const [newList, setNewList] = useState([])
    const [idList, setIdList] = useState(newList.length + 1)
    async function fetchProducts(){
        const response = await axios.get(URL)
        console.log(response.data)
        await addList(response.data)
    }
    useEffect(()=>{
        setNewList(fetchProducts())
    }, [])
    function addList(arrayLists){
        console.log(addList)
        return arrayLists.map((elem)=><List title={elem.title} key={elem.id}/>)
    }
    function setArray(){
        setNewList(prev => {
            setIdList(elem=>++elem)
            return [...prev, idList]
        })
    }

    
  return (
    <>
        <a
        className={classes.link}
         href="#btn">
            <button 
            id = "btn"
            className={classes.addBtn}
            onClick = {setArray}
            >+ Добавить список</button>
        </a>
        {addList(newList)}
    </>
  )
}
