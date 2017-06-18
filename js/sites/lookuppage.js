$(document).ready(function()
{
	try {
		var arrPages = new Array();
		arrPages[0] = "/user/registerStepOne";
		arrPages[1] = "/dashboard";
		//arrPages[2] = "/jsp/edit.faces";
		//arrPages[3] = "/jsp/business.faces";
		
		if(vContent("The first thing people find"))
		{			
			vAutoClick(".clsHomeMainElement .clsCreateBtn");
			smessage("red","<br/>Click <span style='font-style:italic;'> CREATE FREE PAGE </span>." , "box-sizing: content-box !important; line-height:normal !important;");
			vChange("name","sFullName","fullname");
			vChange("name", "sEmail","useremail");
			
			if(localStorage['gender'] == "male")
			{
				$("[name='sTitle']").val("1");
				$('[class="clsSelectedText"]').each(function()
				{
					$(this).html("Mr");
				});
			}
			else
			{
				$("[name='sTitle']").val("2");
				$('[class="clsSelectedText"]').each(function()
				{
					$(this).html("Ms");
				});
				
			}
			
			//vAutoClick("#frmRegister .clsSubmitBtn");
			
		}
		else if(curPage(arrPages) == 0)
		{	
			var i = 0;
			smessage("red","<br/><span style='font-family:serif !important'>Type your <span style='font-style:italic'>PROFESSIONAL BIO</span> details if available, then<br/>Type <span style='font-style:italic'>SECURITY CODE</span>, then<br/>Click <span style='font-style:italic'>PUBLISH MY PAGE</span>, then<br/>Click <span style='font-style:italic'>YES, THIS IS THE CORRECT SPELLING.</span></span>", "box-sizing: content-box !important; line-height:normal !important;");
			
			if(returnLocalStorageVal("jobtitle") != ""){
				document.getElementById("oLupPositionTagline").textContent = returnLocalStorageVal("jobtitle");	
				trigger_event("id", "oLupPositionTagline", "keyboard");			
			}
			if(returnLocalStorageVal("employer") != ""){
				document.getElementById("oLupCompanyName").textContent = returnLocalStorageVal("employer");
				trigger_event("id", "oLupCompanyName", "keyboard");			
			}
			if(returnLocalStorageVal("employer") != ""){
				document.getElementById("oLupAboutCompany").textContent = returnLocalStorageVal("employer");
				trigger_event("id", "oLupAboutCompany", "keyboard");			
			}
			if(returnLocalStorageVal("jobdesc") != ""){
				var industry =["Administration", "ArtsCultural", "BusinessFinance", "Education", "FreelanceConsulting", "Health", "IT&Communications", "Internet&Media", "Legal", "Management"];
				if( jQuery.inArray( returnLocalStorageVal("jobdesc"), industry ) > -1){
					document.getElementById("oLupIndustry").textContent = returnLocalStorageVal("jobdesc");
					trigger_event("id", "oLupIndustry", "keyboard");			
				} 	
			}
			if(returnLocalStorageVal("citystate") != ""){
				document.getElementById("oLupAddress").textContent = returnLocalStorageVal("citystate"); 
				trigger_event("id", "oLupAddress", "keyboard");			
			}
			if(returnLocalStorageVal("country") != ""){
				document.getElementById("oLupCountry").textContent = returnLocalStorageVal("country"); 
				trigger_event("id", "oLupCountry", "mouse");			
			}
			
			myvBio("id", "oLupBio", false);
			trigger_event("id", "oLupBio", "keyboard");

			trigger_event("id", "oLupLinks", "mouse");	

			setInterval(function ()
			{
				var id = document.getElementById("oLupDomain");
				if(id)
				{
					var url = document.getElementById("oLupDomain").textContent;
					chrome.extension.sendRequest({method: "setLocalStorage", key: "lookuppage_sLinkSet2", data: url});
				}
				
			},2000);
			
			setInterval(function()
			{
				var elem = document.getElementById("oLupLinksEdit").style.display;
	
				if(elem == "block")
				{
					if(i == 0)
					{
						i++;
						
						var linkObj = returnMyVLinksObj();
						console.log("Initial length is "+linkObj.length);
						var randNum;
						
						for(i=0; i < linkObj.length; i++)
						{
							var str = linkObj[i].link;
							if(str.indexOf("lookuppage.com") != -1)
							{
								linkObj.splice(i,1);
							}
						}
						
						for(j=1; j<4; j++)
						{
							var title = "oLupLinksTitle"+j;
							var url = "oLupLinksUrl"+j;
							var objLength = linkObj.length;
							randNum = Math.floor((Math.random() * objLength) + 0);	
							
							vCustom("id", title, linkObj[randNum].title);
							vCustom("id", url, linkObj[randNum].link);
							
							linkObj.splice(randNum,1);
						}
						
						trigger_event("id", "oLupLinksEdit", "mouse");
					}
					
				}
				else
				{
					i = 0;
				}	
			},500)
		}
		else if(vContent("Your LookUpPage is ready!"))
		{
			smessage("red", "<br/> <span style='font-family:serif !important'>Click <a href='http://www.lookuppage.com/dashboard'>here</a> to continue.</span>", "box-sizing: content-box !important; line-height:normal !important;");
		}
		
		else if(curPage(arrPages) == 1)
		{
			smessage("green", "<br/> <span style='font-family:serif !important'>You may add a <span style='font-style:italic;'>BIOGRAPHY</span>, your <span style='font-style:italic;'>IMAGE</span> or details about your <span style='font-style:italic;'>CAREER</span> on this page, then<br/>Click <span style='font-style:italic'>SUBMIT</span> <br/><br/>You are now finished with LookUpPage and you may exit this tab.</span>", "box-sizing: content-box !important; line-height:normal !important;");
			var i = 0;
						
			if(returnLocalStorageVal("jobtitle") != ""){
				document.getElementById("oLupPositionTagline").textContent = returnLocalStorageVal("jobtitle");	
				trigger_event("id", "oLupPositionTagline", "keyboard");			
			}
			if(returnLocalStorageVal("employer") != ""){
				document.getElementById("oLupAboutCompany").textContent = returnLocalStorageVal("employer");
				trigger_event("id", "oLupAboutCompany", "keyboard");			
			}
			if(returnLocalStorageVal("jobdesc") != ""){
				var industry =["Administration", "ArtsCultural", "BusinessFinance", "Education", "FreelanceConsulting", "Health", "IT&Communications", "Internet&Media", "Legal", "Management"];
				if( jQuery.inArray( returnLocalStorageVal("jobdesc"), industry ) > -1){
					document.getElementById("oLupIndustry").textContent = returnLocalStorageVal("jobdesc");
					trigger_event("id", "oLupIndustry", "keyboard");			
				} 		
			}
			if(returnLocalStorageVal("citystate") != ""){
				document.getElementById("oLupAddress").textContent = returnLocalStorageVal("citystate"); 
				trigger_event("id", "oLupAddress", "keyboard");			
			}
			if(returnLocalStorageVal("country") != ""){
				document.getElementById("oLupCountry").textContent = returnLocalStorageVal("country"); 
				trigger_event("id", "oLupCountry", "mouse");			
			}
			
			myvBio("id", "oLupBio", false);
			trigger_event("id", "oLupBio", "keyboard");
			
			trigger_event("id", "oLupLinks", "mouse");				

			setInterval(function ()
			{
				var id = document.getElementById("sUpgradeDomainName0").value;
				var res = id.split(".");
				//console.log("sfs "+res[0]);
				
					var url = "http://www.lookuppage.com/users/"+res[0];
					var title = localStorage['firstname']+" "+localStorage['lastname']+" on LookUpPage";
					
					chrome.extension.sendRequest({method: "setLocalStorage", key: "lookuppage_sLinkSet2", data: url});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "lookuppage_sTitleSet2", data: title});
				
				
			},2000);
			
			setInterval(function()
			{
				var elem = document.getElementById("oLupLinksEdit").style.display;
				
				if(elem == "block")
				{
					if(i == 0)
					{
						i++;
						
						var linkObj = returnMyVLinksObj();
						console.log("Initial length is "+linkObj.length);
						var randNum;
						
						for(i=0; i < linkObj.length; i++)
						{
							var str = linkObj[i].link;
							if(str.indexOf("lookuppage.com") != -1)
							{
								linkObj.splice(i,1);
							}
						}
						
						for(j=1; j<4; j++)
						{
							var title = "oLupLinksTitle"+j;
							var url = "oLupLinksUrl"+j;
							var objLength = linkObj.length;
							randNum = Math.floor((Math.random() * objLength) + 0);	
							
							vCustom("id", title, linkObj[randNum].title);
							vCustom("id", url, linkObj[randNum].link);
							
							linkObj.splice(randNum,1);
						}
						
						trigger_event("id", "oLupLinksEdit", "mouse");
					}
					
				}
				else
				{
					i = 0;
				}	
			},500)
		}
		
	} catch(err) {}	
	
});

