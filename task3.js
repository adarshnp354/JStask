var str = 'w'
var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var low = 'abcdefghijklmnopqrstuvwxyz'
var a =[]
for( var i=0;i<str.length;i++){
    if(up.indexOf(str[i])!== -1){
        a.push(str[i].toLowerCase())
    }
    else if(low.indexOf(str[i]) !== -1)
    {
        a.push(str[i].toUpperCase())
    }
    else 
    {
      a.push(str[i])
    }
  }
console.log(a.join(''))