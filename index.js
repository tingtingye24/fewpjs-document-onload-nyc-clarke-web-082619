// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    console.log("The Dom has loaded");
    changeText();
});

function changeText(){
    document.getElementById("text").innerHTML = "This is really cool!";
}