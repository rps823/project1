var co="ZYXWVUTSRQPONMLKJIHGFEDCBA"
var e=co.toLowerCase()
var t=""



function mirrorImage(word)
{
for(var i=0;i<word.length;i++){
 t=t + e.charAt(word.charCodeAt(i)-"a".charCodeAt(0)) 


    }
return t;

}
mirrorImage("stdin")
console.log(t)
var t=""
mirrorImage("script")
console.log(t)
var t=""
mirrorImage("cmd")
console.log(t)
var t=""
mirrorImage("zebra")
console.log(t)