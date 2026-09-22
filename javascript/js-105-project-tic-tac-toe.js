let cells = Array(9).fill("");
let turn = "X";
function renderBoard(){
  const board = document.getElementById('board');
  board.innerHTML = "";
  cells.forEach((val,i)=>{
    const cell = document.createElement('div');
    cell.textContent = val;
    cell.style.cssText = "height:60px;display:flex;align-items:center;justify-content:center;background:#1e293b;color:#fff;font-size:24px;cursor:pointer;border-radius:6px;";
    cell.onclick = () => play(i);
    board.appendChild(cell);
  });
}
function checkWin(){
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return lines.some(l => cells[l[0]] && cells[l[0]]===cells[l[1]] && cells[l[1]]===cells[l[2]]);
}
function play(i){
  if(cells[i] || checkWin()) return;
  cells[i] = turn;
  if(checkWin()){ document.getElementById('ticStatus').textContent = "Player " + turn + " wins!"; }
  else if(!cells.includes("")){ document.getElementById('ticStatus').textContent = "It's a draw!"; }
  else { turn = turn === "X" ? "O" : "X"; document.getElementById('ticStatus').textContent = "Player " + turn + "'s turn"; }
  renderBoard();
}
function resetGame(){ cells = Array(9).fill(""); turn = "X"; document.getElementById('ticStatus').textContent = "Player X's turn"; renderBoard(); }
renderBoard();
