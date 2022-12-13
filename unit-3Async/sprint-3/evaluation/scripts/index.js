// Store the wallet amount to your local storage with key "amount"
let input=0;
let walet=0;

let localamount=JSON.parse(localStorage.getItem("amount"))||[]
let btn= document.getElementById("add_to_wallet")
btn.addEventListener("click",()=>{
     input=document.getElementById("amount").value
    console.log(input)
    for(let i=0; i<input.value; i++){
        input+=input[i]
    }
  walet=document.getElementById("wallet").innerText=`${input}`
  localamount.push(input)
  localStorage.setItem("amount",JSON.stringify(localamount)) 
})

    // walet+=input
   
    // walet.append(input)
    // 
   