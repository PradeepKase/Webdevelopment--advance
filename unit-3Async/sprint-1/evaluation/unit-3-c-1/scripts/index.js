//store the products array in localstorage as "products"
let productdata= document.getElementById("products")
productdata.addEventListener("submit", function (e){
    e.preventDefault()
    console.log("inside")
let image=productdata.image.value
let desc= productdata.desc.value
let price=productdata.price.value
let type= productdata.type.value

let p1=new product(image,desc,price,type)
let data=JSON.parse(localStorage.getItem("products"))||[]
data.push(p1)
localStorage.setItem("products", JSON.stringify(data))

} )


function product(image,desc,price,type){
    this.image= image
    this.desc=desc
    this.price=price
    this.type=type
}