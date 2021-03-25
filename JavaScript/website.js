

var userName = prompt ("What is your name?");
var time = prompt ("what time is it in 24 hour time?");

if (time < 12){
  alert ('Good morning ' + userName);
}
else if (12<time && time<17){
  alert('Good afternoon ' + userName);
}
else if (17<time && time<24){
  alert ('Good evening ' + userName);
}
else {
  alert('Welcome to my website ' + userName);
}

confirm ('Are you over 18 years old?') 

document.write ('<img src="https://cdn.dribbble.com/users/23012/screenshots/2994574/wlecome.gif">')