const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const palindromeChecker = document.getElementById('palindrome-checker');
const result = document.getElementById('result');

// default to none first. result will only appear when check button is clicked
result.style.display = 'none';

function checkPalindrome(event) {
  event.preventDefault();
 
 // convert text to lowercase and remove non-alphanumeric characters, and spaces
  const str = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, ''); 
  const reversedStr = str.split('').reverse().join(''); // reverse the string

  if (str === reversedStr && str !== null && str !== '') { //check the orig. string and the reversed. it should strictly match
    result.innerHTML = `<span class="palindrome">${textInput.value} is a palindrome.</span>`;
    result.style.display = 'block'; //show the result div
  } 

  else if (str === '' || str === null) {
    alert("Please input a value.");
  }
  
  else {
    result.innerHTML = `<span class="not-palindrome">${textInput.value} is not a palindrome.</span>`;
     result.style.display = 'block'; //show the result div
  }

 
}

checkBtn.addEventListener("click", checkPalindrome);


