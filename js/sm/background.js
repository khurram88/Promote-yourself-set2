chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	//alert(changeInfo.url);
});

function install() 
{
	/*
	if (localStorage["installed"] !== null) return;
	else
	{
	*/
		localStorage["installed"] = true;
		chrome.tabs.create({url: "html/install.html"});
	//}
}
//install();

chrome.extension.onRequestExternal.addListener(function(request, sender, sendResponse) 
{
	var tempStorage = "";
	for(i=0; i<=localStorage.length-1; i++)
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		tempStorage += key + "arrmidl" + val + "arrendl";
	}  
	sendResponse({txt: tempStorage});
});
	
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) 
{
	if(request.method === "getLocalStorage") sendResponse({data: localStorage[request.key]});
	else if (request.method === "setLocalStorage") 
	{
		localStorage[request.key] = request.data;
		sendResponse({data: localStorage[request.key]});
	}
	else if (request.method === "opentab") chrome.tabs.create({'url': request.url, 'selected': false}, function(tab) {});
	else if (request.method === "openactivetab") chrome.tabs.create({'url': request.url}, function(tab) {});
	else if (request.method === "getAllStored") 
	{
		var tempStorage = "";
		for(i=0; i<=localStorage.length-1; i++)  
		{  
			key = localStorage.key(i);  
			val = localStorage.getItem(key);  
			tempStorage += key + "arrmidl" + val + "arrendl";
		}  
		sendResponse({data: tempStorage});
	}
	else if (request.method == "getCityState") 
	{
		
          $.ajax({
			url: "http://maps.googleapis.com/maps/api/geocode/json?address="+request.zip+"&sensor=true",
            cache: false,
            dataType: "json",
            type: "GET",
            success: function(result, success) 
			{
				var statee;
				var citty;
				if(result.status == "OK")
				{
					
					var arr = result.results[0].address_components;
					var str = result.results[0].formatted_address;
					var spt = str.split(",");
					if(spt.length > 2)
					{
						var sp = spt[2].split(" ");
						if(sp[1] == "USA") //Only get city and state in USA
						{
							citty = spt[0];
							var spt2 = spt[1].split(" ");
							var stateCode = spt2[1];
							
							for(var i = 0; i < arr.length; i++)
							{
								if(arr[i].short_name == stateCode)
								{
									statee = arr[i].long_name
									break;
								}
							}
							
							sendResponse({city: citty, state: statee});
						}
						else
						{
							sendResponse({city: "", state: ""});
						}
						
					}	
					else
						sendResponse({city: "", state: ""});	
						
				}
				else
					sendResponse({city: "", state: ""});
            },
            error: function(result, success) 
			{
				sendResponse({city: ""});
            }
 
			
          });
	}
	else sendResponse({}); // snub them.
}); 