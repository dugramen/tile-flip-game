import react from "react"

export default function Board(props) {
    const {css, tileDivs} = props
    return (
    <div 
        className="tile-container" 
        style={css.current}
        >
        {tileDivs}
    </div>)
}