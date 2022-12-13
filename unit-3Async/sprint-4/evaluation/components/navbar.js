function navbar() {

	let ele = JSON.parse(localStorage.getItem('user'))
	let coun;
	if(ele.country=='in'){
		coun='India'
	}
	if(ele.country=='ch'){
		coun='China'
	}
	if(ele.country=='us'){
		coun='USA'
	}
	if(ele.country=='uk'){
		coun='UK'
	}
	if(ele.country=='nz'){
		coun='Newzeland'
	}
	
	
	return (
		`

	<img  src='${ele.image}' alt="">
	
	<h3 id='user_name'>${ele.name}</h3>
	<h4>${coun}</h4>

	<p>${ele.email}</p>`


	)

}


export default navbar