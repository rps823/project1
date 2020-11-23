var vowels=['a','e','i','o','u','A','E','I','O','U']
function isConst(char){
    for(var i=0;i<vowels.length;i++){
        if(char==vowels[i]){
return false
        }
    }
    return true
}
var wd="jIAseupH"
var opt=""
for(var i=0;i<wd.length;i++){
    var con=isConst(wd[i])
    if(!con){
        opt=opt+wd[i]
    }
}
console.log(opt)
var io=[['fhg','jdshd'],['kijo','lion'],['iok']]
//console.log(io)
for(var i=0;i<io.length;i++){
    //console.log(io[i])
    for(j=0;j<io[i].length;j++){
        console.log(io[i][j])
    }
}
var item=[[2,45,78],
[98,345,56],
[5,21,33]]
var sum=0;
for(var i=0;i<item.length;i++){
    //console.log(item[i])
    for(var j=0;j<item[i].length;j++){
         if(i==j){ sum=sum+item[i][j]
    }
}
   
}
console.log(sum)
var items=[
    ["suresh","M",32,["html","java"],
[
    ["home","farakka","742212"],
    ["office","bbs","751024"]
]],
    ["rupesh","M",23,["css","node"]],
    ["sham","M",45,["react","js"]],
];
items.push(["rupa","F",26,["softskiil","operations"]]) 


    console.log(items[0][0])
    for( var j=0;j<items[0][4][0][2].length;j++){
        console.log(items[0][4][0][2][j])
        //console.log(items[0][0] + " " + items[0][4][0] )
        //console.log(items[0][0] +" " + items[0][4][1])
    }
    

    