$(document).ready(function()
{

		var arrPages = new Array();
		arrPages[0] = "/#signup";
		arrPages[1] = "/weebly/main.php";
		arrPages[2] = "/weebly/onboarding.php";
		
		console.log("Current page is "+curPage(arrPages));
		if(curPage(arrPages) == 1)
		{	
			smessageAlign("green", "<br/>Click <i>CONTINUE</i>, exit the long video in the top-right, and then add some details to your site, if you wish. Click <i>PUBLISH</i> in the top-right, then <i>CONTINUE</i>, and finish by verifying you are real.","", "top: 40% !important;"); 
			vChange("id", "newSiteTitle","tagline");
			myvBio("id", "setting-seo-description", false);
			vChange("id", "setting-seo-keywords", "keywords");
			setInterval(function()
			{
				try
				{
					$("[class='multiple-choice-box-body']").each(function()
					{
						if($(this).html().indexOf("weebly.com") != -1)
						{
							$( "#domainSubdomain" ).click();
							var id = $(this).find("input").attr("id");
							if($(this).find("input").val().length == 0) vChange("id", id, "username");
							var url = "http://" + $("#weeblyDomain").val() + ".weebly.com";
							var urlnew = url.replace("http://", "http://www.");
							var title = localStorage['firstname']+" "+localStorage['lastname']+" | Weebly";
							chrome.extension.sendRequest({method: "setLocalStorage", key: "weebly_sLinkSet2", data: urlnew});
							chrome.extension.sendRequest({method: "setLocalStorage", key: "weebly_sTitleSet2", data: title});
						}
					});
				}
				catch(ee){}
			}, 1000);
		}	
		else if(curPage(arrPages) == 0)
		{	
			smessage("red","<br/>Click <span style='font-style:italic'>SIGN UP FREE</span>");
			vChange("id", "overlay-signup-form-name", "fullname");
			vChange("id", "overlay-signup-form-email", "useremail");
			vChange("id", "overlay-signup-form-pass", "password");
		}
		else if(curPage(arrPages) == 2)
		{
			smessage("red","<br/>Click <span style='font-style:italic; line-height: 23px;'>SITE</span>, then <br/>Choose a <span style='font-style:italic'>THEME</span> for your site.")
		}
	
	
});