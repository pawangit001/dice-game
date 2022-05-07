var num=Math.random();
num=Math.floor(num*6)+1;

var randomimages="images/dice" +num +".png";//images/dice1.png to images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimages);

// for image 2

var num2=Math.random();
num2=Math.floor(num2*6)+1;

 randomimages2="images/dice" +num2 +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimages2);


if(num>num2)
{
  document.querySelector("h1").innerHTML ="Player 1 wins!";
}
else if(num2>num)
{
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
  document.querySelector('h1').innerHTML="Draw!";
}
