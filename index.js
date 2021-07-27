


function startGame(){
 
  for(i=1;i<=9;i++){
    clearBox(i);
  }
 
 
  document.turn = "X";
  document.winner = null;
  //korzystamy z funkcji setMessage
  setMessage(document.turn + " get's to start");//X jako pierwszy
  
}



function setMessage(msg){
  document.getElementById("message").innerText=msg;
  }



/*
//1 wersja funkcji
function nextMove(square){
  square.innerText = document.turn;//teks to zmienna z innej funkcji - start game
  switchTurn();      
}

*/


function nextMove(square){
  
  if (document.winner !== null){
    setMessage(document.turn + " already won");
  } else if (square.innerText === ''){//jesli square jest pusy
 //wybierz X - bo x jest jako pierwszy
 square.innerText = document.turn;//tekst to zmienna z innej funkcji - start game
 switchTurn();      
 
 } else {//jesli square nie jest pusty - komunikat - div setMessage
   setMessage("Pic another square");  
   }
  
}




function switchTurn(){
  if (checkForWinner(document.turn)){
      setMessage("Congrats" + document.turn +", you won!");
      document.winner= document.turn;
    } else if (document.turn == "X"){//uwaga na == oraz = jaka jest roznica?
    document.turn = "O";
    setMessage("It's " + document.turn + " 's turn");//parametrem funkcji jest ten komunikat
    } else {
    document.turn = "X";
    setMessage("It's " + document.turn + " 's turn");//parametrem funkcji jest ten komunikat
      }
    
}




function checkForWinner(move){
  var result=false;
  
  if (checkRow(1,2,3, move)||
      checkRow(4,5,6, move)||
      checkRow(7,8,9, move)||
      checkRow(1,4,7, move)||
      checkRow(2,5,8, move)||
      checkRow(3,6,9, move)||
      checkRow(1,5,9, move)||
      checkRow(3,5,7, move)){
       
       result=true;
       
     }
  
    return result;    
  
  
}


function checkRow(a, b, c, move){
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
       result = true;
      }
  
  return result;
}



function getBox(number){
  
  return document.getElementById("s"+ number).innerText;
  //console.log(document.getElementById("s"+ number).innerText;)
  //console.log(number);
}

function clearBox(number){
  document.getElementById("s"+ number).innerText="";
}

