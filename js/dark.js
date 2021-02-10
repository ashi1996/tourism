class DarkWindow {
  // static -> מאפשר לקרוא ישירות למטודה בלי לייצר
  // משתנה שמשתמש במחלקה 
  // let dark = new DarkWindow() // חוסך את זה
  //  DarkWindow.showInfo() כלומר נוכל לכתוב ישר

  

  static createDarkWindow() {
    // הרעיון שלא נצטרך לחבר גם סי אס אס לקובץ הראשי
    let darkWindowCss = {
      position: "fixed",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.9)",
      top: 0,
      left: 0,
      zIndex: 999,
      display: "none",
      justifyContent: "center",
      alignItems: "center"

    }

    let darkBoxCss = {
      maxWidth: "500px",
      width: "100%",
      minHeight: "400px",
      background: "white",
      border: "2px solid grey",
      textAlign: "center",
    }

    $("body").prepend(`
    <div class="dark_window">
    <div class="dark_box p-3">
    <button class="btn btn-danger float-right" id="close">X</button>
        <img src="" style="border-radius:7px;" class="w-50 mb-3">
        <h3></h3>

        <div class="mx-auto col-md-6 ">
        
        <labal>Name:</labal>
        <input type="text" class="mb-1 form-control">
        
        <labal>Phone:</labal>
        <input type="tel" class="mb-1 form-control">

        <labal>Mail:</labal>
        <input type="Mail" class="mb-1 form-control">
        <button class="btn btn-info " id="send">Send</button>
        </div>
      </div>

    </div>
    `)

    $(".dark_window").css(darkWindowCss);
    $(".dark_window .dark_box").css(darkBoxCss);

    DarkWindow.darkViewEvents();
  }

  static darkViewEvents(){

    $(".dark_window #close").on("click",() => {
      $(".dark_window").fadeOut(300);
      $("header nav").css("z-index" , 999 );
      $("#holdGoUp button").removeClass("d-none");
    })

    $(".dark_window #send").on("click",() => {
     
       let name = $(`input[type="text"]`).val();
       let phone = $(`input[type="tel"]`).val();
       let mail = $(`input[type="mail"]`).val();
      
      if(name == "" || phone == "" || mail == ""  ){
        alert("Please fill all fields")
      }
      else{
        $("header nav").css("z-index" , 999 );
        $("#holdGoUp button").removeClass("d-none");
        alert("Thenks we will call you back")
        $(".dark_window").fadeOut(300);
      }
    })
  }

  static showDarkWindow(_urlImg,_titleH3){
    $("header nav").css("z-index" , 0 );
    $("#holdGoUp button").addClass("d-none");;
    $(".dark_window").fadeIn(600);
    // בברירת מחדל הפייד אין הופכים את האלמנט לבלוק
    $(".dark_window").css("display","flex");
    $(".dark_window img").attr("src",_urlImg);
    $(".dark_window h3").html(_titleH3);
  }


}