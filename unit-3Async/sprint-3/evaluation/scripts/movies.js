// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



// let enter=(event)=>{
//     if(event.key=='Enter'){
//         let value=document.getElementById('search').value;
//         // console.log('hello')
//         getdata(value);
//     }
// }

let getdata=async(value)=> {
    try{
        let value=document.getElementById('search').value;
        let res=await fetch(`https://www.omdbapi.com/?apikey=b36d6b09&s=${value}`)
        let data=await res.json();
        console.log(data.Search)
        return data.Search
    }
    catch(error){
        console.log(error)
    }
}


let clmovies=JSON.parse(localStorage.getItem("movie"))||[]
let total_price=0;
function append(data){
    let result=document.getElementById("movies")
    result.innerHTML=null

    data.forEach(function (el){
        
        let div=document.createElement("div")
        div.setAttribute("class","movie_tab")
        let img=document.createElement("img")
        img.src=el.Poster
        let p=document.createElement("p")
        p.innerText=el.Title
        let btn=document.createElement("button")
        btn.innerText="booknow"
        btn.setAttribute("id","book_now")
        btn.addEventListener("click",()=>{
            clmovies.push(el)
            localStorage.setItem("movie",JSON.stringify(clmovies))
            alert("added to checkout page")
            window.location.href="checkout.html"
        })
        div.append(img,p,btn)
        result.append(div)
    })
    document.getElementById("wale").innerText=`${total_price}`
}


async function main(){
    let data=await getdata()
    append(data)
}

let id;
function debouncing(func, delay){
    if(id){
        clearTimeout(id)
    }
    let id=setTimeout(function(){
        func()
    },delay)
}