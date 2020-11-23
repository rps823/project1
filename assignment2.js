var sum=0
function diagonalOfMatrix(m){
    for(var i=0;i<m.length;i++){
        for(var j=0;j<m.length;j++){
            if(i==j){
                sum=sum+m[i][j]
            }
        }
    }           
}
var m =[
    [1,2,3],
[5,6,7],
[7,8,9]]
console.log(m)
diagonalOfMatrix(m)
var sum1=0
function sumOfElements(m){
    for(var i=0;i<m.length;i++){
        if(i>0){
            for(var j=0;j<m.length;j++){
if(j<2 && i!==j){
    sum1=sum1+m[i][j]
            }
            }
        }    
    } 
   }
sumOfElements(m)
var sum3=sum+sum1
console.log(sum3)