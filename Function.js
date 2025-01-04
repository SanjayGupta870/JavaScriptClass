//function Declartion

function test(){
    let name = prompt(`What is YOUR NamE`);
    console.log(`Your Name is ${name}` ); 
}
test();

// function Expression 

const word = function (){
    console.log('this is function expresssion ');
}
word();

const add = function (x){
    return x+x;

}
console.log(add(7));

// IIFE 

(function ()
{
    console.log('this is life ');
})();