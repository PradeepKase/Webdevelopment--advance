/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function signup(){
let image=document.querySelector('#user_pic').value
let name=document.querySelector('#user_name').value
let email=document.querySelector('#user_email').value
let country=document.querySelector('#user_country').value;
 
let u1=new obj(image,name,email,country);
 
localStorage.setItem('user',JSON.stringify(u1))

document.querySelector('#user_pic').value=null;
document.querySelector('#user_name').value=null;
document.querySelector('#user_email').value=null;
 

 

}


class obj{
	constructor(i,n,e,c){
		this.image=i;
		this.name=n;
		this.email=e;
		this.country=c;
	}
}