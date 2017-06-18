$(document).ready(function(){

	document.getElementById('loadfromsets').addEventListener('click', loadFromSets);
	
	function loadFromSets()
	{
		showPrompt("Loads the values from the other sets.");
	}
	
	
    	
		
	function getObjectCount(o){		
		var count = 0;			
		
		for(i in o){ 
			if (typeof o[i] === 'object'){ count++; } 
		}		
		
		return count;
	}
			
	function init(o){

		var row = 0;

		for (i in o) {

		  if (typeof o[i] === 'object'){

			var me = o[i];
			
			process(me,row);
			
		  }

		  row++;
		}
	}

	function process(v,rows){
		
		var doc = document;
	
		if(rows == 2)
		{
			var row = doc.createElement('tr');
			var rowtd = doc.createElement('td');
			var tdimg = doc.createElement('img');
			
			rowtd.setAttribute('colspan', '2');
			tdimg.setAttribute('src','../images/perinfo.png');
			rowtd.appendChild(document.createElement("br"));
			rowtd.appendChild(tdimg);
			row.appendChild(rowtd);
			
			doc.getElementById('mainTable').appendChild(row);
			
		}
		else if(rows == 15)
		{
			var row = doc.createElement('tr');
			var rowtd = doc.createElement('td');
			var tdimg = doc.createElement('img');
			
			rowtd.setAttribute('colspan', '2');
			tdimg.setAttribute('src','../images/educinfo.png');
			rowtd.appendChild(document.createElement("br"));
			rowtd.appendChild(tdimg);
			row.appendChild(rowtd);
			
			doc.getElementById('mainTable').appendChild(row);
			
		}
		else if(rows == 24)
		{
			var row = doc.createElement('tr');
			var rowtd = doc.createElement('td');
			var tdimg = doc.createElement('img');
			
			rowtd.setAttribute('colspan', '2');
			tdimg.setAttribute('src','../images/jobinfo.png');
			rowtd.appendChild(document.createElement("br"));
			rowtd.appendChild(tdimg);
			row.appendChild(rowtd);
			
			doc.getElementById('mainTable').appendChild(row);
			
		}
		else if(rows == 33)
		{
			var row = doc.createElement('tr');
			var rowtd = doc.createElement('td');
			var tdimg = doc.createElement('img');
			
			rowtd.setAttribute('colspan', '2');
			tdimg.setAttribute('src','../images/addinfo.png');
			rowtd.appendChild(document.createElement("br"));
			rowtd.appendChild(tdimg);
			row.appendChild(rowtd);
			
			doc.getElementById('mainTable').appendChild(row);
			
		}
		else if(rows == 47)
		{
			var row = doc.createElement('tr');
			var rowtd = doc.createElement('td');
			var tdimg = doc.createElement('img');
			
			rowtd.setAttribute('colspan', '2');
			tdimg.setAttribute('src','../images/links.png');
			rowtd.appendChild(document.createElement("br"));
			rowtd.appendChild(tdimg);
			row.appendChild(rowtd);
			
			doc.getElementById('mainTable').appendChild(row);
			
		}
		
		var rowItem		= doc.createElement('tr'),
			cellItemA	= doc.createElement('td'),
			cellItemB	= doc.createElement('td'),
			faqLink		= doc.createElement('a'),
			itemLabel	= doc.createElement('span');
				
		// Create the field
		var formField = (v.field === "select") ? doc.createElement('select') : doc.createElement('input');
		
		if(v.name)
		{  				
			formField.setAttribute('id',v.name);
			formField.setAttribute('name',v.name);
		}
		
		if(v.id) formField.setAttribute('id',v.id);
		if(v.type) formField.setAttribute('type',v.type);
		
		if(v.type === "radio" && v.checked === "true")
		{ 
			//formField.setAttribute('checked');
			formField.checked=true;
		}
		
		var rowClass = (rows % 2 === 0) ? "c0" : "c1";
		
		rowItem.setAttribute('class',rowClass);
		if(v.id != 'male')
			faqLink.setAttribute('id',v.id+1);
		else
			faqLink.setAttribute('id','gender');
			
		faqLink.setAttribute('title',v.title);				
		faqLink.setAttribute('class','q');
		faqLink.setAttribute('href'	,'#');
		faqLink.setAttribute('style', 'margin-right:10px;');
		faqLink.addEventListener("click", function (e) {showAlert(e,this);}, false);
		faqLink.innerHTML = '?';
		
		itemLabel.innerHTML = v.text;
		itemLabel.setAttribute("style", "padding:10px;");
		cellItemA.appendChild(itemLabel);
		//cellItemA.appendChild(document.createTextNode(v.text));
		cellItemA.appendChild(faqLink);
		
		rowItem.appendChild(cellItemA);
		
		cellItemB.appendChild(formField);	
		if(v.type === "radio")
		{
		
			cellItemB.appendChild(document.createTextNode("Male"));
			
			var formField2 = doc.createElement('input');			
				formField2.setAttribute('id','female');
				formField2.setAttribute('name','gender');
				formField2.setAttribute('type','radio');
			
			cellItemB.appendChild(formField2);	
			cellItemB.appendChild(document.createTextNode("Female"));
			
		}
		
		rowItem.appendChild(cellItemB);

		doc.getElementById('mainTable').appendChild(rowItem);
				
	}

	var obj = json.fields;
	
	init(obj);

	
});