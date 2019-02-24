// JavaScript Document

document.querySelector('#get-jokes').addEventListener('click',getJokes);

function getJokes(e){
	
	
	
	const xhr = new XMLHttpRequest();
	
	const number = document.getElementById('number').value;
	
	
//	console.log(number);
	
	xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
	
	xhr.onload = function(){
		
		
		
		if(this.status === 200)
			{
				const response = JSON.parse(this.responseText);
				
				let output = '';
				
				response.value.forEach(function(joke){
					
					
					
					if(response.type === 'success')
						{
							
						output += `<li>${joke.joke}</li>`;	
							
							
							
							
						}
					
					else{
						
						output += `There is somthing wrong with chuck nurris api`;
						
						
					}
					
				    document.querySelector('.jokes').innerHTML = output;  	
					
					
					
				});
				
				
				
				
			}
		
		
		
		
		
		
	}
	
	 xhr.send();
	
	e.preventDefault();

	
}