import React, { useState } from 'react'
import './index.styles.css'

export const Field = ({
  setValue,
  value
}) => {
  return (
    <div className="fieldContainer">
      <input className="inputField" type="number" value={value}/>
      <div className="buttomArea">
        <button className="buttomComponent" onClick={() => setValue(value + 1)}>+</button>
        <button className="buttomComponent" onClick={() => setValue(value - 1)}>-</button>
      </div>
    </div>
  )
}
