
/*  alert('It is the zombie apocalypse. Your are looting a store and suddenly a zombie bursts through the door!')
  var weapon = prompt('You search around frantically for a weapon, what do you choose? A bow and arrow, an axe, or a rubber chicken!')
  var randomNumber = Math.round(Math.random());

/  alert('You attack the zombie with your ' + weapon);

  if(randomNumber === 0) {
    alert('The zombie bites you. You lose!');
  } else if (randomNumber === 1 ){
    alert('You kill the zombie with your ' + weapon + ', you win!');
  }*/

function chooseWeapon(){
  document.getElementById("firstAlert").innerHTML="You search around frantically for a weapon, what do you choose? "
  +"A bow and arrow, an axe, or a rubber chicken!";
}
