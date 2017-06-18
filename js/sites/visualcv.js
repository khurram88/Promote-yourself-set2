$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/signup";
	arrPages[1] = "/cvs/dashboard";
	arrPages[2] = "/quickstart";
	arrPages[3] = "modal=theme-selection-modal";
	arrPages[4] = "modal=quickstart-congrats";   // Page 3 and 4 is same for now work.
	arrPages[5] = "/edit?reset_password_token" // Set your password page, after clicking link in email.
	
	console.log(curPage(arrPages));
	if(curPage(arrPages) == 0)
	{	
		smessage("red", "</br>Enter your <i>NAME</i>, then<br/>Click <i>CONTINUE</i>", "-webkit-box-sizing: content-box !important;");
		$("#user_email").focus();
		vChange("id", "user_email","useremail");
		$("#user_password").focus();
		vChange("id", "user_password","password");
		$("#user_password_confirmation").focus();
		vChange("id", "user_password_confirmation","password");
		
	}
	else if(curPage(arrPages) == 1)
	{
		if(window.location.href.indexOf("?modal=share-congrats") > -1)
		{
			smessage("red", "</br>Click <i>CLOSE</i>, then<br/> Click <i>NEW RESUME</i>, then<br/> Click <i>CREATE A BLANK RESUME</i>", "-webkit-box-sizing: content-box !important;");
		}
		else
		{
			/* if(vContent("Create a Blank Resume"))
			{
				smessage("red", "<br/> Click <i>CREATE A BLANK RESUME</i>", "-webkit-box-sizing: content-box !important;");
			}
			else if(vContent("Copy Existing Resume"))
			{
				smessage("red", "<br/> Click <i>NO THANKS</i>, then <br/> Click <i>COPY EXISTING RESUME</i>", "-webkit-box-sizing: content-box !important;");
			}
			else
			{ */
				//smessage("red", "</br>Move your cursor to <i>CLASSIC</i> design then, <br/>Click <i>UNLOCK</i> then, <br/> Click <i>SHARE ON FACEBOOK</i> then, <br/> Follow the steps for posting design to Facebook.", "-webkit-box-sizing: content-box !important;");
				smessage("red", "<br/> Click <i>NO THANKS</i>, then<br/> Click <i>NEW RESUME</i>", "-webkit-box-sizing: content-box !important;");				
				//vAutoClick(".btn .btn-outline-inverse .btn-lg"); 
			//}
		}
	}
	else if(curPage(arrPages) == 2)
	{
		//var checkURL = document.URL;
		//var url = document.URL+"?step=positions";
		smessage("red", "</br>Click <i>NEXT</i>", "-webkit-box-sizing: content-box !important;");
		vChange("id", "user_municipality", "city");
		vChange("id", "user_region", "state");
		vChange("id", 'position_title', 'jobtitle');
		vChange("id", "position_employer_org_name", "employer");
		vChange("id", "position_start_date_2i", "jobstartmonth");
		vChange("id", "position_start_date_1i_", "jobstartyear");
		vChange("id", "position_end_date_2i", "jobendmonth");
		vChange("id", "position_end_date_1i_", "jobendyear");
		$(".mce-form-editable").html("<p>"+localStorage['jobdesc']+"</p>");
		$("#position_description").attr("value", localStorage['jobdesc']);
		vChange("id", 'degree_school_name', 'college');
		vChange("id", "degree_name", "degree");
		vChange("id", "degree_start_date_2i", "educationstartmonth");
		vChange("id", "degree_start_date_1i_", "educationstartyear");
		vChange("id", "degree_end_date_2i", "educationendmonth");
		vChange("id", "degree_end_date_1i_", "educationendyear");
		
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/>Follow the instructions on the page to create a unique resume, then</br><br/>You are now finished with VISUALCV.<br/> Move to the next Tab.", "-webkit-box-sizing: content-box !important;");
		$(".edit-new .btn .btn-lg").focus().click();
		setInterval(function ()
		{
			var val = $('[name="url"]').val();
			var send_url = "http://www.visualcv.com/"+val;
			var title = localStorage['firstname']+" "+localStorage['lastname']+" VisualCV [viewing]";
			chrome.extension.sendRequest({method: "setLocalStorage", key: "visualcv_sLinkSet2", data: send_url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "visualcv_sTitleSet2", data: title});
		},100);
		
	}
	else if(curPage(arrPages) == 4)
	{
		smessage("green", "<br/>Follow the instructions on the page to create a unique resume, then</br><br/>You are now finished with VISUALCV.<br/> Move to the next Tab.", "-webkit-box-sizing: content-box !important;");
		setInterval(function ()
		{
			var val = $('[name="url"]').val();
			var send_url = "http://www.visualcv.com/"+val;
			var title = localStorage['firstname']+" "+localStorage['lastname']+" VisualCV [viewing]";
			chrome.extension.sendRequest({method: "setLocalStorage", key: "visualcv_sLinkSet2", data: send_url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "visualcv_sTitleSet2", data: title});
		},100);	
	}
	else if(curPage(arrPages) == 5)
	{	
		if(vContent("Set Your Password"))
		{
			smessage("red", "</br>Click <i>SAVE</i>", "-webkit-box-sizing: content-box !important;");
			$("#user_password").focus();
			vChange("id", "user_password","password");
			$("#user_password_confirmation").focus();
			vChange("id", "user_password_confirmation","password");
		}
	}
	
});