var a
var b
a=window.prompt("Enter integer a","0")
b=window.prompt("Enter integer b","0")
if(parseInt(a,10) > parseInt(b,10))
{
    console.log(`${a} is greatest`)
}   
else if(parseInt(b, 10) > parseInt(a, 10)) 
{
console.log(`${b} is greatest`)
}                  
else
{
 console.log(a +"and" + b +"are equal")
}