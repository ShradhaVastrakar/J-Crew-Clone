
// ****************************************SLICK-SLIDER***********************************************
$('.instagram-cards').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   **********************************************


//navbar functionality of hover
// const unHideGiftBox = () => {
//     document.querySelector(".demo").classList.remove("hidden")
//     console.log("unhide")
//   }
//   const hideGiftBox = () => {
//     document.querySelector(".demo").classList.add("hidden")
//   }

  //navbar women option 

  const unHideWomenBox = () => {
    document.querySelector(".women-navbar").classList.remove("hidden")
    console.log()
  }
  const hideWomenBox = () => {
    document.querySelector(".women-navbar").classList.add("hidden")
  }

//   navbar new option//

const unHideNewBox = () => {
    document.querySelector(".new-navbar").classList.remove("hidden")
    console.log()
  }
  const hideNewBox = () => {
    document.querySelector(".new-navbar").classList.add("hidden")
  }

  ////////gift-section-navbar/////////

  const unHideGiftBox = () => {
    document.querySelector(".gifts-dropdown-navbar").classList.remove("hidden")
    console.log()
  }
  const hideGiftBox = () => {
    document.querySelector(".gifts-dropdown-navbar").classList.add("hidden")
  }

  //////////////men-NAVBAR part//////////////////////////

  const unHideMensBox = () => {
    document.querySelector(".men-navbar").classList.remove("hidden")

  }
  const hideMensBox = () => {
    document.querySelector(".men-navbar").classList.add("hidden")
  }

  ///////////////CASHMERE NAVBAR PART//////////////////////////

  
  const unHideCashmereBox = () => {
    document.querySelector(".cashmere").classList.remove("hidden")
    console.log()
  }
  const hideCashmereBox = () => {
    document.querySelector(".cashmere").classList.add("hidden")
  }
//////////////////home-navbar/////////////////////////////

  
const unHideHomeBox = () => {
  document.querySelector(".main-home-navbar").classList.remove("hidden")
  console.log()
}
const hideHomeBox = () => {
  document.querySelector(".main-home-navbar").classList.add("hidden")

 
}
 ////////////////stories-navbar///////////////////
  
 const unHideStoriesBox = () => {
  document.querySelector(".stories").classList.remove("hidden")
  console.log()
}
const hideStoriesBox = () => {
  document.querySelector(".stories").classList.add("hidden")
}
////////////////////////////////SALE-NAVBAR/////////////////////////////////

const unHideSaleBox = () => {
  document.querySelector(".sale").classList.remove("hidden")
  console.log()
}
const hideSaleBox = () => {
  document.querySelector(".sale").classList.add("hidden")
}
//////////////////////////SIGN-IN-PAGE////////////////////////////////
 
const signInPopup = () => {
  document.querySelector(".sign-in-page").classList.remove("hidden")
 
  
}
const closeModal = () => {
  document.querySelector(".sign-in-page").classList.add("hidden")
  
}


//////////////////////////////////  SIGN-UP-PAGE////////////////////////////////////

const signUpPopup = () => {
  document.querySelector(".sign-up-page").classList.remove("hidden")
  document.querySelector(".sign-in-page").classList.add("hidden")
  
}
const closesignup = () => {
  document.querySelector(".sign-up-page").classList.add("hidden")
}

///////////////////////////////Sign-in FUNCTONALITY//////////////////////////////////////////

let create_acc = document.querySelector(".sign-up-now");
let email_signup = document.querySelector("#e-mail-signup-page");
let password_signup = document.querySelector("#password-signup-page");
let sign_in_data = [];
create_acc.addEventListener("click", submitform)



function submitform(){
  let signupForm = JSON.parse(localStorage.getItem("SignUp"))||[]
  let obj = {
    email_signup_data: email_signup.value,
    password_signup_data: password_signup.value,
  }
   signupForm.push(obj)
   sign_in_data.push(signupForm)
   
  console.log(sign_in_data)
   localStorage.setItem("SignUp",JSON.stringify(signupForm))
   alert("Sign-Up Successfully")

}


let sign_in_now = document.querySelector(".sign-in-now");
let email_signin = document.querySelector("#e-mail-signin-page");
let password_signin = document.querySelector("#password-signin-page");

sign_in_now.addEventListener("click", signInForms)

function signInForms(){
  
  let signupForm = JSON.parse(localStorage.getItem("SignUp"))||[]
  let flag = false;
  count=0;
  nothing=0;
  signupForm.forEach((element,index) => {
   
    if(element.email_signup_data === email_signin.value){
      if(element.password_signup_data === password_signin.value){
        flag=true;
      }else{
        count++;
      }
    }else{
      nothing++;
     
    }
  });

  if(flag===true){
    alert("Sign In Succussful")
  }
  else if(count==1){
    alert("Wrong Password")
  }else{
    alert("User does not exist, You need to sign-up First")
  }
  
}

