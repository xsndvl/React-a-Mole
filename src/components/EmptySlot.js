import React, { useEffect } from "react"
import Molehill from "../pictures/molehill.png"

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 3500)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img style={{"width":"30vh"}} src={Molehill}/>
        </div>
    )
} 

export default EmptySlot