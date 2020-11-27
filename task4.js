function sqrsum(arr){
    var sum=0
    i=arr.length
    while(i--)
    sum+=Math.pow(arr[i],2)
    return sum
}
console.log(sqrsum([33,22,11]))