import React from 'react'
import classes from '../helpers/Bushboard.module.css'
import request from '../api/requests'

export default function Bushboard({child}) {
  request()
  return (
    <div
      id = "bushboard-container"
      className={classes.container}
    >
      {child}
    </div>
  )
}
