import React from "react"

export default function Tile(props) {
    return (
    <div 
        className={"tile" + (props.selected? " selected tile--selected": "")}
        onClick={() => {
            props.handleClick()
        }}
    >
        <div className="tile-card">
            <div className="tile--green">
                <p>Yes</p>
            </div>
            <div className="tile--red">
                <p>No</p>
            </div>
        </div>
        {/* <p>I am {props.selected? "": "not"} a tile</p> */}
    </div>
    )
}