var userName = prompt ("What is your name?");
var favMovie= prompt('Whats your favourite movies type!','comedy , action , horror');
confirm ('Are you over 18 years old?') 

if (favMovie ==='comedy'){
  document.write('Welcome to the movies world ' + userName + ', Here is a suggestion for one of the best comedy movies     ');

  document.write ('<img src="https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg">');
}
else if (favMovie ==='action'){
  document.write('Welcome to the movies world ' + userName + ', Here is a suggestion for one of the best action movies     ');

  document.write('<img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg">');
}
else if (favMovie ==='horror'){
  document.write('Welcome to the movies world ' + userName + ', Here is a suggestion for one of the best horror movies      ');

  document.write('<img src="https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY209_CR1,0,140,209_AL_.jpg">');
}
else {
  alert('Welcome to the movies world ' + userName);
}


