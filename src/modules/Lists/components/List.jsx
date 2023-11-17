import classes from '../helpers/List.module.css'
import Card from '../../ListsTasks/components/Card'
import React, { useState } from 'react'

export default function List(props) {
  const [title, setTitle] = useState(props.title)
  const [addedCard, setAddedCard] = useState([])
  const [key, setKey] = useState(0)
  const [close, setClose] = useState(true)
  function setCard(array){
    return array.map(index=> <Card key={index}/>)
  }
  function setArray(){
      setAddedCard(prev => {
        setKey(elem=>++elem)
        return [...prev, key]
      })
  }

  

  return (
    <>
      {close && <div className={classes.container}>
          <input 
            name='text'
            className={classes.title} 
            value={title}
            placeholder="Название списка"
            onChange={(event)=>{setTitle(event.target.value)}}
          />
          {setCard(addedCard)}
        <button 
        className={classes.added}
        onClick={setArray}
        >+  Добавить карточку</button>
        <button 
          className={classes.closeBtn}
          onClick={()=>{setClose(false)}}
        >+</button> 
      </div> }    
    </>
  )
}
