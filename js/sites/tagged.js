
$(document).ready(function()
{
		var arrPages = new Array();
		arrPages[0] = "/register.html?display=login";
		arrPages[1] = "/reg_import_neutral.html?";
		arrPages[2] = "/reg_photo.html"; // not working
		arrPages[3] = "/home.html";
		arrPages[4] = "/profile.html";
		
		if(curPage(arrPages) == 0)
		{
			if(vContent("By clicking Next, you are indicating that you"))
			{	
				smessage("red","<br/>Click <span style='font-style:italic'>NEXT</span>");
				$("#login_frame").attr("class", "reg_form centered_form  hide_me");
				$("#reg_form").attr("class", "reg_width centered_form");
				
				vChange("id", "first_name", "firstname");
				$("#first_name").focus();
				
				vChange("id", "last_name", "lastname");
				$("#last_name").focus();
				
				vChange("id", "email", "useremail");
				$("#email").focus();
				
				vChange("id", "password", "password");
				$("#password").focus();
				
				vChange("id", "zipCode", "zip");
				$("#zipCode").focus();
				
				vChange("id", "birth_day", "birthday");
				$("#birth_day").focus();
				
				vMonth("id", "birth_month", "birthmonth");
				$("#birth_month").focus();
				
				vChange("id", "birth_year", "birthyear");
				$("#birth_year").focus();
				
				vChange("id", "country", "country");
				
				if(localStorage['gender'] == "male")
				{
					$("#male").focus().click();
				}
				else
				{
					$("#female").focus().click();
				}
				
				$("#ethnicity_selector").val("other");
				//fn_click("input", "value", "Next >", 10);
			}
		}
		else if(curPage(arrPages) == 1)
		{
			smessage("red", "<br/><span style='font-style:italic'>SKIP</span> through the next few pages.");
			//fn_click("a", "", "Skip ", 10);
		}	
		else if(curPage(arrPages) == 2)
		{
			smessage("orange","<br/>OPTIONAL: Upload a photo or, Click <span style='font-style:italic'>MAYBE LATER</span>.");
		}	
		else if(curPage(arrPages) == 3)
		{
			if(window.location.href.indexOf("?jli=1") == -1)
			{
				smessage("red", "<br/>Confirm your email, or move onto the next tab.");
				var timterr = setInterval(function ()
				{
					var style = $('[role="dialog"]').css("display");
					if (typeof style === "undefined")
					{
						clearInterval(timterr);
						window.open("http://www.tagged.com/home.html?jli=1","_self");
						setTimeout(function ()
						{
							location.reload(true);
						},3000);
						
					}
					
				},500);
				 
			}
			else
			{
				//smessage("red", "<br/>Click <a href='http://www.tagged.com/profile.html' style='color:black !important;'><u>here</u></a> to continue");
				window.location.href = "http://www.tagged.com/profile.html";
			}
		}
		else if(curPage(arrPages) == 4)
		{
			smessageAlign("green","<br/>You are finished with Tagged and you may exit this tab.","", "top: 40%;");
			$('[name="profile_url"]').focus();
			vChange("name", "profile_url", "username");
			var url = "http://www.tagged.com/"+$('[name="profile_url"]').val();
			var title = localStorage['firstname']+" "+localStorage['lastname']+" on Tagged";
			chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sLinkSet2", data: url });
			chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sTitleSet2", data: title});
				
			$('[name="submit_btn"]').bind( "click", function() 
			{
				var url = "http://www.tagged.com/"+$('[name="profile_url"]').val();
				chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sLinkSet2", data: url });
				chrome.extension.sendRequest({method: "setLocalStorage", key: "tagged_sTitleSet2", data: "Tagged - My Profile"});
			});
			
			$("a").each(function ()
			{
				var elem = $(this).children(":first");
				if(elem.text() == "Write anything you want...")
				{
					console.log("yess got it");
					elem.focus().click();
					return false;
				}
			});
			var bio = myvBio("", "", true);
			$('textarea[maxlength]').val(bio);
			$('input[value="Save"]').focus().click();
		}	
		
});

