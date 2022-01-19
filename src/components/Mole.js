import React, { useEffect } from "react"
import moleImg from "../pictures/mole.png"

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return(
        <div>
            <img style={{"width":"30vh"}} src={moleImg} alt="Mole Picture" onClick={props.handleClick}></img>
        </div>
    )
}

export default Mole