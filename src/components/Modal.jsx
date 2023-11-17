import React, { useState } from 'react'
import classes from '../UI/Modal.module.css'

export default function Modal({ title, closeModal, changeDescr, descrText = '', }) {
  const [descr,setDescr] = useState(descrText)
  return (
    <container className = {classes.container}>
        <div className = {classes.modal}>
            <h2 className={classes.title}>{title}</h2>
            <textarea 
              className={classes.descr}
              type='text'
              name='name'
              autoComplete='off'
              placeholder='Добавить описание...'
              value={descr}
              onChange={(event)=>{setDescr(event.target.value)}}
            />
            <button 
            className={classes.closeBtn}
            onClick={()=>{
              changeDescr(descr)
              closeModal()}}
            >+</button>
        </div>
    </container>
  )
}
