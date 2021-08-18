import React from 'react'

export default function Display() {
    return (
        <div>
            <h2>This is Display page</h2>
            {props.Category.map((cat) => (
             <p>{cat}</p>
      ))}
        </div>
    )
}
