$(document).ready(function() 
{
	
		var arrPages = new Array();
		arrPages[0] =  "/";
		arrPages[1] =  "/sign-up/profile-options";
		arrPages[2] =  "/user/";	

	
		if(curPage(arrPages) == 0)
		{
			if(vContent("SIGN UP:"))
			{
				smessage("red","<br/>Click <span style='font-style:italic'>CREATE YOUR PAGE</span>");
			
				vChange("id","edit-mail", "useremail");
				trigger_event("id", "edit-mail", "mouse");
				vChange("id","edit-pass", "password");
				trigger_event("id", "edit-pass", "mouse");
				vChange("id","edit-name", "username");				
				trigger_event("id", "edit-name", "mouse");

				$("input[type=text],input[type=password]").trigger("focus");				
			}
		}

		if(curPage(arrPages) == 1)
		{
			smessage("red","<br/>Click <span style='font-style:italic'>SKIP THIS STEP</span>");
			trigger_event("id", "skip-link", "mouse");			
		}
		
		if(curPage(arrPages) == 2)
		{
				
			smessage("green","<br/>You may add your image or details about your career on this page, then click <span style='font-style:italic'>SAVE</span><br/><br/>If not, you are finished with re.vu and you may exit this tab.");
			// PERSONAL DATA TAB
				// BASIC INFORMATION
			
				vChange("id","edit-field-first-name-0-value", "firstname");
				vChange("id","edit-field-last-name-0-value", "lastname");
				vChange("id","edit-title", "fullname");
				vChange("id","edit-field-headline-0-value", "tagline");
				vBioFrame("id", 'edit-body_ifr', 'body');
				
				myVLinks("", "", "id", "edit-group-custom-links-0-field-link-url-value", false);			
				
			
			// TIMELINE TAB
			
				vChange("id","edit-group-timeline-0-field-timeline-entry-caption-value", "employer");
				vChange("id","edit-group-timeline-0-field-timeline-entry-title-value", "jobtitle");
				vChange("id", "edit-group-timeline-0-field-timeline-entry-details-value", "jobdesc");
				
			// INFOGRAPHICS TAB
		
				vChange("id","edit-group-job-skills-0-field-profile-job-skill-label-value", "tagline");
				vChange("id","edit-group-interest-0-field-interest-label-value", "tagline");

			// EDUCATION TAB

				vChange("id","edit-group-education-0-field-degree-institution-value", "college");
				vChange("id","edit-group-education-0-field-degree-area-value", "major");
				vChange("id","edit-group-education-0-field-degree-value", "degree");
				vChange("id", "edit-group-education-0-field-degree-date-value-year", "educationendyear");
				var url;
				var title = localStorage['firstname']+" "+localStorage['lastname']+" | re.vu";
				$("a").each(function()
				{
					if($(this).text() == "View My Profile")
					{
						url = "http://www.re.vu"+$(this).attr('href');
						return false;
					}
					
				});
				
				chrome.extension.sendRequest({method: "setLocalStorage", key: "revu_sLinkSet2", data: url});
				chrome.extension.sendRequest({method: "setLocalStorage", key: "revu_sTitleSet2", data: title});
				
				
		}
	
});