$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/Registration";
	arrPages[1] = "/Email/Details";
	arrPages[2] = "/CommunityAdmin/Welcome";
	arrPages[3] = "/Profile/Details";
	
	var linkset = false;
	
	if(curPage(arrPages) == 0)
	{
		if(vContent("We sent a registration email to:"))
		{
			smessage("red", "<br/>Confirm your email, or move onto the next tab.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
			
		}
		else
		{
			smessage("red", "<br/>Click <i>REGISTER WITH EMAIL</i>.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
			vChange("id", "FirstName", "firstname");
			vChange("id", "LastName", "lastname");
			vChange("id", "Email", "useremail");
			vChange("id", "Password", "password");
			vChange("id", "ConfirmPassword", "password");
			
			$('html, body').animate({
				scrollTop: $('[name="FirstName"]').offset().top - 150
			},1000);
		}
		
	}
	else if(curPage(arrPages) == 1)
	{
		if(vContent("Unexpected error"))
		{
			smessage("red", "<br/>Click <i>NEXT</i>.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
		}
		else
		{
			smessage("red", "<br/>Click <i>NEXT</i>.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
			var title = localStorage['firstname']+" "+localStorage['lastname']+" | "+localStorage['city']+", "+localStorage['state'];
			vCustom("id", "Title", title);
			myvBio("id", "Introduction", false);
			
			setInterval(function ()
			{
				var name = document.getElementById("Path").value;
				var title = localStorage['firstname']+" "+localStorage['lastname']+" | Follr";
				chrome.extension.sendRequest({method: "setLocalStorage", key: "follr_sLinkSet2", data: "http://www.follr.me/" + name});
				chrome.extension.sendRequest({method: "setLocalStorage", key: "follr_sTitleSet2", data: title});
				
			},500);
		}
		
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <a href='https://follr.com/Profile/Details' style='color:black !important;'><u>here</u></a> to continue.", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
		
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/>Add a photo on this page, and click <i>SAVE CHANGES</i> below. Then, you are finished and may close the tab. ", "-webkit-box-sizing: initial !important; line-height: inherit !important;");
		
		$("#EmploymentStatusId").val("1");
		$("#IndustryId").val("150");
		
		setTimeout(function ()
		{
			var bio = myvBio("", "", true);
			var $objiframe = $("#cke_1_contents").find('iframe');
			$objiframe.ready(function() {
				$objiframe.contents().find("body").empty();
				$objiframe.contents().find("body").append("<p>"+bio+"</p>");
			});
			console.log("ok");
		},3000);
		
	}
	
});