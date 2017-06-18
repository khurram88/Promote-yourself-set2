//localStorage.clear();
//alert(window.location.host);
//Null to reset - all important preloading of info is located here
chrome.extension.sendRequest({method: "getAllStored"}, function(response) 
{  
	var raw_info = response.data.split("arrendl");
	$.each(raw_info, function(k, v)
	{
		localStorage[v.split("arrmidl")[0]] = v.split("arrmidl")[1];
	});
	localStorage["click_stat"] = "1";
});
//Loaded function before the ready state

function returnLocalStorageVal(key)
{
	return localStorage[key];
}

function curPage(arrPages) 
{	
	var key = -1;
	var close = -1;
	while(key < arrPages.length)
	{		
		if(window.location.href.indexOf(arrPages[key]) !== -1) 
		{
			close = key;
		}
		if(window.location.href === "http://" + window.location.hostname + arrPages[key]) 
		{
			if(key === 0) //Reset Session Upon New Filling
			{
				localStorage["url_used"] = "";
				localStorage["b_i_o_used"] = "";
			}
			return key;
		}
		key++;
	}
	
	key = close;
	
	if(key === 0) //Reset Session Upon New Filling
	{
		
		localStorage["url_used"] = "";
		localStorage["b_i_o_used"] = "";
	}
	return key;
};

function isSameDomain()
{
	if(href.indexOf(window.location.hostname) !== -1) 
	{ 
		return true;
	}
	else 
	{
		return false;
	}
};

function vChange(attribute, identifier, value)
{
	vCustom(attribute, identifier, localStorage[value]);
}

function vChangeMultiple(type,identifier,values,delimiter){

	if(!delimiter){
		delimiter = ",";
	} 

	for(i=0;i<values.length;i++){
		
		thisValue = values[i];
		
		chrome.extension.sendRequest({method: "getLocalStorage", key: thisValue}, function(response) 
		{
			var defaultValue = vGetFieldValue(identifier,type);
			
			// Check if the fields already have existing values
			if(defaultValue === "")
			{
				$(":input[" + type + "='" + identifier + "']").val(response.data).change();
			} 
			else 
			{
				$(":input[" + type + "='" + identifier + "']").val(defaultValue + delimiter + response.data).change();
			}
			
			
		});
	}

}

function vCustom(type, identifier, value, len)
{
	var iSelector = $("[" + type + "='" + identifier + "']");
	var mLength = iSelector.attr("maxlength") === "" ? undefined : iSelector.attr("maxlength");
	mLength = len ? len : mLength;
	var iTag = iSelector.prop("tagName");
	
	if(iTag === "INPUT")
	{
		var iType;
		
		try
		{
			iType = iSelector.attr("type").toLowerCase();
		}
		catch(e) 
		{
			iType = "text";
		}
		
		if(iType === "checkbox")
		{
			if(value) 
			{ 
				iSelector.prop("checked", true).change(); 
			}
			else { 
				iSelector.prop("checked", null).change();
			}
		}
		else if(iType === "radio")
		{
			$("[" + type + "='" + identifier + "']:radio").each(function()
			{	
				if($(this).val() === value || $(this).val().indexOf(value) !== -1) 
				{ 
					$(this).click(); return false; 
				}
			});
		}
		else 
		{
			if(mLength !== undefined) 
			{
				if(value.length > mLength) 
				{ 
					iSelector.val(value.substring(0, mLength));
				}
				else 
				{ 
					iSelector.val(value);
				}
			}
			else iSelector.val(value);
		}
	}
	else if(iTag === "SELECT")
	{
		$("[" + type + "='" + identifier + "'] option").each(function() 
		{ 
			if($(this).val().toLowerCase().indexOf(value.toLowerCase()) !== -1)
			{
				iSelector.val($(this).val()).change();
			}
			else if($(this).text().toLowerCase().indexOf(value.toLowerCase()) !== -1)
			{
				iSelector.val($(this).val()).change();
			}
			
			if($(this).val().toLowerCase() === value.toLowerCase())
			{
				iSelector.val($(this).val()).change();
				return false;
			}
			else if($(this).text().toLowerCase() === value.toLowerCase())
			{
				iSelector.val($(this).val()).change();
				return false;
			}
		}); 
	}
	else if(iTag === "TEXTAREA")
	{
		if(mLength !== undefined) iSelector.val(value.substring(0, mLength));
		else iSelector.val(value);
	}
}


function vContent(value, body)
{
	if(body === undefined) 
	{ 
		body = $("body");
	}
	
	if(body.html().indexOf(value) !== -1) 
	{ 
		return true;
	}
	else if(body.next().html() === null) 
	{ 
		return false;
	}
	else 
	{ 
		return vContent(value, body.next()); 
	}
}

/* function smessage(col, msg)
{
	var image = "<img src=\"" + chrome.extension.getURL("images/attention.png") + "\"></img>";
	var tmr = "<br/><span id='a_submit' style='float:left; font-size: 10pt; color: gray;' title='Click here to go to the next step'></span>";
	var opt = "<span id='sys_stat' style='float:right; font-size: 10pt; color: royalblue; cursor: pointer;'></span><br/>";
	$("html").append("<table title=\"Drag : You can push me around :(\" draggable=\"true\" id=\"smessage\" cellpadding=\"0\" cellspacing=\"0\" class=\"smclass topright\"><td valign=\"bottom\" align=\"center\"><p class=\"triangle-border right " + col + "\">" + msg + tmr + opt + "</p></td><td valign=\"top\" align=\"center\" style='vertical-align:top'>" + image + "</td></table>");
	$("#smessage").show(1000);
	$("#smessage").draggable();
	
	$("#smessage span").click(function()
	{
		if($(this).html() === "Pause")
		{ 
			$(this).html("Resume");
			localStorage["click_stat"] = "0";
		}
		else if($(this).html() === "Resume")
		{
			$(this).html("Pause");
			localStorage["click_stat"] = "1";
		}
	});	
} */

function smessageAlign(col, msg, pStyle, aligng)
{
	console.log(aligng);
	var image = "<img src=\"" + chrome.extension.getURL("images/attention.png") + "\"></img>";
	var tmr = "<br/><span id='a_submit' style='float:left; font-size: 10pt; color: gray;' title='Click here to go to the next step'></span>";
	var opt = "<span id='sys_stat' style='float:right; font-size: 10pt; color: royalblue; cursor: pointer;'></span><br/>";
	$("html").append("<div id=\"smessage\" class=\"smclass topright\" style=\"width:36%; min-width: 500px; "+ aligng +" \"><div style=\"width:80%; text-align:right; background: transparent !important; padding-right: 0px !important; float:left\"><p style=\"float:right; font-family: serif !important; "+ pStyle +" \" class=\"triangle-border right " + col + "\">" + msg + tmr + opt + "</p></div><div style=\"width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;\">" + image + "</div></div>");
	$("#smessage").show(1000);
	$("#smessage").draggable();
	
	$("#smessage span").click(function()
	{
		if($(this).html() == "Pause")
		{ 
			$(this).html("Resume");
			localStorage["click_stat"] = "0";
		}
		else if($(this).html() == "Resume")
		{
			$(this).html("Pause");
			localStorage["click_stat"] = "1";
		}
	});	
	
	$("#urlguide").click(function ()
	{
		var urlguide = chrome.extension.getURL("html/urlguide.html");
		chrome.extension.sendRequest({method: "openactivetab", url: urlguide}, function(response) {});
	});
}

function smessage(col, msg, pStyle)
{
	var image = "<img src=\"" + chrome.extension.getURL("images/attention.png") + "\"></img>";
	var tmr = "<br/><span id='a_submit' style='float:left; font-size: 10pt; color: gray;' title='Click here to go to the next step'></span>";
	var opt = "<span id='sys_stat' style='float:right; font-size: 10pt; color: royalblue; cursor: pointer;'></span><br/>";
	$("html").append("<div id=\"smessage\" class=\"smclass topright\" style=\"width:36%; min-width: 500px; top: 5px;\"><div style=\"width:80%; text-align:right; background: transparent !important; padding-right: 0px !important; float:left\"><p style=\"float:right; font-family: serif !important; "+ pStyle +" \" class=\"triangle-border right " + col + "\">" + msg + tmr + opt + "</p></div><div style=\"width:19%; vertical-align:top; background: transparent !important; padding-right: 0px !important; float:left;\">" + image + "</div></div>");
	$("#smessage").show(1000);
	$("#smessage").draggable();
	
	$("#smessage span").click(function()
	{
		if($(this).html() == "Pause")
		{ 
			$(this).html("Resume");
			localStorage["click_stat"] = "0";
		}
		else if($(this).html() == "Resume")
		{
			$(this).html("Pause");
			localStorage["click_stat"] = "1";
		}
	});	
	
	$("#urlguide").click(function ()
	{
		var urlguide = chrome.extension.getURL("html/urlguide.html");
		chrome.extension.sendRequest({method: "openactivetab", url: urlguide}, function(response) {});
	});
}

function fn_click(element, attribute, value, sec)
{
	var cTime = sec;
	
	if(sec > 0)
	{
		$("#sys_stat").html("Pause");
		
		var to_click = setInterval(function()
		{	
			$("#a_submit").html("Auto-Submit in <span id='cd_smessage'>" + cTime + "</span>");
			
			if(localStorage["click_stat"] === "1")
			{
				if(cTime === 0)
				{
					clearInterval(to_click);
					localStorage["click_stat"] = "1";
					$("#a_submit").hide();
					$("#cd_smessage").hide();
					$("#sys_stat").hide();
					
					if(element === "url") 
					{
						window.location.href = value;
					}
					else if(element === "a")
					{
						$("a").each(function()
						{
							if(!attribute && $(this).html().indexOf(value) > -1) 
							{
								window.location.href = $(this).attr("href");	
							} 
							else if(attribute === "html" && $(this).html() === value) 
							{
								window.location.href = $(this).attr("href");										
							} 
							else if($(this).attr(attribute) !== undefined && $(this).attr(attribute).indexOf(value) > -1) 
							{								
								window.location.href = $(this).attr("href");								
							}
						});
					}
					else if(element ==="button")
					{
						var el = $(":button");
						
						$(el).each(function()
						{
							var el_val = $(this).html();
							if(el_val === value || el_val.indexOf(value) > -1) 
							{
								$(this).focus().click().blur();
							}
						});
					}
					else
					{
						var el = $(element + "[" + attribute + "='" + value + "']");
						
						$(el).each(function()
						{
							var el_val = $(this).attr(attribute);
							var el_html = $(this).html();
							
							if(el_val === value || el_val.indexOf(value) > -1) 
							{
								$(this).focus().click().blur();
							}
							else if(el_html === value || el_html.indexOf(value) > -1) 
							{
								$(this).focus().click().blur();
							}
						});
					}
					
					setTimeout(function()
					{
						$("#a_submit").show();
						$("#a_submit").html("<br/><span id='cd_smessage' style='color:red'>SUBMISSION FAILED. CLICK ME TO RESUBMIT</span>").click(function()
						{
							if(element === "url") 
							{
								window.location.href = value;
							}
							else if(element === "a")
							{
								$("a").each(function()
								{
									if(!attribute && $(this).html().indexOf(value) > -1) 
									{ 
										window.location.href = $(this).attr("href");
									}
									else if(attribute === "html" && $(this).html() === value) 
									{
										window.location.href = $(this).attr("href");
									}
									else if($(this).attr(attribute) !== undefined && $(this).attr(attribute).indexOf(value) > -1)
									{
										window.location.href = $(this).attr("href");
									}
								});
							}
							else
							{
								var el = $(element + "[" + attribute + "='" + value + "']");
								$(el).each(function()
								{
									var el_val = $(this).attr(attribute);
									var el_html = $(this).html();
									
									if(el_val === value || el_val.indexOf(value) > -1) 
									{
										$(this).focus().click().blur();
									}
									else if(el_html === value || el_html.indexOf(value) > -1) 
									{
										$(this).focus().click().blur();
									}
								});
							}
						});
						
					}, 5000);
				}		
				cTime--;
			}
		}, (sec/sec) * 1000);
	}
	else
	{
		$("#a_submit").html("Auto-Submit : <span id='cd_smessage' style='color:red'>Disabled</span>");
		
		if(element === "url") 
		{
			window.location.href = value;
		}
		else if(element === "a")
		{
			$("a").each(function()
			{
				if(!attribute && $(this).html().indexOf(value) > -1) 
				{ 
					window.location.href = $(this).attr("href");
				}
				else if(attribute === "html" && $(this).html() === value) 
				{ 
					window.location.href = $(this).attr("href");
				}
				else if($(this).attr(attribute) !== undefined && $(this).attr(attribute).indexOf(value) > -1) 
				{ 
					window.location.href = $(this).attr("href");
				}
			});
		}
		else
		{
			var el = $(element + "[" + attribute + "='" + value + "']");
			
			$(el).each(function()
			{
				var el_val = $(this).attr(attribute);
				var el_html = $(this).html();
				
				if(el_val === value || el_val.indexOf(value) > -1) 
				{
					$(this).focus().click().blur();
				}
				else if(el_html === value || el_html.indexOf(value) > -1) 
				{
					$(this).focus().click().blur();
				}
			});
		}
		
		$("#a_submit").click(function()
		{
			$(el).each(function()
			{
				var el_val = $(this).attr(attribute);
				var el_html = $(this).html();
				
				if(element === "url") 
				{ 
					window.location.href = value;
				}
				else if(element === "a")
				{
					$("a").each(function()
					{
						if(!attribute && $(this).html().indexOf(value) > -1) 
						{
							window.location.href = $(this).attr("href");
						}
						else if(attribute === "html" && $(this).html() === value) 
						{ 
							window.location.href = $(this).attr("href");
						}
						else if($(this).attr(attribute) !== undefined && $(this).attr(attribute).indexOf(value) > -1) 
						{ 
							window.location.href = $(this).attr("href");
						}
					});
				}
				else if(el_val === value || el_val.indexOf(value) > -1) 
				{
					$(this).focus().click().blur();
				}
				else if(el_html === value || el_html.indexOf(value) > -1) 
				{
					$(this).focus().click().blur();
				}
			});
		});
	}
}

function capFL(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function myVLinks(titleAttribute, titleIdentifier, linkAttribute, linkIdentifier, returnStatus)//title_attribue, title_identifier, link_attribue, link_identifier, returnstatus
{
	var url_list = [];
	var key;
	var val; 
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		if(key.indexOf("_sLinkSet2") > -1)
		{
			if(val != '')
			{
				var splitkeyo = key.split("_");
				var vlo = splitkeyo[0]+"_sTitleSet2";
				url_list.push({ "title" : localStorage[vlo], "link" : val});
			}	
		}
		else if(key.indexOf("_oLinkSet2") > -1)
		{
			if(val != '')
			{
				var splitkey = key.split("_");
				var vl = splitkey[0]+"_oTitleSet2";
				url_list.push({ "title" : localStorage[vl], "link" : val});
				
			}
		}
	}
	
	if(url_list.length > 0)
	{
		//var oneLessNumber =  url_list.length - 1;
		var randNumber = Math.floor((Math.random()*url_list.length)+0); 
		
		if(returnStatus)
		{
			return url_list[randNumber]; //Return complete object
		}
		else
		{
			if(titleAttribute != "" && titleIdentifier != "")
			{
				vCustom(titleAttribute, titleIdentifier, url_list[randNumber].title);
			}
			
			vCustom(linkAttribute, linkIdentifier, url_list[randNumber].link);
		}	
	}
	
}

function returnMyVLinksObj()
{
	var url_list = [];
	var key;
	var val; 
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		if(key.indexOf("_sLinkSet2") > -1)
		{
			if(val != '')
			{
				var splitkeyo = key.split("_");
				var vlo = splitkeyo[0]+"_sTitleSet2";
				url_list.push({ "title" : localStorage[vlo], "link" : val});
			}	
		}
		else if(key.indexOf("_oLinkSet2") > -1)
		{
			if(val != '')
			{
				var splitkey = key.split("_");
				var vl = splitkey[0]+"_oTitleSet2";
				url_list.push({ "title" : localStorage[vl], "link" : val});
				
			}
		}
	}
	
	return url_list;
	
}

function vLinks(attribute, identifier, attribute_ex, identifier_ex)
{
	//localStorage["url_used"] = "";
	
	var url_list = new Array();
	var tag_list = new Array();
	var rnd_used = new Array();
	var prefix = [" - $", " on $", ": $", "'s $ Profile", "'s $ Account", " ($)", " | $", " ~ $", " / $"];
	var raw_used = localStorage["url_used"] ? localStorage["url_used"].split(" ") : " ";
	
	for(rnd_each in raw_used)
	{
		var a = parseFloat(raw_used[rnd_each]);
		if(!isNaN(a))
		{
			rnd_used.push(a);
		}
	}
	
	var tLinks = 0;
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		
		if(key.indexOf("_sLink") > -1)
		{
			var site = capFL(key.replace("_sLink", "")); //e.g Twitter
			url_list.push(val);
			tag_list.push(localStorage["fullname"] + prefix[Math.floor(Math.random() * prefix.length)].replace("$", site));
			tLinks++;
		}
		else if(key.indexOf("_oLink") > -1)
		{
			var site = capFL(key.replace("_oLink", ""));
			var tagline = capFL(localStorage[key.replace("_oLink", "").replace("link", "linktitle")]);
			url_list.push(val);
			tag_list.push(tagline);
			tLinks++;
		}
	}
	//Reset links
	if(tLinks < rnd_used.length)
	{
		localStorage["url_used"] = " ";
		vLinks(attribute, identifier, attribute_ex, identifier_ex);
	}
	//End Reset Links
	
	var rnd = Math.floor(Math.random() * url_list.length);
	if(url_list[rnd].indexOf(window.location.host) > -1)
	{
		localStorage["url_used"] += " " + rnd;
		vLinks(attribute, identifier, attribute_ex, identifier_ex);
	}
	else if(rnd_used.indexOf(rnd) > -1) 
	{
		vLinks(attribute, identifier, attribute_ex, identifier_ex);
	}
	else
	{
		localStorage["url_used"] += " " + rnd;
		//alert(localStorage["url_used"]);
		//alert("rnd "+rnd);
		if($("[" + attribute + "='" + identifier+ "']").val() === 0) 
		{	
			alert(attribute+" "+identifier+" "+url_list[rnd]);
			vCustom(attribute, identifier, url_list[rnd]);
			if(attribute_ex) 
			{ 
				vCustom(attribute_ex, identifier_ex, tag_list[rnd]); 
			}
		}
	}
}

function myvBio(attribute, identifier, returnCheck)
{
	var bio_list = [];
	var key;
	var val; 
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		if(key.indexOf("bio") > -1)
		{
			if(val != '')
			{
				bio_list.push(val);
			}	
		}
		
	}

	if(bio_list.length > 0)
	{
		//var oneLessNumber =  url_list.length - 1;
		var randNumber = Math.floor((Math.random()*bio_list.length)+0); 
		
		if(returnCheck)
		{
			return bio_list[randNumber]; //Return complete object
		}
		else
		{
			vCustom(attribute, identifier, bio_list[randNumber]);
		}	
	}
	
}

function vBio(attribute, identifier, len)
{
	//localStorage["b_i_o_used"] = "";
	
	var bio_list = new Array();
	var rnd_used = new Array();
	var raw_used = localStorage["b_i_o_used"] ? localStorage["b_i_o_used"].split(" ") : " ";
	
	for(rnd_each in raw_used)
	{
		
		var a = parseFloat(raw_used[rnd_each]);
		
		if(!isNaN(a))
		{
			rnd_used.push(a);
		}
	}
	
	var tBio = 0;
	
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		
		if(key.indexOf("bio") > -1 && val.length !== 0)
		{
			bio_list.push(val);
			tBio++;
		}
	}
	
	//Reset Bio
	if(tBio <= rnd_used.length)
	{
		localStorage["b_i_o_used"] = " ";
		vBio(attribute, identifier, len);
	}
	//End Reset Bio
	
	var rnd = Math.floor(Math.random() * bio_list.length);
	
	if(rnd_used.indexOf(rnd) > -1) 
	{
		vBio(attribute, identifier, len);
	}
	else
	{
		
		localStorage["b_i_o_used"] += " " + rnd;
		vCustom(attribute, identifier, bio_list[rnd], len);
	}
}


function vBioFrame(type, identifier, attr, format)
{
	var sel = $("[" + type + "='" + identifier + "']").contents().find(attr).html();
	var fltstr = "";
	if(sel.length !== 0) 
	{ 
		if(sel.toLowerCase().indexOf("<p>") !== -1) 
		{ 
			fltstr += "<p>"; 
		}
		
		if(sel.toLowerCase().indexOf("<br>") !== -1) 
		{ 
			fltstr += "<br>"; 
		}
		
		if(fltstr == "") 
		{ 
			return false; 
		}
	}
		
	var bio_list = new Array();
	var rnd_used = new Array();
	var raw_used = localStorage["b_i_o_used"] ? localStorage["b_i_o_used"].split(" ") : " ";
	
	for(rnd_each in raw_used)
	{
		var a = parseFloat(raw_used[rnd_each]);
		
		if(!isNaN(a))
		{
			rnd_used.push(a);
		}
	}
	
	var tBio = 0;
	
	for(i=0; i<=localStorage.length-1; i++)  
	{  
		key = localStorage.key(i);  
		val = localStorage.getItem(key);  
		
		if(key.indexOf("bio") > -1 && val.length !== 0)
		{
			bio_list.push(val);
			tBio++;
		}
	}
	
	//Reset Bio
	if(tBio <= rnd_used.length)
	{
		localStorage["b_i_o_used"] = " ";
		vBio(attribute, identifier, len);
	}
	//End Reset Bio
	
	var rnd = Math.floor(Math.random() * bio_list.length);
	
	if(rnd_used.indexOf(rnd) > -1) 
	{
		vBio(attribute, identifier, len);
	}
	else
	{
		localStorage["b_i_o_used"] += " " + rnd;
		
		if(bio_list[rnd].length === 0) 
		{ 
			vBioFrame(type, identifier, attr, format);
		}
		else 
		{
			if(format === "val")
			{
				$("[" + type + "='" + identifier + "']").contents().find(attr).focus();
				$("[" + type + "='" + identifier + "']").contents().find(attr).html(bio_list[rnd]);
			}
			else
			{
				$("[" + type + "='" + identifier + "']").contents().find(attr).focus();
				$("[" + type + "='" + identifier + "']").contents().find(attr).empty();
				$("[" + type + "='" + identifier + "']").contents().find(attr).append(bio_list[rnd]);
			}
		}		
	}
}

function vCountry(type, identifier, full)
{
	var country = { "AD":"Andorra", "AE":"United Arab Emirates", "AF":"Afghanistan", "AG":"Antigua and Barbuda", "AI":"Anguilla", "AL":"Albania", "AM":"Armenia", "AN":"Netherlands Antilles", "AO":"Angola","AQ":"Antarctica", "AR":"Argentina", "AS":"American Samoa", "AT":"Austria", "AU":"Australia", "AW":"Aruba", "AX":"Aland Islands", "AZ":"Azerbaijan", "BA":"Bosnia and Herzegovina", "BB":"Barbados", "BD":"Bangladesh", "BE":"Belgium", "BF":"Burkina Faso", "BG":"Bulgaria", "BH":"Bahrain", "BI":"Burundi", "BJ":"Benin", "BM":"Bermuda", "BN":"Brunei Darussalam","BO":"Bolivia", "BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos Keeling Islands","CD":"Democratic Republic of the Congo","CF":"Central African Republic","CG":"Congo","CH":"Switzerland","CI":"Cote D'IvoireIvory Coast","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CS":"Serbia and Montenegro","CU":"Cuba","CV":"Cape Verde","CX":"Christmas Island","CY":"Cyprus","CZ":"Czech Republic","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","EU":"Europe","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands Malvinas","FM":"Federated States of Micronesia","FO":"Faroe Islands","FR":"France","FX":"France, Metropolitan","GA":"Gabon","GB":"Great Britain UK","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe",
					"GQ":"Equatorial Guinea","GR":"Greece","GS":"S. Georgia and S. Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HM":"Heard Island and McDonald Islands","HN":"Honduras","HR":"Croatia Hrvatska","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"Korea North","KR":"Korea South","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova","MG":"Madagascar","MH":"Marshall Islands","MK":"Macedonia","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Macao","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand Aotearoa","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"Palestinian Territory","PT":"Portugal",
					"PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena","SI":"Slovenia","SJ":"Svalbard and Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","ST":"Sao Tome and Principe","SU":"USSR","SV":"El Salvador","SY":"Syria","SZ":"Swaziland","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TP":"East Timor","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UK":"United Kingdom","UM":"United States Minor Outlying Islands","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatican City State Holy See","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"Virgin Islands British","VI":"Virgin Islands U.S.","VN":"Viet Nam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","YE":"Yemen","YT":"Mayotte","YU":"Yugoslavia","ZA":"South Africa","ZM":"Zambia","ZR":"Zaire","ZW":"Zimbabwe"
	};
	
	var mCountry = localStorage["country"];
	
	if(full)
	{
		
		$("[" + type + "='" + identifier + "'] option").each(function()
		{
			if($(this).val().indexOf(mCountry) > -1 || $(this).text().indexOf(mCountry) > -1) $("[" + type + "='" + identifier + "']").val($(this).val()).change();
			if($(this).val() == mCountry || $(this).text() == mCountry) { $("[" + type + "='" + identifier + "']").val($(this).val()).change(); return false; }
			
			if(mCountry.indexOf("United States") > -1)
			{
				if($(this).val().toLowerCase() == "USA" || $(this).val().toLowerCase() == "U.S.A" || $(this).text().toLowerCase() == "USA" || $(this).text().toLowerCase() == "U.S.A")
				{
					$("[" + type + "='" + identifier + "']").val($(this).val()).change();
					return false;
				}
			}
			else if(mCountry.indexOf("United Kingdom") > -1)
			{
				if($(this).val().toLowerCase() == "UK" || $(this).val().toLowerCase() == "U.K" || $(this).text().toLowerCase() == "UK" || $(this).text().toLowerCase() == "U.K")
				{
					$("[" + type + "='" + identifier + "']").val($(this).val()).change();
					return false;
				}
			}
		});
		//$("[" + type + "='" + identifier + "']").val(mCountry).change();
	}
	else
	{
		$.each(country, function(key, value) 
		{ 
			if(value == mCountry)
			{
				$("[" + type + "='" + identifier + "']").val(key).change();
			}	
		});
	}
}

function vState(type, identifier, format)
{
	var mState = localStorage["state"];
	
	if(mState == undefined) return false;
	if(format == "dropdown")
	{
		$("[" + type + "='" + identifier + "'] option").each(function()
		{
			if(mState.toLowerCase().indexOf($(this).text().toLowerCase()) != -1) $("[" + type + "='" + identifier + "']").val($(this).val()).change();
		});
	}
	else if(format == "force")
	{
		$("[" + type + "='" + identifier + "']").val(mState).change();
	}
	else if(format == "abvval")
	{
		var ret = mState.substr(mState.indexOf("(") + 1, 2).toLowerCase();
		$("[" + type + "='" + identifier + "'] option").each(function()
		{
			if($(this).val().toLowerCase().indexOf(ret) != -1) $("[" + type + "='" + identifier + "']").val($(this).val()).change();
		});
	}
	else if(format == "abvtext")
	{
		var ret = mState.substr(mState.indexOf("(") + 1, 2).toLowerCase();
		$("[" + type + "='" + identifier + "'] option").each(function()
		{
			if($(this).text().toLowerCase().indexOf(ret) != -1) $("[" + type + "='" + identifier + "']").val($(this).val()).change();
		});
	}
}

function vGender(type, identifier, format)
{
	var mGender = localStorage["gender"];
	if(format.toLowerCase() == "dropdown") 
	{
		$("[" + type + "='" + identifier + "'] option").each(function()
		{
			if(mGender.toLowerCase() == "male" && ($(this).val() == "1" || $(this).val().toLowerCase() == "m" || $(this).val().toLowerCase() == mGender.toLowerCase()))
			{
				$("[" + type + "='" + identifier + "']").val($(this).val()).change();
				return false;
			}
			else if(mGender.toLowerCase() == "female" && ($(this).val() == "2" || $(this).val().toLowerCase() == "f" || $(this).val().toLowerCase() == mGender.toLowerCase())) 
			{
				$("[" + type + "='" + identifier + "']").val($(this).val()).change();
				return false;
			}
		});
	}
	else if(format.toLowerCase() == "radio") 
	{
		$("[" + type + "='" + identifier + "']:radio").each(function()
		{	
			if(mGender.toLowerCase() == "male" && ($(this).val() == "1" || $(this).val() == "M" || $(this).val().toLowerCase() == mGender.toLowerCase())) { $(this).click(); return false; }
			else if(mGender.toLowerCase() == "female" && ($(this).val() == "2" || $(this).val() == "F" || $(this).val().toLowerCase() == mGender.toLowerCase())) { $(this).click(); return false; }
		});
	}
}

function vAlter(type, identifier, attribute, value)
{
	$("[" + type + "='" + identifier + "']").attr(attribute, value).change();
}

function vMonth(attribute, identifier, value)
{
	var months = { 1:"January", 2:"February",  3:"March",  4:"April",  5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"};
	var mValue, mText;
	$.each(months, function(key, val) 
	{
		if(val == localStorage[value])
		{
			mValue = key;
			mText = val;
		}
	}); 
		
	$("[" + attribute + "='" + identifier + "'] option").each(function() 
	{ 
		var iValue = isNaN($(this).val()) ? $(this).val().toLowerCase() :  parseFloat($(this).val());
		var iText = isNaN($(this).text()) ? $(this).text().toLowerCase() :  parseFloat($(this).text());
		if(iValue == mValue || iText == mText || (iText.length > 3 && iText.indexOf(mText.substring(0, 3)) > -1) || mText == iText || iValue == mValue) $("[" + attribute + "='" + identifier + "']").val($(this).val()).change();
	});
}

function vAutoClick(element){
	$(element).trigger("click");
}

function trigger_event(type, identifier, event_type, add_element, event_action, which)
{
	if(typeof add_element === "undefined" || add_element == "" )
	{
		var iSelector = $("[" + type + "='" + identifier + "']");				
	}
	else
	{
		var iSelector = $("[" + type + "='" + identifier + "']").find(add_element);				
	}
	
    
    if (event_type == "keyboard")
	{    	
    	var evt = document.createEvent("KeyboardEvent");
    	
    	if (typeof which === "undefined"){
    		which = 13;
    	}

    	if(typeof event_action === "undefined"){
    		evt.initKeyboardEvent ("keyup", true, true, window, 0, 0, 0, 0, parseInt(which), 0); 		
    	}else{
    		evt.initKeyboardEvent (event_action , true, true, window, 0, 0, 0, 0, parseInt(which), 0); 	
    	}    	
	  	
    }
	else if(event_type == "mouse")
	{
    	iSelector.focus();
    	var evt = document.createEvent("MouseEvents");
    	evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);    	
    	iSelector.get(0).dispatchEvent(evt);    		    

		iSelector.blur();
    	evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);    	    	

    }
    	iSelector.get(0).dispatchEvent(evt);    		    
}
