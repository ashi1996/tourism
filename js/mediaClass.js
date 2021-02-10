class Media {
  constructor(_parent, _img, _description, _page){
    this.parent = _parent
    this.img = _img;
    this.description = _description;
    this.page = _page;
  }
  render(){
    let newDiv = document.createElement("div");

   
    newDiv.className = `col-md-3 p-2 `;
     document.querySelector(this.parent).append(newDiv);
     let newDivIn = document.createElement("div");
     newDivIn.className = `boxImages`;
     newDiv.append(newDivIn);
     newDivIn.style = ` background-image: url(_images/${this.img}.jpg);background-position: center;  min-height:150px; background-size: cover; border-radius:7px;`

     newDivIn.addEventListener("click", ()=>{
       showDark(`_images/${this.img}.jpg`,this.page,this.description);
     })

  }
}