import React, { useEffect, useState } from 'react'
import List from '../../Lists/components/List'
import classes from "../helpers/AddedList.module.css"
import request from '../../Bushboard/api/requests'

export default function AddedList() {
    

    const [newList, setNewList] = useState([])
        useEffect(()=>{
            request()
                .then(response => setNewList(response))
        }, [])

    const [idList, setIdList] = useState(newList.length + 1)
    function addList(arrayLists){
        return arrayLists.map((elem)=><List propsTitle={elem.title} propsCard = {elem.card} key={`list${elem.userId}`}/>)
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
