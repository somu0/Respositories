var turn = 1;
function playerAction(elem){
    if(turn ==1){
        elem.innerHTML = "X";
        document.getElementById("p1").innerHTML="Player 2";
        turn=2;
    }
    else if(turn ==2){
        elem.innerHTML = "O";
        document.getElementById("p1").innerHTML="Player 1";
        turn=1;
    }
}
