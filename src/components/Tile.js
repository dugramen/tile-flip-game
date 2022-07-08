import React from "react"

export default function Tile(props) {
    const [isHovering, setIsHovering] = React.useState(false);
    const [style, setStyle] = React.useState({boxShadow: "0px 0px 0px 0px black"})
    function handleMouseMove(event) {
        if (!isHovering) {
            // setStyle({boxShadow: "0px 0px 4px 0px black"})
            return
        }

        var bounds = event.target.getBoundingClientRect()
        var x = event.clientX - (bounds.left + bounds.right)/2.0;
        var y = event.clientY - (bounds.top + bounds.height/2.0);
        var l = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        x /= l;
        y /= l;
        setStyle({boxShadow: `${-x*2}px ${-y*2}px 2px 0px black`})
    }
    function reset() {
        setIsHovering(false)
        setStyle({boxShadow: "0px 0px 0px 0px black"})
    }

    return (
    <div 
        className={"tile" + (props.selected? " selected tile--selected": "")}
        onClick={() => {
            props.handleClick()
        }}
    >
        <div className="tile-card" onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={reset}>
            <div className="tile--green" style={style}>
                <p>Yes</p>
            </div>
            <div className="tile--red" style={style}>
                <p>No</p>
            </div>
        </div>
        {/* <p>I am {props.selected? "": "not"} a tile</p> */}
    </div>
    )
}