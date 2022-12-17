
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
///////////////////////ADD-TO-CART/////////////////////////////////////////

let AddTOcart = document.querySelector(".AddToCartsShop");
let cart = JSON.parse(localStorage.getItem("cart-Jcrew"))||[]
let deleted = JSON.parse(localStorage.getItem("Deleted"))||[];
let shopping_options = document.querySelector("#shopping-options");
let total = document.getElementById("fav-total")
let priceOfDress = document.querySelector("#price");

let sum = 0;
displayProducts(cart)
console.log("CART",cart)
function findingTotal(cart){
  for (let i = 0; i < cart.length; i++) {
    sum += +cart[i].price;
  }
  return sum;
}
let totalSum = findingTotal(cart)
priceOfDress.innerText = totalSum;




function displayProducts(data){
    AddTOcart.innerHTML = null;
    total.innerText = data.length;
   
  // console.log(data)

data.forEach((element,index) => {
  let card = document.createElement("div");

  let image = document.createElement("img")
  image.setAttribute("src",element.Image);

  let total_votes = document.createElement("h2")
  total_votes.innerText = `Total Votes :  ${element.total_votes}`;

  let price = document.createElement("h3")
  price.innerText = ` Price : ${element.price} $`;

  let reviews = document.createElement("h4")
  reviews.innerText = `Review : ${element.reviews}`;
 
   let Delete = document.createElement("button");
   Delete.innerText = "Delete";

    Delete.addEventListener("click", () =>{
        deleted.push(cart)
        localStorage.setItem("Deleted",JSON.stringify(cart));
        data.splice(index, 1);
        priceOfDress.innerText = totalSum-element.price;
        localStorage.setItem("cart-Jcrew", JSON.stringify(data))
        displayProducts(data)
    })


  card.append(image, price, reviews, total_votes, Delete)
  AddTOcart.append(card)
})
  
}

let checkOut = document.querySelector(".checkoutbutton");

checkOut.addEventListener("click", () =>{
  alert("Thankyou for shopping with Us, Your Dress will delivered within 10 Days.")
})


