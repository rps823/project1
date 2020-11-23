function result(a){
var b=(function(el){
    return el%2==0
})
var c=(function(el){
    return el+2
})
var d=(function(el){
      return el**2
    })
var e=(function(el,a){
    return a+el
})
var h=a.filter(b).map(c).map(d).reduce(e,0)
console.log(h)
}
result([1,2,3,4,5])
result([2,3,4,5,6])
result([3,4,5,6,7])