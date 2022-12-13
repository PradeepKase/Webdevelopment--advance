// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let clmovies=JSON.parse(localStorage.getItem("movie"))||[]
function append(data){
    let result=document.getElementById("movie")
    result.innerHTML=null;

    data.forEach(function (el){
        let div=document.createElement("div")
        div.setAttribute("class","movie_tab")
        let img=document.createElement("img")
        img.src=el.Poster
        let p=document.createElement("p")
        p.innerText=el.Title
        let btn=document.createElement("button")
        btn.innerText="booknow"
        btn.addEventListener("click",()=>{
            clmovies.push(el)
            localStorage.setItem("movie",JSON.stringify(clmovies))
            alert("added to checkout page")
        })
        div.append(img,p,btn)
        result.append(div)
    })
}
append(clmovies)

let btn=document.getElementById("confirm")
btn.addEventListener("click",()=>{
    alert("your booking is successfull")
    document.getElementById("user_name").value=null
    document.getElementById("number_of_seats").value=null
})