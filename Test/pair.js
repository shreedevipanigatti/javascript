function findPair(arr,key) {
    var c
    var b=[]
    for(var i=0;i<arr.length-1;i++) {
        c=i+1;
        if(arr[i]+arr[c]==key) {
        b.push(arr[i])
        b.push(arr[c])
        return b   
    }
}
}
var arr=[3,9,2,5,6,7]
var key=11
var res = findPair(arr,key)
console.log(res)