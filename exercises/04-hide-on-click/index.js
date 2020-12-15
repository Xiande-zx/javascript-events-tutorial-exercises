window.myEventListener = function myEventListener()
{
	//your code here

	var firstDiv = document.getElementById('firstDiv');

	if(firstDiv.style.display=='none'){

		firstDiv.style.display = 'block'

	}else{

		firstDiv.style.display = 'none'
		
	}
	
}
