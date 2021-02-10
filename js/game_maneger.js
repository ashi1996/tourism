let score = 0;
let numQ = 0;
let data = [
  {question:"10 + 8 / 4 ?" , a:"5", b:"12",c:"6", correctQuestion: "12"},
  {question:"Who killed Abel?" , a:"Kine", b:"Moses",c:"David",correctQuestion: "Kine"},
  {question:"how old is trump ? " , a:"81", b:"74",c:"77",correctQuestion: "74"},
  {question:"What a song Tom Jones sings?" , a:"she is a lady", b:"love is in the air",c:"aint no body",correctQuestion: "she is a lady"}, 
  {question:"Which country is the smallest in the world?" , a:"usa", b:"israel",c:"vatican city",correctQuestion: "vatican city"},
  {question:"What is the distance from the moon to the earth?" , a:"384,400", b:"1000,000",c:"545,000",correctQuestion: "384,400"},
  {question:"Who was the first president of the United States?" , a:"George Washington", b:"trump",c:"bush",correctQuestion: "George Washington"},
  {question:"When was the State of Israel established??" , a:"1960", b:"1930",c:"1948",correctQuestion: "1948"},
  {question:"When did the Twin Towers fall?" , a:"04/02/2011", b:"11/09/2001",c:"07/09/1998",correctQuestion: "11/09/2001"},
  {question:"Who invented the lamp?" , a:"Ami Argand", b:"jon lenon",c:"avi biter",correctQuestion: "Ami Argand"},
  {question:"" , a:"", b:"",c:"",correctQuestion: ""}
]

const initGame = () => {
  
  startGame(data);
}


const startGame = (_data) => {

  document.querySelector("#nun_question_id").innerHTML = `Question: ${numQ+1}`
    let ask = new Game("#realy_game", _data[numQ], numQ);
    ask.render()
    numQ++;
    gameing();
}


const gameing = () => {
  if(numQ  < 11){
    document.querySelector("#select_game").addEventListener("change", () => {

      let answer = document.querySelector("#select_game").value;
      let correctQuestion =  document.querySelector("#correctQuestion").value;
  
      if (answer == correctQuestion) {
        score += 10;
      }
      document.querySelector("#select_game").disabled = "true";
      startGame(data);
      
    })
  }

  else{
    document.querySelector("#game_body").innerHTML = `
    <p>calculate your score</p>
    <div class="spinner-grow text-danger" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only ">Loading...</span>
  </div>`

  setTimeout(()=>{

    if(score < 50){
      document.querySelector("#game_body").innerHTML =`<h3>your score is: ${score}</h3>
      try harder`
      document.querySelector("#game_body").style.color = "red"

    }

    else if(score >= 50 && score <= 80){
      document.querySelector("#game_body").innerHTML =`<h3>your score is: ${score}</h3>
      very good`
      document.querySelector("#game_body").style.color = "orange"

    }

    else if(score >= 90){
      document.querySelector("#game_body").innerHTML =`<h3>your score is: ${score}</h3>
      you are very genius`
      document.querySelector("#game_body").style.color = "green"

    }

  },1500)

  }

}

