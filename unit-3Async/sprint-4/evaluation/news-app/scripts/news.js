let news=JSON.parse(localStorage.getItem('news'))
console.log(news)

function display(ele){
	 
	 
let img=document.createElement('img');
img.src=ele.urlToImage
let title=document.createElement('h3')
title.innerText=ele.title
let desc=document.createElement('h4')
desc.innerText=ele.description
let div=document.createElement('div')
div.append(img,title,desc);
div.class='news'
 
document.querySelector('#detailed_news').append(div)

	
}
display(news)
