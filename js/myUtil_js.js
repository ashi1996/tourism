const showAndHideElement = (_btn , _element) =>{
  // let myId = _btn;
  let btn = document.querySelector(_btn);                     
  let moreInfoDive =  document.querySelector(_element);
  
  btn.addEventListener("click",()=>{
    if(moreInfoDive.style.display != "block"){
      moreInfoDive.style.display = "block";
      if(_btn == "#game_btn"){
        btn.style.display = "none";
      }

      if(_btn == "#more_info_btn"){
        btn.innerHTML  = "close";
      }

    }
    else{
      moreInfoDive.style.display = "none";
      if(_btn == "#more_info_btn"){
        btn.innerHTML  = "more info";
      }
    }
  })
}