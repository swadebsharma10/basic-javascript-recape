/*** If- Else Statement***/ 


// Example no: 01
// var nayok = 'Hero Alom';
var nayok = 'sakib khan';

if(nayok=='salman'){
    console.log('Marbo ekhane lass porbe sosane');
}
else if(nayok=='sakib khan'){
    console.log('Tumi amr jibon')
}
else{
    console.log('Marbo ekane lass porbe Boguray')
}

// Example No:2
var num5 = 40;
var num6 = 20;
if(num5 ==30 && num6 ==20){
    console.log('This is same');
}
else if(num5 ==100 ||num6 ==20){
    console.log('this is 100')
}
else{
    console.log('I dont know')
}

// example no:03
var num5 = 150;
var num6 = 200;

if (num5 >100){
    console.log('This is beger then 100')
}
else if(num5 < 100){
    console.log('this is smaller then 100')
}
else if( num5 === 100){
    console.log('This is equal of 100')
}
else{
    console.log('I do not know about this')
}

// Example: 04

var num1= 200;
var num2 = 300;
var num3 = 600;

if (num1> num2 && num1>num3 ){
    console.log('num1 is Biggest than Others');
}
else if(num2 > num3){
    console.log('Num2 is Biggest')
}
else{
    console.log('num3 is biggest')
}

// Example no: 05 Nested If-else:
// plz cheek number ==30 and it is typeof string.

var number = 30;

if (number == 30){
    if(typeof number == 'string'){
        console.log('All is Okk')
    }
    else{
        console.log('number is 30 but not string');
    }
}
else{
    console.log('Nothing..Everything is wrong')
}