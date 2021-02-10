$(()=>{

  $(window).on("scroll" , ()=>{
    let windowTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let doclength = $(document).height();
    // console.log(windowTop + "wt")
    // console.log(windowHeight + "wh")
    
    if(windowTop >=  windowHeight +200){
      $("#takeMeUp").fadeIn();
    }
    else{
      $("#takeMeUp").fadeOut();
    }
  })
})