

/////////////////////////////////
let fetchResponse = "hi";


//chrome.cookies.get({"url": "https://www.amazon.in/*", "name": "SignedIn"}, function(cookie) {});


	
    


chrome.tabs.onUpdated.addListener(
  function(){	  
				



chrome.cookies.get({"url": "https://www.amazon.in/*", "name": "SignedIn"}, 
function(cookie) {
	if (JSON.stringify(cookie) == "null"){
		
		
		} 
else{
	
chrome.tabs.query({active:true,currentWindow:true }, function(tabs){
				
				chrome.tabs.sendMessage(tabs[0].id,{txt:cookie.value});
				console.log("A tab has been Created from Background");
	
			})
}})				
			
				
				
				
				
				
			});
	  
	





