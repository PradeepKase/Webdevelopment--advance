
let abhi=JSON.parse(localStorage.getItem('user'))
console.log(abhi)

 getdata=async(url)=>{

	let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${url}`)
	let data=await res.json()
	 let Actual_data=data.articles
	 
	 display(Actual_data)
}


getdata(abhi.country)
 
 display=(data)=>{
	document.querySelector('#news_result').innerHTML=null
	data.forEach((ele)=>{
let img=document.createElement('img');
img.src=ele.urlToImage
let title=document.createElement('h3')
title.innerText=ele.title
let desc=document.createElement('h4')
desc.innerText=ele.description
let div=document.createElement('div')
div.append(img,title,desc);
div.class='news'
div.addEventListener('click',function(){
	window.location.href='news.html'
	localStorage.setItem('news',JSON.stringify(ele))
})
document.querySelector('#news_result').append(div)

	})
}


  india=()=>{
	getdata('in')
}
 china=()=>{

	getdata('ch')
}
  usa=()=>{
	getdata('us')
}
  uk=()=>{
	getdata('uk')
}
nz=()=>{
	getdata('nz')
}

  dis=async(event)=>{
	if(event.key=='Enter'){
		event.preventDefault()
		let query=document.querySelector('#search_box').value
		let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query} `)
		let data=await res.json()
		display(data.articles)
		console.log(data)
	
	}
	

}

