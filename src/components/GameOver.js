import React from 'react'

export default function GameOver(props) {
    const isDefeat = props.victory === 1
    return (
    <div className={`gameover ${props.victory > 0? "shown": "hidden"}`}>
        <div className={`${isDefeat? "defeat": "victory"} text-container`}>
            <h3 className='gameover--text'>
                {`${isDefeat? "Game Over!": "You Winner!!!!!"}`}
            </h3>
        </div>
        <div className='hover-panel' onClick={() => props.resetBoard(!isDefeat)}>
            <button>
                {isDefeat? "Retry": "New Board"}
            </button>
        </div>
    </div>)
}