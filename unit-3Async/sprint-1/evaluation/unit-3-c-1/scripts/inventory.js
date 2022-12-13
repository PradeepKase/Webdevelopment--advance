function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[]
    all_products.innerHTML=null;


    data.forEach(function(el,index){
        let div =document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        let type=document.createElement("p")
        type.innerText=el.type
        let desc= document.createElement("p")
        desc=innerText=el.desc 
        let price= document.createElement("p")
        price=innerText=el.price
        let btn =document.createElement("button")
        btn.innerText="Remove Product"
        btn.addEventListener("click", function(){
            remove(index)
        })
        div.append(img,type,desc,price,btn)
        all_products.append(div)
    })
}
append()


function remove(index){
console.log("inside")
let data=JSON.parse(localStorage.getItem("products"))||[]
let newdata=data.filter(function (el, i){
    return i!==index
})
localStorage.setItem("products", JSON.stringify(newdata))
append()
}