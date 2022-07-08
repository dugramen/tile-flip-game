import React from "react";

export default function LevelSelector(props) {
    const [visible, setVisible] = React.useState(false)


    const {x, y, tries} = props.data
    return (<div className="level-selector">
        <div className="title level-selector--title" onClick={() => setVisible(oldVisible => !oldVisible)}>
            <h2>Level Selector</h2>
            <div className={visible? "arrow-up": "arrow-down"}>
                <i className="fi fi-rr-angle-small-down"></i>
            </div>
        </div>
        <div className={"level-selector-inputs " + `fold ${visible? "visible": "hidden"}`}>
            <h3>Board Size</h3>
            <div className="board-size">
                <input
                    name="x"
                    type="number"
                    min="1"
                    value={x}
                    onChange={props.handleChange}
                />
                <input
                    name="y"
                    type="number"
                    min="1"
                    value={y}
                    onChange={props.handleChange}
                />
            </div>
            <h3>Tries</h3>
            <input
                name="tries"
                type="number"
                min="1"
                value={tries}
                onChange={props.handleChange}
            />
        </div>
        <div className="reset-container">
            <button 
                className='retry'
                onClick={props.retryBoard}
                >
                New
            </button>
            <button
                className="reset"
                onClick={props.resetBoard}
                >
                Reset
            </button>
        </div>
    </div>)
}