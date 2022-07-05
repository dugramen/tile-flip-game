import React from "react"

export default function Tile(props) {
    return (
    <div 
        className={"tile" + (props.selected? " selected": "")}
        onClick={() => {
            props.handleClick()
        }}
    >
        <div className="tile-card">
            <div className="tile--green"></div>
            <div className="tile--red"></div>
        </div>
        <p>I am {props.selected? "": "not"} a tile</p>
    </div>
    )
}