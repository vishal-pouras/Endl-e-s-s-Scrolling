chrome.runtime.onMessage.addListener(function(res, sen, sendR){
	localStorage.time=res.y;
		localStorage.extension=res.x;

	
myVar = setInterval(myFunct, 1000);
});


var myVar = setInterval(myFunct, 1000)
function myFunct()
{	alert(res.x);
	 
	console.log(document.domain);
	if(localStorage.extension == document.domain)
	{
		seconds++;
        console.log(seconds);
        console.log(x);
	    alert(seconds);
        if(seconds > 2)
        {
        	
        location.href="https://vishalpouras.000webhostapp.com/";
        clearInterval(myVar);seconds=0;
        }
		
	}
	
}