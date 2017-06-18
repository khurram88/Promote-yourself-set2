$(document).ready(function()
{
	var arrPages = new Array();
	//arrPages[0] = "/component/community/register";
	
	arrPages[0] = "/builder";
	arrPages[1] = "&task=createNewUser2";
	arrPages[2] = "/my-resume/create#step2";
	arrPages[3] = "&task=createNewUser";
	var i = 0;
	var j = 0;
	var k = 0;
    var m = 0;
	
	// Registration Page	
	if(curPage(arrPages) == 0)
	{	
		//smessage("red", "<br/>Click <i style='font-size:18px'>SELECT TEMPLATE</i> then,<br/> Enter your <i style='font-size:18px'>FIRSTNAME</i> and <i style='font-size:18px'>LASTNAME</i> then, <br/>Click <i style='font-size:18px'>BUILD YOUR RESUME</i> then,<br/>Enter your <i style='font-size:18px'>EMAIL ADDRESS</i> then, <br/>Click <i style='font-size:18px'>SAVE YOUR EMAIL</i> then, <br/>Enter your <i style='font-size:18px'>JOB CATEGORY</i> then, <br/>Click <i style='font-size:18px'>CONTINUE BUILDING YOUR RESUME</i>", "left:0% !important; box-sizing: content-box !important;");
		smessage("red", "<br>Follow the instructions on the page to create a unique resume." , "left:0% !important; box-sizing: content-box !important;");					
		setTimeout(function() {
			trigger_event("class", "sample-resume-hover", "mouse");
		}, 1000);		
			trigger_event("data-template-id", "1", "mouse");
						
		vChange("id", "fname", "firstname");
		trigger_event("id", "lname", "keyboard","", "keydown");		
		trigger_event("id", "fname", "keyboard", "", "keypress");	
		trigger_event("id", "lname", "keyboard", "", "keyup");		
		trigger_event("id", "fname", "mouse");	
		
		vChange("id", "lname", "lastname");		
		trigger_event("id", "lname", "keyboard", "", "keydown");		
		trigger_event("id", "lname", "keyboard", "", "keypress");		
		trigger_event("id", "lname", "keyboard", "", "keyup");		
		trigger_event("id", "lname", "mouse");	
		
		vChange("id", "jsemail", "useremail");	
		trigger_event("id", "jsemail", "keyboard","", "keydown");		
		trigger_event("id", "jsemail", "keyboard","", "keypress");
		trigger_event("id", "jsemail", "keyboard","", "keyup");		
		trigger_event("id", "jsemail", "mouse");	

		vChange("id", "job_category", "jobtitle");
		trigger_event("id", "job_category", "keyboard");		
		trigger_event("id", "job_category", "mouse");	
	
	}
	else if(curPage(arrPages) == 1 || curPage(arrPages) == 3)
	{
		smessage("red", "<br/>Click <i style='font-size:18px'>CREATE YOUR ACCOUNT</i>", "left:0% !important; box-sizing: content-box !important;");
		 
	/*	vChange("id", "fname", "firstname");
		vChange("id", "lname", "lastname");
		vChange("id", "jsusername", "username");
		vChange("id", "jsemail", "useremail");
		vChange("id", "jspassword", "password"); */
		
		/*$('#successjsnamemsg').show();
		$('#successjsusernamemsg').show();
		$('#successjobtypesmsg').show();
		$('#successjsemailmsg').show();
		$('#successjspasswordmsg').show();*/
		
		/*setInterval(function ()
		{
			$("#btnSubmit").removeAttr("disabled");
		},100);*/
		
		
	}
	else if(curPage(arrPages) == 2)
	{
		
		//1. Add Summary<br/>2. Add Objective<br/>3. Add Education details<br/>4. Add Employment history.<br/>5. Add Professional Skills<br/>6. Add Hobbies and Interests<br/>7. Then Click NEXT.<br/>8. Then Click Finalize.
		smessage("green", "<br/>Add details you wish to include.<br/>Click <i style='font-size:18px'>NEXT</i>, select a <i style='font-size:18px'>TEMPLATE</i>.<br/><br/>Then you are finished with resume and may close this tab.", "left:0% !important; box-sizing: content-box !important;");
		var summeryFlag = false;
		vChange("name", "city", "city");
		vChange("name", "state", "state");
		vChange("name", "zipcode", "zip");
		vCountry("name", "country", "country");
		
		//var vbioo = myvBio("id", "summary_textarea", true);
	
		setInterval(function()
		{
			var url = document.getElementById("resume-url").textContent;
			var title = $("#resume-title").val();
			
			chrome.extension.sendRequest({method: "setLocalStorage", key: "resume_sLinkSet2", data: url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "resume_sTitleSet2", data: title});
					
			var education = document.getElementById("edit-education").style.display;
			var employment = document.getElementById("edit-employment").style.display;
			var interest = document.getElementById("edit-hobbies").style.display;
			
			$("#summary_menu").click(function ()
			{
				if(!summeryFlag) 
				{
					console.log("working");
					$bio = myvBio("", "", true);
					$content = "<p>"+$bio+"</p>";
					$("#summary_textarea_ifr").contents().find("body").html($content);
					summeryFlag = true;
				}
				
			});
			
			if(education == "block" || education == '')
			{
				if(i == 0)
				{
					i++;
					// Education Detail
					vChange("name", "education_qualification", "degree");
					vChange("name", "education_school", "college");
					vChange("name", "education_city", "city");
					vChange("name", "education_country", "country");
					vChange("name", "education_state", "state");
					
					if(localStorage['presently_studied'] == 'true')
					{
						document.getElementById("status").value = "Enrolled";
					}
					else if(localStorage['presently_studied'] == 'false')
					{
						document.getElementById("status").value = "Graduated";
						vChange("name", "education_month", "educationendmonth");
						vChange("name", "education_year", "educationendyear");
					}
					
					vChange("id", "education_textarea", "major");
				}	
			}
			else
			{
				i = 0;
			}
			
			if(employment == "block" || employment == '')
			{
				if(j == 0)
				{
					j++;
					
					//Job detail
					vChange("name", "employment_title", "jobtitle");
					vChange("name", "employment_company", "employer");
					vChange("name", "employment_start_month", "jobstartmonth");
					vChange("name", "employment_start_year", "jobstartyear");
					//vChange("name", "employment_description", "jobdesc");
					vChange("name", "employment_city", "city");
					vChange("name", "employment_country", "country");
					vChange("name", "employment_state", "state");
					
					if(localStorage['presently_employed'] == 'true')
					{
						$('#job_end_date').hide();
						$('#presently_employed').prop('checked', true);
					}
					else
					{
						vChange("name", "employment_end_month", "jobendmonth");
						vChange("name", "employment_end_year", "jobendyear");
					}
					
					//Job description
					$content = "<p>"+localStorage['jobdesc']+"</p>";
					$("#employment_textarea_ifr").contents().find("body").html($content);
					
					
				}	
			}
			else
			{
				j = 0;
			}
			
			if(interest == "block" || interest == '')
			{
				if(k == 0)
				{
					//hobbies and interest
					vChange("name", "hobbies_text", "interests");
				}	
			}
			else
			{
				k = 0;
			}
			
		},1000);
		
		
	}
	
});