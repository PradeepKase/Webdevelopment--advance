// Add the coffee to local storage with key "coffee"
async function getdata(){
    let url="https://masai-api.herokuapp.com/coffee/menu"
    let res= await fetch(url)
    let Data= await res.json()
    console.log(Data)
    append(Data.menu.data)
}
getdata()

let bucketcart=JSON.parse(localStorage.getItem("coffee"))||[]
let id=0
function append(data){
     id=0
    let container= document.getElementById("menu")
     id=document.getElementById("coffee_count").innerText=`${0}`
  data.forEach(function(el){
    id+=el.id
    let div=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image
    let price=document.createElement("p")
    price.innerText=el.price
    let type=document.createElement("p")
    type.innerText="coffee_menu"
    let btn=document.createElement("button")
    btn.innerText="add to bucket"
    btn.setAttribute("id","add_to_bucket")
    btn.addEventListener("click",function(){
        if(addtobucket(el.id)===true){
            alert("item added to bucket")
            bucketcart.push(el)
            localStorage.setItem("coffee",JSON.stringify(bucketcart))
        }
        else{
            alert("item added to bucket")
        }
        document.getElementById("coffee_count").innerText=`${id}`
        // id+=el.id
        // id.innerHTML=id
        // console.log(id)
    })
    div.append(image,price,type,btn)
    container.append(div)

  })
  
}


function addtobucket(id){
    for(let i=0; i<bucketcart.length; i++){
        if(bucketcart[i].id==id){
            return false
        }
    }return true
}

