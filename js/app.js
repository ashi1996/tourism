window.onload = () => {
  init();
}

const init = () => {
  AOS.init();
  indexCreateImg(pics_ar);
  burgerNav();


  
    DarkWindow.createDarkWindow();
    setTimeout(() => {
      DarkWindow.showDarkWindow('_images/callMe.jpg', "Call me back:");
    }, 15000);
   
}