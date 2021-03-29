var favMovie= prompt('Whats your favourite movies type!','comedy , action , horror');
confirm ('Are you over 18 years old?') 

var answer=13;
var x = prompt ("Just to improve you are human, Please answer the following equation: x=5*2+3, x equal:");

function equAns()
{
  while (x != answer) {
    x = prompt ("Please try again x=5*2+3, x equal:");
  }
  return 5*2+3; 
}
equAns()
console.log (x, answer);


var moviesNum = prompt('How many movies pictures would you like to see?');

for(var i = 1 ; i <=moviesNum; i++ ){
  if (favMovie ==='comedy'){
    document.write ('<img src="https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg">');

  }
  else if (favMovie ==='action'){

    document.write('<img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg">');
  }
  else if (favMovie ==='horror'){

    document.write('<img src="https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY209_CR1,0,140,209_AL_.jpg">');
  }
  else {
    alert('Welcome to the movies world ');
  }

}
