import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  const style = {
    fontWeight: 700,
    color: '#A55'
  }
  return (
    <div className="UserOutput">
      <p className="UserOutput__user">Username: <span style={style}>{props.username}</span></p>
      <p className="UserOutput__dsc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus ipsum sit quaerat
        reiciendis, veniam ipsa ex aliquid illum explicabo adipisci. <br/>
        {props.children}
      </p>

    </div>
  )
}

export default userOutput
