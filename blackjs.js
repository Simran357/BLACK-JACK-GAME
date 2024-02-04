let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let cardsEL = document.getElementById("card")
let sums = document.getElementById("sum-el")
let playerName = "per"
let playerChips = 145
let playerEl = document.getElementById("cents")
playerEl.textContent = playerName +" :  $ " + playerChips
let message = ""
let massageEl = document.getElementById("result")
console.log(cards)
function getRandom(){
   let randomNumber = Math.floor(Math.random()*13)+1
if (randomNumber > 10){
   return 10
} else if (randomNumber === 1){
   return 11
} else{
   return randomNumber
}}

function startGame(){
   isAlive = true
   let firstCard = getRandom()
let secondCard =  getRandom()
cards = [firstCard , secondCard]
sum = firstCard + secondCard  
  randomGame()
}
   function randomGame(){
      cardsEL.textContent = "CARDS :" 
      for (let i = 0; i<cards.length ; i++){
         cardsEL.textContent += cards[i] +"  "
      sums.innerHTML = "SUM : " + sum
    if (sum === 21){
      message ="WOOH ! You'have got BLACKJACKET "
      hasBlackJack = true;
      isAlive= false;
      } else if( sum < 21){
       message = "DO you want to draw a new card ?"

    } else {
     message = "You are out of the game !"
        isAlive = false
      
    }
        massageEl.innerHTML = message
     console.log(hasBlackJack)
     console.log(isAlive)
disable()

    }
   }

    function newfuc(){
     
    if (isAlive = true){}
   enable()}
    
    

    let btnn = document.querySelector("#btn")
    let btn2 = document.querySelector("#btn1")
function disable(){
   if(sum ===21 || sum > 21 ){
      btnn.disabled = true
      btn2.disabled = false
   }}


   function enable(){
      btnn.disabled =  false;
      startGame()
btn2.disabled = true

   }