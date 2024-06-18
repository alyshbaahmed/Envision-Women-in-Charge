var button = $(`.rantChatSubmit`);
var affirmations= ["You've got this!", "You are enough!", "Your feelings are valid", "You are allowed to feel this way.", "Take care of yourself!"];

button.on("click", clearOut);

function clearOut(){
  location.reload(true);
  alert(affirmations[Math.floor(Math.random()*5)]);
}
