var arr=[5,'c','c',2,3,'a','c',2,4,'c',3]
var a=1
var b=0
var item
for (var i=0;i<arr.length;i++ ) {
    for (var j=i; j<arr.length; j++) {
        if(arr[i]==arr[j])
        b++;
        if(a<b)
        {
            a=b;
            item=arr[i]
        }
    }
    b=0
    console.log(`${item} ( ${a} times ) `) ; 
}