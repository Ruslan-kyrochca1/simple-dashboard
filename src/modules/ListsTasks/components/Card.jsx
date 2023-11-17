import React, { useState } from 'react'
import classes from '../helpers/Card.module.css'
import pen from "../assets/icons/pen.png"
import Modal from '../../../components/Modal'
import textIcon from "../assets/icons/text.png"

export default function Card() {
    const [textEntered, setTextendered] = useState(false)
    const [showedChangeBtn, setShowedChangeBtn] = useState(false)
    const [title, setTitle] = useState('')
    const [modal, setModal] = useState(false)
    const [descr, setDescr] = useState('')
    const [close, setClose] = useState(true)
    function showModalIfTrue(e){
        if(textEntered) {
            setModal(true)
            setTitle(e.target.value)
        }
    }

    function checkText(event){
        if (event.target.value === "") {
            setTextendered(false)
            return
        }
        setTextendered(true)
    }
  return (
    <>
        {close && <div>
            <div
                className={classes['card-container']}
                onMouseOver={() => { setShowedChangeBtn(true) } }
                onMouseOut={() => { setShowedChangeBtn(false) } }
            >
                <textarea
                    className={classes['card-text']}
                    type='text'
                    name="name"
                    id='text'
                    autoComplete="off"
                    placeholder='Добавить карточку...'
                    onBlur={(event) => {
                        checkText(event)
                    }}
                    onClick={(event)=>showModalIfTrue(event)} 
                />
                {descr && <img 
                            className={classes.textIcon} 
                            src={textIcon} 
                            alt="text" 
                        />}
                {showedChangeBtn && textEntered && <img src={pen} alt="pen" className={classes.chahge} />}
                <button 
                    className={classes.closeBtn}
                    onClick={()=>{setClose(false)}}
                >+</button> 
            </div>
            {modal && textEntered && (title) && <Modal 
                                                    title = {title} 
                                                    closeModal = {()=>{setModal(false)}} 
                                                    changeDescr = {(text)=>{setDescr(text)}}
                                                    descrText = {descr}
            />}
        </div>}
      </>
  )
}
