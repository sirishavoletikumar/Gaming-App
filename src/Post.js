import React from 'react'

export default function Post(props) {
    return (
        <div>
            <h2>This is Post Page</h2>
            {props.cat.map((cat)=>(
                <p>{cat}</p>
            ))}
        </div>
    )
}
