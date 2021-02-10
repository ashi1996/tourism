class Game {
  constructor(_parent, _data, _numQ){
    this.parent = _parent;
    this.question = _data.question;
    this.correctQuestion = _data.correctQuestion;
    this.a = _data.a;
    this.b = _data.b;
    this.c = _data.c;
    this.numQ =_numQ;
  }
  render(){
    
    let newDiv = document.createElement("div");
    
    document.querySelector(this.parent).innerHTML = "";
      document.querySelector(this.parent).append(newDiv);
      newDiv.innerHTML = `
    
       <h2 class="text-center">${this.question}</h2>

      <select class="col-md-10  form-control mx-auto" id="select_game">
      <option value="${this.correctQuestion}" id = "correctQuestion" >Choose your answer:</option>
      
      <option value="${this.a}">${this.a}</option>
      <option value="${this.b}">${this.b}</option>
      <option value="${this.c}">${this.c}</option>
      </select> <br>

      <div class="progress col-8 mx-auto p-0 mt-5">
      <div class="progress-bar" role="progressbar" style="width: ${(this.numQ+1)*10}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${(this.numQ+1)*10}%</div>
    </div>
      `
    
  }
}