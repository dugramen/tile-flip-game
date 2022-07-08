// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Board from "./components/Board"
import Tile from "./components/Tile"
import GameOver from './components/GameOver';
import LevelSelector from './components/LevelSelector';
// import data from './levelData'

let lastFlips = []

function App() {
  const [tiles, setTiles] = React.useState([])
  const [clickCount, setClickCount] = React.useState(3)
  const [level, setLevel] = React.useState({
    x: 4,
    y: 4,
    tries: 2
  });
  const [victory, setVictory] = React.useState(0);
  const css = React.useRef({display:"grid"})
  let tileDivs = tiles.map(tile => {
    return <Tile
      key={tile.id}
      selected={tile.selected}
      handleClick={() => flipTile(tile.id)}
    />
  })

  React.useEffect(resetBoard, [])
  React.useEffect(() => {
    if (clickCount === 0) {
      if (tiles.length > 0 && tiles.reduce((prev, curr) => prev && curr.selected)) {
        setVictory(2);
      } else {
        setVictory(1);
        // resetBoard();
      }
    }
  }, [clickCount, tiles])  

  function getTilesFlipped(oldTiles, id) {
    let newTiles = oldTiles.map(ob => {
      return {...ob}
    });
    [-1, 0, 1].forEach(x => {
      if (Math.floor(id/level.x) !== Math.floor((id+x)/level.x)) {return};
      [-level.x, 0, level.x].forEach(y => {
        const num = Number(id)+Number(x)+Number(y)
        if (num < 0 || num >= newTiles.length) {return}
        console.log(num)
        console.log(newTiles[num])
        newTiles[num].selected = !newTiles[num].selected;
      })
    })
    return newTiles
  }

  function flipTile(id) {
    setClickCount(oldClickCount => oldClickCount-1)
    setTiles(oldTiles => getTilesFlipped(oldTiles, id))
  }

  function resetBoard(newBoard = true) {
    setClickCount(level.tries)
    let res = []
    for (let i = 0; i < level.x * level.y; i++) {
      res.push({
        selected: true,
        id: i,
      })
    }
    if (newBoard) {
      lastFlips = []
      for (let i = 0; i < level.tries; i++) {
        let index = Math.floor(Math.random() * level.x * level.y)
        res = getTilesFlipped(res, index)
        lastFlips.push(index)
      }
    } else {
      for (let i = 0; i < lastFlips.length; i++) {
        res = getTilesFlipped(res, lastFlips[i])
      }
    }
    css.current = {
      gridTemplateColumns: `repeat(${level.x}, 1fr)`,
      gridTemplateRows: `repeat(${level.y}, 1fr)`,
    }
    setTiles(res)
    setVictory(0)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setLevel(oldLevel => {
      return {
        ...oldLevel,
        [name]: value
      }
    })
  }

  return (
    <div className="App">
      <LevelSelector
        data={level}
        handleChange={handleChange}
        retryBoard={resetBoard}
        resetBoard={() => resetBoard(false)}
      />
      <h2>Remaining Clicks: {clickCount}</h2>
      <div className='board-container'>
        <Board
          tileDivs={tileDivs}
          css={css}
        />
        <GameOver
          handleClick={resetBoard}
          victory={victory}
          score={level.tries}
          resetBoard={resetBoard}
        />
      </div>
    </div>
  );
}

export default App;
