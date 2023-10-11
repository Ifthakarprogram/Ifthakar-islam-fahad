//  problem solved-1

var harryMome = 1000;
var apple = 400;
var orange = 300;
var totalCost = apple + orange;
console.log(totalCost);

var Apple_Orange = 700;
var returnMom = harryMome - Apple_Orange;
console.log(returnMom);

// problem solved-2

var math = 75.25;
var biology = 65;
var physice = 80;
var chymistry = 35.45;
var english = 99.50;

var totalSum = math + biology + physice + chymistry + english;
console.log(totalSum);

var orginalsum = totalSum / 5;
orginalsum = orginalsum.toFixed(2);
console.log(orginalsum);

// problem solved-3
var line1 = "I am going to be";
var line2 = "an awesome web developer";
var line_meaning = line1 + " " + line2;
console.log(line_meaning);

// problem solved-4

var inputNumber = 119;
var saraAsked = 5;
var sum = inputNumber % saraAsked;
console.log(sum);



// problem -1

var fruitAll = ["apple", "banana", "orange"]
var indexall = fruitAll.indexOf("banana");
fruitAll[1] = "mango";
fruitAll.pop();
fruitAll.push("watermelon")
console.log(indexall);
console.log(fruitAll);

// problem solving -2

var jane = 95;
var ifthakar = 85;
var tom = 66;
var afsana = 39;
var peter = 56;
var john = 40;


if(80 <= jane , ifthakar){
  console.log(" Ifthakar,Jane grade - A ");
 
 };
  if(tom >= 60){
    console.log("Tom grade - B")
 };
  if(peter >= 50){
    console.log("Pater grade - C")
 };
 if( john >= 40){
    console.log("John grade - D")
 };
 if( afsana <= 40){
    console.log("Afsana grade - F")
 }
 
// problem solved -3

var first = 13;
var second = 79;
var third = 45;

if( first,third < second){
    console.log("Big number - 79")
}
else{
    console.log("false")
}



var items1 = 13;
var items2 = 79;
var items3 = 100;

if( items1 > items2){
    if(items1 > items3){
        console.log(items1)
    }
    else{
        console.log(items3)
    }
}
else{
    if(items2 > items3){
        console.log(items2)
    }
    else(
        console.log(items3)
    )
}



var side1 = 8;
var side2 = 9;
var side3 = 8;

if( side1 == side3 && side1,side3 < side2){
    console.log("Equal triangle")
}
else{
    console.log("false false")
}

var equalsum = side1 == side3;
console.log(equalsum)





                           // ***simple note***
                           



// string variable
var bottle = "water";
var bottleColor = "yellow";
var penColor = "blue";

// number variable
var sunglassPrice = 120;

// Boolean variable
var isExpensive  = true;
var bigMen = false;

// array 
     var tableItems = ["pen", "scale", "water", "note", "bag"];
  
    // array items content quary - ("pen", "scale", "water", "note")
    var items4 = tableItems[4];
  
    // array content change
    tableItems[2] = "book";

    // array index serial number quary - (0,1,2,3,4,5)
    var noteIndex = tableItems.indexOf("note");

    // array push, pop, shift, unshift--
    tableItems.push("penboxs");
    tableItems.pop();
    tableItems.shift();
    tableItems.unshift("banana");

    // array length
    var lengthTable = tableItems.length;
    tableItems.length = 1;


//     // if, else if condition

//     // problem see rigth now -upora problem solved daya acha if related soluation


// while loop condition

var rustGiven = 0;
while( rustGiven < 7){
     console.log("rust diban diban !!");
     rustGiven ++;
     console.log(rustGiven)
}


var cakeAll = 0;
while( cakeAll <= 20){
     console.log(cakeAll);
     cakeAll = cakeAll + 2;
}


// for loop -- while ar update version


for(var roastGiven = 0; roastGiven  < 10; roastGiven++){
    console.log("roastGiven")
}


for(var i = 1; i < 20; i = i+2){
    console.log(i)
}

for( var i = 1; i < 30; i += 2){
     console.log(i)
}

// array ar --for loop

var allprice = [19, 23, 38, 39, 89, 10, 40];
for( var i = 0; i < 7; i++){
     var num = allprice[i];
     console.log(num)
}


var allprice = [19, 23, 38, 39, 89, 10, 40];
for( var i = 0; i < 7; i++){
     var num = allprice[i];
     console.log(num)
}

var items = ["bottle", "pen", "orange", "mango", "apple", "note", "cakecup"];
for( var i = 0; i < items.length; i++){
     var num = items[i];
     console.log(num)
}

var sectionName = ["blue", "red", "yellow", "green", "orange", "stillblue", "blueviolet"];
for( var i = 0; i < sectionName.length; i++){
     var colorName = sectionName[i];
     console.log(colorName)
}

// for loop break and continue condition

 
for (var i = 1; i <= 20; i++ ){
     console.log(i);
     if(i > 10){
          break;
     }
 }
 
var roustGiven = 0;
while( roustGiven <= 10){
     console.log("roustGiven");
     roustGiven++;
     if(roustGiven > 5){
          break;
     }
}

var items = ["bottle", "pen", "orange", "mango", "apple", "note", "cakecup"];
for( var i = 0; i < items.length; i++){
     var num = items[i];
     if(num == "note"){
          break;
     }
     console.log(num)
}
 
var allprice = [19, 23, 38, 39, 89, 10, 40];
for( var i = 0; i < 7; i++){
     var num = allprice[i];
     if(num > 25){
          continue;
     }
     console.log(num)
}

//for loop revers way condition

for( var i = 15; i >= 1; i--){
     console.log(i)
 }
 
 var reveresWay = 10;
 while( reveresWay > 0){
     console.log(reveresWay);
     reveresWay--;
 }
 
   










 