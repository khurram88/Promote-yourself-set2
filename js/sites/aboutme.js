$(document).ready(function()
{
		var arrPages = new Array();
		arrPages[0] = "/login/signup";
		arrPages[1] = "/new_user";
		arrPages[2] = "/" + localStorage["aboutMe_username"];
		console.log(curPage(arrPages));
		if(curPage(arrPages) === 0)
		{
			if(vContent('New?'))
			{
				smessage("red","Welcome to Search Manipulator Set 2! Complete the websites from left to right on the tab list. This box with the fox will let you know what to do on each site. If words are in bold, it represents clicking a button on the website. A red box means you have something to do on the website, orange represents an optional photo upload, and green represents the last step of that website. <br/><br/>Click <i>CREATE MY PAGE</i>");
				
				setTimeout(function ()
				{
					vChange("id", "standalone_first_name", "firstname");
					vChange("id", "standalone_last_name", "lastname");
					vChange("id", "standalone_email", "useremail");
				},2000);
			
			}
		}
		else if(curPage(arrPages) === 1)
		{
			smessage("red","<br/>Enter your <i>PASSWORD</i>, then<br/>Click <i>I'M NOT A ROBOT</i>, then<br/>Click <i>SIGN UP</i>.");
			
			setInterval(function () 
			{ 
				if(document.getElementById("username").value == "")
				{
					console.log("settttt");
					document.getElementById("username").value = localStorage['username'];
				}
				
				chrome.extension.sendRequest({method: "setLocalStorage", key: "aboutMe_username", data: document.getElementById("username").value});
				
			},500);
		} 
		else if(curPage(arrPages) === 2)
		{
			var usernam;
			if(window.location.href.indexOf("/login/#!/signup") > -1) 
			{	
				if(vContent('New?'))
				{
					smessage("red","Welcome to Search Manipulator Set 2! Complete the websites from left to right on the tab list. This box with the fox will let you know what to do on each site. If words are in bold, it represents clicking a button on the website. A red box means you have something to do on the website, orange represents an optional photo upload, and green represents the last step of that website. <br/><br/>Click <i>CREATE MY PAGE</i>");
					
					setTimeout(function ()
					{
						vChange("id", "standalone_first_name", "firstname");
						vChange("id", "standalone_last_name", "lastname");
						vChange("id", "standalone_email", "useremail");
					},2000);
				
				}
			}
			else if(window.location.href.indexOf("/new_user") > -1)
			{
				smessage("red","<br/>Enter your <i>PASSWORD</i> then,<br/>Click <i>SIGN UP</i>.");
				
				setInterval(function () 
				{ 
					if(document.getElementById("username").value == "")
					{
						console.log("settttt");
						document.getElementById("username").value = localStorage['username'];
					}
					
					chrome.extension.sendRequest({method: "setLocalStorage", key: "aboutMe_username", data: document.getElementById("username").value});
					
				},500);
			}
			else if(window.location.href.indexOf("/"+localStorage["aboutMe_username"]) > -1)
			{
				smessage("green","<br/>You may add a <i>BIOGRAPHY</i>, your <i>IMAGE</i> or details about your <i>CAREER</i> on this page then,<br/><br/> You are finished with about.me and you may exit this tab.");
				var url = window.location.href;
				var title = localStorage['firstname']+" "+localStorage['lastname']+" | about.me";
				chrome.extension.sendRequest({method: "setLocalStorage", key: "aboutme_sLinkSet2", data: window.location.href});
				chrome.extension.sendRequest({method: "setLocalStorage", key: "aboutme_sTitleSet2", data: title});
				myVLinks("", "", "name", "url_field", false);
				vChange("id", "locations", "citystate");
			}
			
		}

});
