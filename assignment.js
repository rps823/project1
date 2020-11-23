var sum=[[0,0,0],[0,0,0],[0,0,0]];
function addMatrix(m1,m2){
   
    for(var i=0;i<m1.length;i++){
        for(var j=0;j<m1[0].length;j++){
            sum[i][j]=m1[i][j]+m2[i][j]
            
            
        }
    }

}
console.log("matrix 1")
var m1=[
    [2,1,2],
    [1,2,1],
    [2,1,2]
]
console.log(m1)
console.log("matrix 2")
var m2=[[1,2,3],
[5,6,7],
[7,8,9]]
console.log(m2)
addMatrix(m1,m2)
console.log("Resultant matrix")
console.log(sum)