import React from "react"

function border(props) {
    return (
        <div className="border">
            {props.children}
        </div>
    )
}

export default border