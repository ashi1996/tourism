
const viewElement = ()=>{

  document.querySelector("#form").addEventListener("submit", (event)=>{
    event.preventDefault();

    checkEmail();
  })

}
  const checkEmail = () =>{

    let emailValue = document.querySelector("#id_mail").value;
    
     if(emailValue.indexOf("@")  == -1 ){
      alert("Email need @");
     }
     else if(emailValue.indexOf(".")  == -1 ){
      alert("Email need .");
     }
     else {
      alert("Thank you very much your opinion is important to us!!!");
     }
  }
  

