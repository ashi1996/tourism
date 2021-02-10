class Img{
  constructor(_parent,_img, _page, _description){
    this.parent = _parent;
    this.img = _img;
    this.page = _page
    this.description = _description;
  }
  render(){
    let newDiv = document.createElement("div");
    document.querySelector(this.parent).append(newDiv);

    newDiv.className = "col-sm-6 p-3";
    let  insideDiv = document.createElement("div");
    newDiv.append(insideDiv);
    insideDiv.className = `moveDown  text-center text-white font-weight-bolder`
    insideDiv.style = `min-height: 150px; background-image: url(_images/${this.img}.jpg); background-position: center; background-size: cover; color: white; border-radius: 10px;">`
    insideDiv.innerHTML = `<h2>${this.description}<h2>`;
    
    insideDiv.addEventListener("click",()=>{
      window.open(`${this.page}.html`);
    })
  }
}