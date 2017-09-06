var seconds = 0;
var cookiee = false;
var x,y;

var myVar = setInterval(myFunct, 1000);

//generating a function for cookie creation
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//myFunct is being called after an interval of 1s by myVar.
function myFunct()
{
	if(document.domain == "facebook.com")
	{
		if(getCookie("cookie") == "ok")
		{
			//console.log(document.cookie);
			cookiee = true;
			location.href="https://vishalpouras.000webhostapp.com/";
		}
		if(!document.hidden)
		{
			seconds++;
			console.log(seconds);
       	}
        if(seconds > 7)
        {
        	  var now = new Date();
			  var time = now.getTime();
			  var expireTime = time + 1000*30;
			  now.setTime(expireTime);

			  //Generating cookie if it does not exist	
			  if(!cookiee)				
			  		document.cookie = 'cookie=ok;expires='+now.toGMTString()+';path=/';
        
        //Redirecting
        location.href="https://vishalpouras.000webhostapp.com/";
        clearInterval(myVar);seconds=0;
        }
	}
}





