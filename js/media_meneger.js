const createMedia =(media_pics_ar)=>{
  media_pics_ar.map(item =>{
    let newImage = new Media("#media_img", item.namePic,item.page,item.description);
    newImage.render();
  })
}

  // const renderDarkWindow = () => {
  //   document.querySelector("body").innerHTML += `
  //   <div class="dark_window" id="id_dark_window">
  //   <div class="dark_box_inside">
  //     <img id="id_dark_img" src="" class="w-50 float-left mr-2">
  //     <h2 id="id_dark_title"></h2>
  //     <p id="id_dark_p"></p>
  //     <button id="dark_close_btn" class="btn btn-danger">close</button>
  //   </div>
  // </div>
  //   `
  // }

  
  const declareDarkEvents = () => {
    document.querySelector("#dark_close_btn").addEventListener("click",() => {
      document.querySelector("#id_dark_window").style.display = "none";
    })
  }
  
  const showDark = (_img,_title,_info) => {
    document.querySelector("#id_dark_window").style.display = "flex";
    document.querySelector("#id_dark_img").src = _img;
    document.querySelector("#id_dark_title").innerHTML = _title;
    document.querySelector("#id_dark_p").innerHTML = _info;
  
  }