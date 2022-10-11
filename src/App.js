import { useState } from 'react';
import './App.css';
import Board from './Components/Board';
import { Reset } from './Components/Reset';
import Score from './Components/Score';


function App() {
  const win_Condition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]


  // const board = ["X","X","X","X","X","X","X","X","X"]
  const[board,setBoard]=useState(Array(9).fill(null));
  const[xplaying,setXplaying]=useState(true);
  const[score,setScore]=useState({xscore:0, oscore:0});
  const[gameover,setGameover]=useState(false);
  const handleBoxClick=(boxIdx)=>{
    const updateBoard=board.map((value,idx)=>{
      if(idx===boxIdx){
        return xplaying===true ? "X" : "O" ;
      }
      else{
        return value;
      }
     
    }) 
    const winner=checkWinner(updateBoard)
    if(winner){
      if(winner==="O"){
        let {oscore}=score
        oscore=oscore+1
        setScore({...score,oscore})
      }
      else{
        let {xscore}=score
        xscore=xscore+1
        setScore({...score,xscore})
      }
    }
    setBoard(updateBoard)
    setXplaying(!xplaying)
  }
  const checkWinner=(board)=>{
    for(let i=0;i<win_Condition.length;i++){
      const[x,y,z]=win_Condition[i]
      if(board[x]&&board[x]===board[y]&&board[y]===board[z]){
        setGameover(true)
        return board[x]
      }
    }
  }
  const resetBoard=()=>{
    setGameover(false)
    setBoard(Array(9).fill(null))
  }
  return (
    <div className="App">
      <Score score={score} xplaying={xplaying}></Score>
      <Board board={board} onClick={gameover ? resetBoard: handleBoxClick}></Board>
      <Reset resetBoard={resetBoard}></Reset>
    </div>
  );
}

export default App;
