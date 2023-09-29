// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buySubmit = document.querySelector('.buy-submit');
const empty_message = document.getElementById('empty');

// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

// Create An Arrow Function Called **`BuyNow`**
const buyNow =() => {
  if (userLeterPreview.textContent.replace(' ', '').length === 0){
    empty_message.innerHTML = "Please enter your name";
    empty_message.style.backgroundColor = 'red';
  }

  else if (userLeterPreview.textContent === "Your Name"){
    empty_message.innerHTML = "Enter a new text";
    empty_message.style.backgroundColor = 'red';
  }
  else {
    if (userLeterPreview.textContent.replace(' ', '').length > 15){

           alert ("...Oooopps!!! We have 15 letters left in stock, and you have exceeded the limit");
          }
          else{
            empty_message.innerHTML = "!!!Sucess!!!";
            empty_message.style.backgroundColor = 'green';
          }
        }
      }
        //Buy Now button Event
       buySubmit.onclick = () =>{
        buyNow();
       }

