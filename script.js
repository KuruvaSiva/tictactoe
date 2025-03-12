let player ='O';
function gamePlay(box_id){
    
    var box = document.getElementById(box_id);
    if(box.innerHTML != '') {
        lert('already selected')
        return;
    }
   

    if(gameEnd){
        document.getElementById('again').innerHTML="Game is completed, Reastart the game";
        return  ;
    }

   if(player=='X')
   {
    document.getElementById(box_id).innerHTML=player; 
      checkWinner();
       player='O';
      
   }else{
    document.getElementById(box_id).innerHTML=player;  
    checkWinner();
    player='X';
   }
   document.getElementById('turn').innerHTML="Now "+player+" is turn";
   if(gameEnd) {
    document.getElementById('turn').innerHTML='';
   }
}
 function restart(){
      window.location=`index.html`;
  }

let gameEnd =false;
function checkWinner(){
    
    let c1 = document.getElementById('box1').innerHTML
    let c2 = document.getElementById('box2').innerHTML
    let c3 = document.getElementById('box3').innerHTML
    let c4 = document.getElementById('box4').innerHTML
    let c5 = document.getElementById('box5').innerHTML
    let c6 = document.getElementById('box6').innerHTML
    let c7 = document.getElementById('box7').innerHTML
    let c8 = document.getElementById('box8').innerHTML
    let c9 = document.getElementById('box9').innerHTML
    console.log("Hellow");
   
    if(c1==player && c2 == player && c3==player){
        document.getElementById('result').innerHTML=player+ " is the winner"
        gameEnd=true;
    }
    else if(c4==player && c5 == player && c6==player){
         document.getElementById('result').innerHTML=player+ " is the winner"
         gameEnd=true;
    }
    else if(c7==player && c8 == player && c9==player){
        document.getElementById('result').innerHTML=player+ " is the winner"
        gameEnd=true;
    }
    else if(c1==player && c4 == player && c7==player){
        document.getElementById('result').innerHTML=player+ " is the winner"
        gameEnd=true;
    }
    else if(c2==player && c5 == player && c8==player){
         document.getElementById('result').innerHTML=player+ " is the winner"
         gameEnd=true;
    }
    else if(c3==player && c6 == player && c9==player){
         document.getElementById('result').innerHTML=player+ " is the winner"
         gameEnd=true;
    }
    else if(c1==player && c5 == player && c9==player){
         document.getElementById('result').innerHTML=player+ " is the winner"
         gameEnd=true;
    }
    else if(c3==player && c5 == player && c7==player){
         document.getElementById('result').innerHTML=player+ " is the winner"
         gameEnd=true;
    }else if(c1!=''&& c2!=''&& c3!=''&& c4!=''&& c5!=''&& c6!=''&& c7!=''&& c8!=''&& c9!=''){
        document.getElementById('result').innerHTML="Match is draw "
        gameEnd=true;
    }
   
    
}
