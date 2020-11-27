function prime(){
    var n,i,flag=true
    n=document.a.n.value
    n=parseInt(n)
    for(i = 2; i <= n - 1; i++ )
        if(n % i == 0){
            flag = false;
            break;
        }
    if(flag == true)
        console.log(i + "is prime")
    else
        console.log(i + "not prime")
}