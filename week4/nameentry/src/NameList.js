import React from 'react'

function nameItems(props) {
    const items = props.items
    const nameItems = items.map(item => {
        return (
            <li key={item.key}>{item.text}
            </li>
        )
    })
    return(
        <span>{nameItems}</span>
    )
}






export default nameItems