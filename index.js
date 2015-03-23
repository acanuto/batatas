"use strict";
console.log("Batatinha");
var http=require("http"),fs=require("fs");
//console.log(http);



//------------------Browser------------------------
http.createServer(function(req,res){
  console.log(req.path);
  res.end("<h1> Batata </h1>");
  }
).listen(80);
//----------------Fim do Browser--------------------


/*

var soma=function(aa,b){
  return aa+b;
  }
  if (soma()>9)
  console.log(soma()+ " Maior que 9");
 else
 console.log(soma()+ " Menor que 9");

var b={};
b.soma=soma;
b.soma();
console.log(b.soma());
*/
