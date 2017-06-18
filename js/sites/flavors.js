$(document).ready(function()
{

		var arrPages = new Array();
		arrPages[0] = "/signup";
		arrPages[1] = "/account/settings/";
		arrPages[2] = "/account/publish";
			
		console.log(curPage(arrPages));
		function vBioFrame2()
		{
			var index = Math.floor(Math.random() * 10) + 1;
			chrome.extension.sendRequest({method: "getLocalStorage", key: "bio" + index}, function(response) 
			{
				if(response.data.length == 0) vBioFrame2();
				else 
				{	
					$("iframe").each(function()
					{
						if($(this).attr("src") == "javascript:void(0);")
						{ 
							if(($(this).contents().find("body").html().indexOf("This is your") != -1) || ($(this).contents().find("body").html().length == 0))
							{ 
								$(this).contents().find("body").html(response.data);
								$(this).contents().find("body").focus();
								$(this).contents().find("body").click();
							}
						}
					});
				}
			});
		}

		if(curPage(arrPages) == 0)
		{
			smessage("red","<br>Click <i>GET STARTED</i>.");	
					
			vChange("id", "username", "username");
			vChange("id", "email", "useremail");
			vChange("id", "password", "password");
			vChange("id", "password_confirm", "password");
			myVLinks("id", "sfsd", false);
		
			$('html, body').animate({
				scrollTop: $('#username').offset().top - 150
			},1000);
			
		       
		else if(curPage(arrPages) == 1)
		{
			//smessage("green", "[Step 3 of 3] <br/>1. Click Information. <br/>2. Click 'SAVE', then you are complete with Flavors.Me.");
			vChange("name", "profile_name", "fullname");
			myvBio("name", "profile_description", false);
		}else if(curPage(arrPages) == 2)
		{
			smessage("green", "<br> Click <i>PUBLISH</i>, then you may move onto the next tab.");			
			vChange("name", "subdomain", "username");
			trigger_event("name", "subdomain", "keyboard");			
			
		}		
		else if(vContent("Let's get started!"))
		{
			smessage("green", "<br/>Look for the <span style='font-style:italic'>INFORMATION</span> section behind this pop-up, by dragging the pop-up down or to the side. The information will load automatically then, <br/> Go back and click <span style='font-style:italic'>LINKS</span>. Add 3-5 links you wish to promote, or use the ones that we provided for you. <br/> <br/> You are finished with Flavors.me and you may exit this tab.");
			var url = window.location.href;
			var title = localStorage['firstname']+" "+localStorage['lastname']+' : Flavors.com';
			chrome.extension.sendRequest({method: "setLocalStorage", key: "flavors_sLinkSet2", data: url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "flavors_sTitleSet2", data: title});
			
				vChange("id", "controller-about-information-name", "fullname");
				$("#controller-about-information-name").focus();
				myvBio("id", "controller-about-information-about", false);
				$("#controller-about-information-about").focus();
				//vBioFrame("id", "html-editor-iframe", "body");
				$("#controller-about-links-add-button").bind("click", function() 
				{
					myVLinks("id", "controller-content-add-link-title", "id", "controller-content-add-url", false);
				});

			
		}

	
});