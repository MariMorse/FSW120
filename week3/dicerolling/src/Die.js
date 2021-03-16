import React from 'react'

function Die(props)  {
    return (
        <div style={{ backgroundColor: "#66ccff"}}>
            <h1 onClick={props.onClick}>{props.number} </h1>
        </div>
        )
    }

export default Die