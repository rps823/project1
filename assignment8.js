function swapCase(word){
    var kio=""
    for(var i=0;i<word.length;i++){
        if(word.charAt(i)===word.charAt(i).toLowerCase()){
            kio +=word.charAt(i).toUpperCase()
        }else{
              kio +=word.charAt(i).toLowerCase()
        }
    }

console.log(kio)
}

swapCase("miXeD")
swapCase("HELLO")
swapCase("maSAi")

   