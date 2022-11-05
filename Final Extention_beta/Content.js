function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/////////////////////////////////////////////
var gett = getCookie("Visited");
if (gett){
	
var image = getCookie("Image");	

//send Async Req
(async () => {
	  
	try {
        const fetchResponse = await fetch('http://127.0.0.1:5000/demo', 
		{method: 'POST' ,  headers: {
									'Content-Type': 'application/json','mode': 'no-cors'
									}
			, body: JSON.stringify({
										"uid":"123","u":"image"})
								   });
								   
        const data = await fetchResponse.text();
		window.alert("Data: "+data);
		callb(data);
		} catch (e) {window.alert(e);} 
})()

function callb(res){
					document.getElementById("landingImage").src = res;
					
					}



setCookie("Visited",true,-1);
setCookie("Image",image,-1);

}


chrome.runtime.onMessage.addListener(
	function (message,sender,sendResponse)
			{
				
				const button = document.getElementById('add-to-cart-button');
				button.addEventListener('click',function handleClick() {	
				var image = document.getElementById("landingImage").src;	
				var ask = confirm(message.txt);
				
				
				if (ask){
					
						setCookie("Visited",true,1);
						setCookie("Image",image,1);
						
						window.open('index.html', "_blank");
				}
				else{window.open('index.html', "_blank");}				
				
				})
				
				
			}
);




/*

var gett = getCookie("admi");
if (gett){
window.alert();
document.getElementById("landingImage").src = "https://m.media-amazon.com/images/I/21X0LSpCduL._SR38,50_.jpg";
setCookie("admi",true,-1);
}else{setCookie("admi",true,1);}
*/