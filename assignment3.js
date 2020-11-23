var sum=0;
function summation(m){
for(var i=0;i<m.length;i++){
    for(var j=0;j<m.length;j++){
        sum=sum+m[i][j]
    }
} console.log(sum)
}
var m =[
    [1,2,3],
[5,6,7],
[7,8,9]]
console.log(m)


summation(m)