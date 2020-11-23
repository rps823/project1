var sum=0;
var avr=0;
function average(m){
    


    for(var i=0;i<m.length;i++){
        sum=sum + m[i]


    }
    avr=sum/m.length
}

average([1,2,3,4,5])
console.log("average is:"+" "+avr)
average([ -12,-39,12,41])
console.log("average is:"+" "+avr)
average([])
console.log("average is:"+" "+avr)