// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketcart=JSON.parse(localStorage.getItem("coffee"))||[]
let totalprice=0
function append(data){
  document.getElementById("bucket").innerHTML=""
totalprice=0

data.forEach(function(el){
    totalprice+=el.price
    let div=document.createElement("div")
    div.setAttribute("id","bucket")
    let image=document.createElement("img")
    image.src=el.image
    let price=document.createElement("p")
    price.innerText=el.price
    let type=document.createElement("p")
    type.innerText="coffee_menu"
    let btn=document.createElement("button")
    btn.innerText="remove_coffee"
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener("click",function(){
        delet(el.id)
    })
div.append(image,price,type,btn)
document.getElementById("bucket").append(div)
})
 
document.getElementById("total_amount").innerText=`${totalprice}`
}
append(bucketcart)


function delet(id){
let deleted=bucketcart.filter(function(el){
 return el.id!=id
})
bucketcart=deleted
localStorage.setItem("coffee",JSON.stringify(bucketcart))
append(bucketcart)
}