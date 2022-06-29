/*
! basic-html-template
? Info:
? This program will increment a variable when a button is clicked.
? Then we will change said button's markup to display the new value.
* Code Summary:
* There Variable called count, that is a let as it has to be reassigned, and var is not good for code readablility.
* Then we get the button from the DOM and store it in a constant as it will not change.
* Then we register an event listener to the button; when it is clicked, we increment the count variable and change it's markup.
*/
let count = 0;
let btnCount = document.getElementById("btnCount");

btnCount.addEventListener("click", () => {
  count++;
  btnCount.innerText = `Count is: ${count}`;
});
