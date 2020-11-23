
 
function printSubMatrix(m){
    var result=[[],[]]
for(var i=0;i<m.length;i++){
    if(i>0){
        for(var j=0;j<m.length;j++){
           
            if(j>0){
               result=m[i][j] 
               console.log(result)
            }
        }
    }
    
}

}

var m =[
    [1,2,3],
[5,6,7],
[7,8,9]]
console.log(m)
printSubMatrix(m)
