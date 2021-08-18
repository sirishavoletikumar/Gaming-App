import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>this is about page</h2>
            <button onClick={()=>props.history.goForward()}>Go Forward</button>
        </div>
    )
}
