import React from 'react'
import './UserInput.css'

const userInput = (props) => {

  return <input type="text" onChange={props.change} value={props.value} className="UserInput"/>

}

export default userInput
