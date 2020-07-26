//1
function pow(a,b) {
    
    var i  , pw = 1;
    for(i=0 ; i < b ;i++){
    pw = pw * a;
    }
    return pw;

}
var inputa = +prompt("enter Base to find power");
var inputb = +prompt("enter exponent to find power");
document.write("BASE= " +inputa+ " Exponent= " +inputb+ "<br> Power= "+ pow(inputa,inputb));


//2

function leapyear() {
  var year = +prompt("Enter Year to check Whether it is leapyear or not"); 
if(year % 4 == 0 || year % 400 == 0){
   alert(year + " is a Leap Year");
}else{
  alert(year + " is not a Leap Year");
}
  
}
leapyear();


//3
function area() {
  var a = +prompt("Enter first side of triangle to find the area of Triangle"); 
  var b = +prompt("Enter first side of triangle to find the area of Triangle"); 
  var c = +prompt("Enter first side of triangle to find the area of Triangle"); 


  var xx = s(a,b,c);
   var ara = Math.sqrt(xx*(xx-a)* (xx-b) * (xx-c));
document.write("Area of a triangle is : "+ara);
}
area();

function s( a,b,c){
  var res = (a+b+c)/2;
  return res;
}

//4
function main() {
  var sub1 = +prompt("Enter Marks for Subject 1"); 
  var sub2 = +prompt("Enter Marks for Subject 2"); 
  var sub3 = +prompt("Enter Marks for Subject 3"); 
  document.write("<h1>Student Marks</h1>");
  document.write("---Subject 1: "+sub1+"<br>");
  document.write("---Subject 2: "+sub2+"<br>");
  document.write("---Subject 3: "+sub3+"<br>");
  document.write("---Average: "+avg(sub1,sub2,sub3)+"<br>");
  document.write("---percentage: "+percentage(sub1,sub2,sub3)+"%");



}
main();



function avg(a,b,c){

  return (a + b + c)/3;

}


function percentage(a,b,c){

 return ((a+b+c)/300)*100;

}
//5
function find(){
var str = "this is adeeel khan";
var reg = str.search(/i/g);
document.write("i is at no : "+reg);
}
find();
//6
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

var sentence = prompt("Enter Sentence to remove vowels sentences must be of 25 characters");
sentence = sentence.slice(0,25);
document.write("Original Sentence ---> : " + "<strong>"+sentence+"</strong> <br>");
document.write("After vowel Removal ---> : " + "<strong>"+disemvowel(sentence)+"</strong>");
//7
function vowel() {
  var sentence = "Pleases read this application and give me gratuity";
  var count = 0;
  var found = false;

  for (var letter of sentence.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        {
          if (found) {
            count++;
            found = false;
          } else {
           found = true;
          }
          break;
        }
      default:
        found = false
    }
  }
  document.write("sentence --> : "+ sentence+"<br>");
  return count;
}

document.write("The Number of occurence of two vowels in Succession is : "+ vowel());
//8
function distance(){
var km = +prompt("Enter Distance Between two Cities in Km to convert in various units");
document.write("Distance Between Two Cities in KiloMeters = " +km+" Km<br>");
document.write("Distance Between Two Cities in Meters = " + meters(km)+" M<br>");
document.write("Distance Between Two Cities in Feets = " + feets(km)+" Ft<br>");
document.write("Distance Between Two Cities in Inches = " + inches(km)+" In<br>");
document.write("Distance Between Two Cities in Centimeteres = " + centimeters(km)+" Cm<br>");
}
distance();

function meters(km){
return km * 1000;


}

function feets(km){

  return km * 3281;
}

function inches(km){
  return km * 39370;
}
function centimeters(km){
return km * 100000;

}
//9
function overtime(){
var emp =1;
var ot,ovpay;
document.write("<h4>Employee OverTime Pay Calculator</h4>")
while(emp <= 10){
var whours = +prompt("Enter Working Our For Employee to count its OverTime Pay");
if(whours > 40){

ot = whours - 40;
ovpay = ot * 12;
document.write("Employee : "+emp+" overtime pay is : " +ovpay +"RS <br>");

}else{

document.write('Employee : '+emp+" need to work for more than 40 hours to get overTime <br>");


}

emp++;
}

}

overtime();
//10
function notes(){

document.write("<h4>Currency Notes Denomination</h4>")
var amt = +prompt("Enter amount for withdrawal");
var hundreds = parseInt((amt / 100));
var fifties = parseInt((amt % 100)/50);
var tens = parseInt((((amt % 100) % 50)/10));
document.write("you will have "+hundreds+ " Hundred , "+fifties+" fifty , "+tens+ " ten -- Notes ");

}

notes();