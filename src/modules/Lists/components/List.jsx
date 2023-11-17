import classes from '../helpers/List.module.css'
import Card from '../../ListsTasks/components/Card'
import React, { useState } from 'react'

export default function List( { propsTitle, propsCard = [] } ) {
  const [title, setTitle] = useState(propsTitle)
  const [addedCard, setAddedCard] = useState(propsCard)
  const [key, setKey] = useState(0)
  const [close, setClose] = useState(true)
  function setCard(array){
    return array.map((elem)=> <Card nameText={elem.text}  id={`Card${elem.id}`} key={elem.id}/>)
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
