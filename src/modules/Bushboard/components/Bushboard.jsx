import React from 'react'
import classes from '../helpers/Bushboard.module.css'

export default function Bushboard({child}) {

  return (
    <div
      id = "bushboard-container"
      className={classes.container}
    >
      {child}
    </div>
  )
}
