var fname = "";
var lname = "";

document.addEventListener('DOMContentLoaded', function () 
{
	// Auto genrate Site URL
	document.getElementById("link1_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link1_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link1_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link2_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link2_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link2_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link3_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link3_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link3_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link4_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link4_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link4_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link5_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link5_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link5_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link6_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link6_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link6_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link7_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link7_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link7_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link8_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link8_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link8_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link9_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link9_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link9_oTitleSet2", x)
		
	};
	
	// Auto genrate Site URL
	document.getElementById("link10_oLinkSet2").onblur=function()
	{
		var domain = parseURL(document.getElementById("link10_oLinkSet2").value);
		var x = Math.floor((Math.random() * 5) + 1);
		setSiteTitle(domain.host.charAt(0).toUpperCase() + domain.host.slice(1), "link10_oTitleSet2", x)
		
	};
	
	document.getElementById('firstname').onblur=function()
	{
		fname = document.getElementById('firstname').value;
		lname = document.getElementById('lastname').value;
		var username = fname+lname;
		document.getElementById("username").value = username.replace(/\s+/g, '');
	};

	document.getElementById('lastname').onblur=function()
	{
		lname = document.getElementById('lastname').value;
		fname = document.getElementById('firstname').value;
		var username = fname+lname;
		document.getElementById("username").value = username.replace(/\s+/g, '');
	};
	
	document.getElementById('loadfromsets').addEventListener('click', showAlert);
	document.getElementById('useremail1').addEventListener('click', showAlert);
	document.getElementById('password1').addEventListener('click',showAlert);
	document.getElementById('firstname1').addEventListener('click', showAlert);
	document.getElementById('middlename1').addEventListener('click', showAlert);
	document.getElementById('lastname1').addEventListener('click', showAlert);
	document.getElementById('country1').addEventListener('click', showAlert);
	document.getElementById('state1').addEventListener('click', showAlert);
	document.getElementById('city1').addEventListener('click', showAlert);
	document.getElementById('zip1').addEventListener('click', showAlert);
	document.getElementById('birthyear1').addEventListener('click', showAlert);
	document.getElementById('birthmonth1').addEventListener('click', showAlert);
	document.getElementById('birthday1').addEventListener('click', showAlert);
	document.getElementById('gender').addEventListener('click', showAlert);
	document.getElementById('username1').addEventListener('click', showAlert);
	document.getElementById('college1').addEventListener('click', showAlert);
	
	document.getElementById('major1').addEventListener('click', showAlert);
	document.getElementById('degree1').addEventListener('click', showAlert);
	document.getElementById('educationstartmonth1').addEventListener('click', showAlert);
	document.getElementById('educationstartyear1').addEventListener('click', showAlert);
	document.getElementById('educationendmonth1').addEventListener('click', showAlert);
	document.getElementById('educationendyear1').addEventListener('click', showAlert);
	document.getElementById('employer1').addEventListener('click', showAlert);
	document.getElementById('jobtitle1').addEventListener('click', showAlert);
	document.getElementById('jobdesc1').addEventListener('click', showAlert);
	document.getElementById('jobstartmonth1').addEventListener('click', showAlert);
	document.getElementById('jobstartyear1').addEventListener('click', showAlert);
	document.getElementById('jobendmonth1').addEventListener('click', showAlert);
	document.getElementById('jobendyear1').addEventListener('click', showAlert);
	document.getElementById('keywords1').addEventListener('click', showAlert);
	document.getElementById("tagline1").addEventListener('click', showAlert);
	//document.getElementById("interest").addEventListener('click', interest);
	document.getElementById("organizations1").addEventListener('click', showAlert); 
	document.getElementById("shortbio1").addEventListener('click', showAlert);
	document.getElementById("bio11").addEventListener('click', showAlert);
	document.getElementById("bio21").addEventListener('click', showAlert);
	document.getElementById("bio31").addEventListener('click', showAlert);
	document.getElementById("bio41").addEventListener('click', showAlert);
	document.getElementById("bio51").addEventListener('click', showAlert);
	document.getElementById("bio61").addEventListener('click', showAlert);
	document.getElementById("bio71").addEventListener('click', showAlert);
	document.getElementById("bio81").addEventListener('click', showAlert);
	document.getElementById("bio91").addEventListener('click', showAlert);
	document.getElementById("bio101").addEventListener('click', showAlert);	
	
	document.getElementById("link1_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle11").addEventListener('click', showAlert);
	document.getElementById("link2_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle21").addEventListener('click', showAlert);
	document.getElementById("link3_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle31").addEventListener('click', showAlert);
	
	document.getElementById("link4_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle41").addEventListener('click', showAlert);
	document.getElementById("link5_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle51").addEventListener('click', showAlert);
	document.getElementById("link6_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle61").addEventListener('click', showAlert);
	
	document.getElementById("link7_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle71").addEventListener('click', showAlert);
	document.getElementById("link8_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle81").addEventListener('click', showAlert);
	document.getElementById("link9_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle91").addEventListener('click', showAlert);
	
	document.getElementById("link10_oLink1").addEventListener('click', showAlert);
	document.getElementById("linktitle101").addEventListener('click', showAlert);
	
	// Save Button Event Listener 
	document.getElementById('save').addEventListener('click', saveData);
	
	// CheckBoxes Event Listener
	document.getElementById("presently_studied").addEventListener('change', checkStudy);
	document.getElementById("presently_employed").addEventListener('change', checkEmployee);
	
	//Reset Button Event Listener
	document.getElementById("reset").addEventListener('click', resetData);
	
	$("#zip").keyup(function() 
	{
        // Cache 
        var el = $(this);

        // Did they type five integers?
        if ((el.val().length == 5) && (is_int(el.val())))  
		{
			if($("#country").val() == "United States")
			{
				$("#spinner").show();
				chrome.extension.sendRequest({method: "getCityState", zip: el.val()}, function(response) 
				{
					$("#spinner").hide();
					if(response.city != "")
					{
						$("#city").val(response.city);
						$("#state").val(response.state);
						
					}	
					else
					{
						$("#state").val("");
						$("#city").val("");
					}
					
					/* $("#spinner").hide();
					if(response.city != "")
					{
						$("#city").val(response.city);
						
						//Add State
						var states = { "Afghanistan (AF 1)" : "Badakhshan (BAD)","Afghanistan (AF 2)" : "Badghis (BAH)","Afghanistan (AF 3)" : "Baghlan (BAG)","Afghanistan (AF 4)" : "Balkh (BAL)","Afghanistan (AF 5)" : "Bamian (BAM)","Afghanistan (AF 6)" : "Farah (FAR)","Afghanistan (AF 7)" : "Faryab (FAY)","Afghanistan (AF 8)" : "Ghazni (GHA)","Afghanistan (AF 9)" : "Ghowr (GHO)","Afghanistan (AF 10)" : "Helmand (HEL)","Afghanistan (AF 11)" : "Herat (HER)","Afghanistan (AF 12)" : "Jowzjan (JOW)","Afghanistan (AF 13)" : "Kabol (KAB)","Afghanistan (AF 14)" : "Kandahar (KAN)","Afghanistan (AF 15)" : "Kapisa (KAP)","Afghanistan (AF 16)" : "Khowst (KHW)","Afghanistan (AF 17)" : "Konar (KNR)","Afghanistan (AF 18)" : "Kondoz (KON)","Afghanistan (AF 19)" : "Laghman (LAG)","Afghanistan (AF 20)" : "Lowgar (LOW)","Afghanistan (AF 21)" : "Nangarhar (NAN)","Afghanistan (AF 22)" : "Nimruz (NIM)","Afghanistan (AF 23)" : "Nurestan (NUR)","Afghanistan (AF 24)" : "Oruzgan (ORU)","Afghanistan (AF 25)" : "Paktia (PKT)","Afghanistan (AF 26)" : "Paktika (PAK)","Afghanistan (AF 27)" : "Parvan (PAR)","Afghanistan (AF 28)" : "Samangan (SAM)","Afghanistan (AF 29)" : "Sar-e Pol (SAR)","Afghanistan (AF 30)" : "Takhar (TAK)","Afghanistan (AF 31)" : "Unknown (UNK)","Afghanistan (AF 32)" : "Vardak (VAR)","Afghanistan (AF 33)" : "Zabol (ZAB)","Albania (AL 1)" : "Beratit (BER)","Albania (AL 2)" : "Dibres (DIB)","Albania (AL 3)" : "Durresit (DUR)","Albania (AL 4)" : "Elbasanit (ELB)","Albania (AL 5)" : "Fierit (FIE)","Albania (AL 6)" : "Gjirokastres (GJI)","Albania (AL 7)" : "Korces (KOR)","Albania (AL 8)" : "Kukesit (KUK)","Albania (AL 9)" : "Lezhes (LEZ)","Albania (AL 10)" : "Shkodres (SHK)","Albania (AL 11)" : "Tiranes (TIR)","Albania (AL 12)" : "Vlores (VLO)","Algeria (DZ 1)" : "Adrar (ADR)","Algeria (DZ 2)" : "Ain Defla (AID)","Algeria (DZ 3)" : "Ain Temouchent (AIT)","Algeria (DZ 4)" : "Alger (ALG)","Algeria (DZ 5)" : "Annaba (ANN)","Algeria (DZ 6)" : "Batna (BAT)","Algeria (DZ 7)" : "Bechar (BEC)","Algeria (DZ 8)" : "Bejaia (BEJ)","Algeria (DZ 9)" : "Biskra (BIS)","Algeria (DZ 10)" : "Blida (BLI)","Algeria (DZ 11)" : "Bordj Bou Arreridj (BOR)","Algeria (DZ 12)" : "Bouira (BOU)","Algeria (DZ 13)" : "Chlef (CHL)","Algeria (DZ 14)" : "Constantine (CON)","Algeria (DZ 15)" : "Djelfa (DJE)","Algeria (DZ 16)" : "El Bayadh (ELB)","Algeria (DZ 17)" : "El Oued (ELO)","Algeria (DZ 18)" : "Ghardaia (GHA)","Algeria (DZ 19)" : "Guelma (GUE)","Algeria (DZ 20)" : "Illizi (ILL)","Algeria (DZ 21)" : "Jijel (JIJ)","Algeria (DZ 22)" : "Khenchela (KHE)","Algeria (DZ 23)" : "Laghouat (LAG)","Algeria (DZ 24)" : "M'Sila (MSI)","Algeria (DZ 25)" : "Mascara (MAS)","Algeria (DZ 26)" : "Medea (MED)","Algeria (DZ 27)" : "Mila (MIL)","Algeria (DZ 28)" : "Mostaganem (MOS)","Algeria (DZ 29)" : "Naama (NAA)","Algeria (DZ 30)" : "Oran (ORA)","Algeria (DZ 31)" : "Ouargla (OUA)","Algeria (DZ 32)" : "Oum el Bouaghi (OUM)","Algeria (DZ 33)" : "Relizane (REL)","Algeria (DZ 34)" : "Saida (SAI)","Algeria (DZ 35)" : "Setif (SET)","Algeria (DZ 36)" : "Sidi Bel Abbes (SID)","Algeria (DZ 37)" : "Skikda (SKI)","Algeria (DZ 38)" : "Souk Ahras (SOU)","Algeria (DZ 39)" : "Tamanghasset (TAM)","Algeria (DZ 40)" : "Tebessa (TEB)","Algeria (DZ 41)" : "Tiaret (TIA)","Algeria (DZ 42)" : "Tindouf (TIN)","Algeria (DZ 43)" : "Tipaza (TIP)","Algeria (DZ 44)" : "Tissemsilt (TIS)","Algeria (DZ 45)" : "Tizi Ouzou (TIZ)","Algeria (DZ 46)" : "Tlemcen (TLE)","Andorra (AD)" : "Andorra (AND)","Angola (AO 1)" : "Benguela (BEN)","Angola (AO 2)" : "Huambo (HUA)","Angola (AO 3)" : "Luanda (LUA)","Angola (AO 4)" : "Lunda Sul (LUS)","Anguilla (AI)" : "Anguilla (ANG)","Antarctica (AC)" : "Antarctica (ARC)","Antigua and Barbuda (AG)" : "Antigua and Barbuda (ANT)","Argentina (AR 1)" : "Buenos Aires (BA)","Argentina (AR 2)" : "Catamarca (CAT)","Argentina (AR 3)" : "Chaco (CHA)","Argentina (AR 4)" : "Chubut (CHU)","Argentina (AR 5)" : "Cordoba (CDB)","Argentina (AR 6)" : "Corrientes (COR)","Argentina (AR 7)" : "Distrito Federal (DF)","Argentina (AR 8)" : "Entre Rios (ERI)","Argentina (AR 9)" : "Formosa (FOR)","Argentina (AR 10)" : "Jujuy (JUJ)","Argentina (AR 11)" : "La Pampa (LPA)","Argentina (AR 12)" : "La Rioja (LRI)","Argentina (AR 13)" : "Mendoza (MEN)","Argentina (AR 14)" : "Misiones (MIS)","Argentina (AR 15)" : "Neuquen (NEU)","Argentina (AR 16)" : "Rio Negro (RNE)","Argentina (AR 17)" : "Salta (SAL)","Argentina (AR 18)" : "San Juan (SJU)","Argentina (AR 19)" : "San Luis (SLU)","Argentina (AR 20)" : "Santa Cruz (SCR)","Argentina (AR 21)" : "Santa Fe (SFE)","Argentina (AR 22)" : "Santiago del Estero (SDE)","Argentina (AR 23)" : "Tierra del Fuego (TDF)","Argentina (AR 24)" : "Tucuman (TUC)","Armenia (AM 1)" : "Aragatsotni (ARA)","Armenia (AM 2)" : "Ararati (ARR)","Armenia (AM 3)" : "Armaviri (ARM)","Armenia (AM 4)" : "Geghark'unik'i (GEG)","Armenia (AM 5)" : "K'aghak' Yerevan (KAY)","Armenia (AM 6)" : "Kalininskiy Rayon (KAL)","Armenia (AM 7)" : "Kotayk'i (KOT)","Armenia (AM 8)" : "Lorru (KAL)","Armenia (AM 9)" : "Shiraki (SHI)","Armenia (AM 10)" : "Syunik'i (SYU)","Armenia (AM 11)" : "Tavushi (TAV)","Armenia (AM 12)" : "Vayots' Dzori (VAY)","Aruba (AW)" : "Aruba (ARU)","Australia (AU 1)" : "Australian Capital Territory (ACT)","Australia (AU 2)" : "New South Wales (NSW)","Australia (AU 3)" : "Northern Territory (NTY)","Australia (AU 4)" : "Queensland (QLD)","Australia (AU 5)" : "South Australia (SAU)","Australia (AU 6)" : "Tasmania (TAS)","Australia (AU 7)" : "Victoria (VIC)","Australia (AU 8)" : "Western Australia (WAU)","Austria (AT 1)" : "Burgenland (BUR)","Austria (AT 2)" : "Karnten (KAR)","Austria (AT 3)" : "Niederosterreich (NIE)","Austria (AT 4)" : "Oberosterreich (OBE)","Austria (AT 5)" : "Salzburg (SAL)","Austria (AT 6)" : "Steiermark (STE)","Austria (AT 7)" : "Tirol (TIR)","Austria (AT 8)" : "Vorarlberg (VOR)","Austria (AT 9)" : "Wien (WIE)","Azerbaijan (AZ 1)" : "Abseron (ABS)","Azerbaijan (AZ 2)" : "Agcabadi (AGC)","Azerbaijan (AZ 3)" : "Agdam (AGM)","Azerbaijan (AZ 4)" : "Agdas (AGD)","Azerbaijan (AZ 5)" : "Agstafa (AGS)","Azerbaijan (AZ 6)" : "Agsu (AGU)","Azerbaijan (AZ 7)" : "Ali Bayramli Sahari (ALI)","Azerbaijan (AZ 8)" : "Astara (AST)","Azerbaijan (AZ 9)" : "Baki Sahari (BAK)","Azerbaijan (AZ 10)" : "Balakan (BAL)","Azerbaijan (AZ 11)" : "Barda (BAR)","Azerbaijan (AZ 12)" : "Beylaqan (BEY)","Azerbaijan (AZ 13)" : "Bilasuvar (BIL)","Azerbaijan (AZ 14)" : "Cabrayil (CAB)","Azerbaijan (AZ 15)" : "Calilabad (CAL)","Azerbaijan (AZ 16)" : "Daskasan (DAS)","Azerbaijan (AZ 17)" : "Davaci (DAV)","Azerbaijan (AZ 18)" : "Fuzuli (FUZ)","Azerbaijan (AZ 19)" : "Gadabay (GAD)","Azerbaijan (AZ 20)" : "Ganca Sahari (GAN)","Azerbaijan (AZ 21)" : "Goranboy (GOR)","Azerbaijan (AZ 22)" : "Goycay (GOY)","Azerbaijan (AZ 23)" : "Haciqabul (HAC)","Azerbaijan (AZ 24)" : "Imisli (IMI)","Azerbaijan (AZ 25)" : "Ismayilli (ISM)","Azerbaijan (AZ 26)" : "Kalbacar (KAL)","Azerbaijan (AZ 27)" : "Kurdamir (KUR)","Azerbaijan (AZ 28)" : "Lacin (LAC)","Azerbaijan (AZ 29)" : "Lankaran (LAN)","Azerbaijan (AZ 30)" : "Lankaran Sahari (LAs)","Azerbaijan (AZ 31)" : "Lerik (LER)","Azerbaijan (AZ 32)" : "Masalli (MAS)","Azerbaijan (AZ 33)" : "Mingacevir Sahari (MIN)","Azerbaijan (AZ 34)" : "Naftalan Sahari (NAF)","Azerbaijan (AZ 35)" : "Naxcivan Muxtar Respublikasi (NAX)","Azerbaijan (AZ 36)" : "Neftcala (NEF)","Azerbaijan (AZ 37)" : "Oguz (OGU)","Azerbaijan (AZ 38)" : "Qabala (QAB)","Azerbaijan (AZ 39)" : "Qax (QAX)","Azerbaijan (AZ 40)" : "Qazax (QAZ)","Azerbaijan (AZ 41)" : "Qobustan (QOB)","Azerbaijan (AZ 42)" : "Quba (QUB)","Azerbaijan (AZ 43)" : "Qubadli (QUL)","Azerbaijan (AZ 44)" : "Qusar (QUS)","Azerbaijan (AZ 45)" : "Saatli (SAA)","Azerbaijan (AZ 46)" : "Sabirabad (SAB)","Azerbaijan (AZ 47)" : "Saki (SAK)","Azerbaijan (AZ 48)" : "Saki Sahari (SAS)","Azerbaijan (AZ 49)" : "Salyan (SAL)","Azerbaijan (AZ 50)" : "Samaxi (SAM)","Azerbaijan (AZ 51)" : "Samkir (SAR)","Azerbaijan (AZ 52)" : "Samux (SAX)","Azerbaijan (AZ 53)" : "Siyazan (SIY)","Azerbaijan (AZ 54)" : "Susa (SUR)","Azerbaijan (AZ 55)" : "Tartar (TAR)","Azerbaijan (AZ 56)" : "Tovuz (TOV)","Azerbaijan (AZ 57)" : "Ucar (UCA)","Azerbaijan (AZ 58)" : "Xacmaz (XAC)","Azerbaijan (AZ 59)" : "Xankandi Sahari (XAN)","Azerbaijan (AZ 60)" : "Xanlar (XAL)","Azerbaijan (AZ 61)" : "Xizi (XIZ)","Azerbaijan (AZ 62)" : "Xocali (XOC)","Azerbaijan (AZ 63)" : "Xocavand (XOV)","Azerbaijan (AZ 64)" : "Yardimli (YAR)","Azerbaijan (AZ 65)" : "Yevlax (YEV)","Azerbaijan (AZ 66)" : "Yevlax Sahari (YES)","Azerbaijan (AZ 67)" : "Zangilan (ZAN)","Azerbaijan (AZ 68)" : "Zaqatala (ZAQ)","Azerbaijan (AZ 69)" : "Zardab (ZAR)","Bahamas (BS 1)" : "Abaco (ABA)","Bahamas (BS 2)" : "Andros (AND)","Bahamas (BS 3)" : "Bimini Islands (BIM)","Bahamas (BS 4)" : "Cat Island (CAT)","Bahamas (BS 5)" : "Eleuthera (ELE)","Bahamas (BS 6)" : "Exuma and Cays (EXU)","Bahamas (BS 7)" : "Grand Bahama (GBA)","Bahamas (BS 8)" : "Harbour Island and Spanish Wells (HIS)","Bahamas (BS 9)" : "Inagua (INA)","Bahamas (BS 10)" : "Long Island (LIS)","Bahamas (BS 11)" : "Mayaguana (MAY)","Bahamas (BS 12)" : "New Providence (NPR)","Bahamas (BS 13)" : "Ragged Islands (RAG)","Bahrain (BH 1)" : "Al Hadd (HAD)","Bahrain (BH 2)" : "Al Manamah (MAN)","Bahrain (BH 3)" : "Al Mintaqah al Gharbiyah (GHA)","Bahrain (BH 4)" : "Al Mintaqah al Wusta (WUS)","Bahrain (BH 5)" : "Al Mintaqah ash Shamaliyah (SHA)","Bahrain (BH 6)" : "Al Muharraq (MUH)","Bahrain (BH 7)" : "Ar Rifa` wa al Mintaqah al Janubiyah (RIF)","Bahrain (BH 8)" : "Jidd Hafs (JID)","Bahrain (BH 9)" : "Madinat Hamad (MAH)","Bahrain (BH 10)" : "Madinat `Isa (MAI)","Bahrain (BH 11)" : "Mintaqat Juzur Hawar (JUZ)","Bahrain (BH 12)" : "Sitrah (SIT)","Bangladesh (BD 1)" : "Chittagong (CHI)","Bangladesh (BD 2)" : "Dhaka (DHA)","Bangladesh (BD 3)" : "Khulna (KHU)","Bangladesh (BD 4)" : "Rajshahi (RAJ)","Barbados (BB 1)" : "Christ Church (CHR)","Barbados (BB 2)" : "Saint Andrew (AND)","Barbados (BB 3)" : "Saint George (GEO)","Barbados (BB 4)" : "Saint James (JAM)","Barbados (BB 5)" : "Saint John (JOH)","Barbados (BB 6)" : "Saint Joseph (JOS)","Barbados (BB 7)" : "Saint Lucy (LUC)","Barbados (BB 8)" : "Saint Michael (MIC)","Barbados (BB 9)" : "Saint Peter (PET)","Barbados (BB 10)" : "Saint Philip (PHI)","Barbados (BB 11)" : "Saint Thomas (THO)","Belarus (BY 1)" : "Brestskaya (BRE)","Belarus (BY 2)" : "Homyel'skaya (HOM)","Belarus (BY 3)" : "Hrodzyenskaya (HRO)","Belarus (BY 4)" : "Mahilyowskaya (MAH)","Belarus (BY 5)" : "Minskaya (MIN)","Belarus (BY 6)" : "Unknown (UNK)","Belarus (BY 7)" : "Vitsyebskaya (VIT)","Belgium (BE 1)" : "Antwerpen (ANT)","Belgium (BE 2)" : "Hainaut (HAI)","Belgium (BE 3)" : "Liege (LIE)","Belgium (BE 4)" : "Limburg (LIM)","Belgium (BE 5)" : "Luxembourg (LUX)","Belgium (BE 6)" : "Namur (NAM)","Belgium (BE 7)" : "Oost-Vlaanderen (OOV)","Belgium (BE 8)" : "Unknown (UNK)","Belgium (BE 9)" : "West-Vlaanderen (WEV)","Belize (BZ 1)" : "Belize (BEL)","Belize (BZ 2)" : "Cayo (CAY)","Belize (BZ 3)" : "Corozal (COR)","Belize (BZ 4)" : "Orange Walk (ORA)","Belize (BZ 5)" : "Stann Creek (STA)","Belize (BZ 6)" : "Toledo (TOL)","Benin (BJ)" : "Unknown (UNK)","Bermuda (BM 1)" : "Devonshire (DEV)","Bermuda (BM 2)" : "Hamilton (HAM)","Bermuda (BM 3)" : "Paget (PAG)","Bermuda (BM 4)" : "Pembroke (PEM)","Bermuda (BM 5)" : "Saint Georges (SGS)","Bermuda (BM 6)" : "Sandys (SAN)","Bermuda (BM 7)" : "Smiths (SMI)","Bermuda (BM 8)" : "Southampton (SOU)","Bermuda (BM 9)" : "Warwick (WAR)","Bhutan (BT)" : "Bhutan (BHU)","Bolivia (BO 1)" : "Beni (BEN)","Bolivia (BO 2)" : "Chuquisaca (CHU)","Bolivia (BO 3)" : "Cochabamba (COC)","Bolivia (BO 4)" : "La Paz (LAP)","Bolivia (BO 5)" : "Oruro (ORU)","Bolivia (BO 6)" : "Pando (PAN)","Bolivia (BO 7)" : "Potosi (POT)","Bolivia (BO 8)" : "Santa Cruz (SAN)","Bolivia (BO 9)" : "Tarija (TAR)","Bosnia and Herzegovina (BA 1)" : "Bosnia and Herzegovina (BOS)","Bosnia and Herzegovina (BA 2)" : "Republika Srpska (SRP)","Bosnia and Herzegovina (BA 3)" : "Unknown (UNK)","Botswana (BW 1)" : "Gaborone (GAB)","Botswana (BW 2)" : "Unknown (UNK)","Brazil (BR 1)" : "Acre (ACR)","Brazil (BR 2)" : "Alagoas (ALA)","Brazil (BR 3)" : "Amapa (AMP)","Brazil (BR 4)" : "Amazonas (AMZ)","Brazil (BR 5)" : "Bahia (BAH)","Brazil (BR 6)" : "Ceara (CEA)","Brazil (BR 7)" : "Distrito Federal (DF)","Brazil (BR 8)" : "Espirito Santo (ESA)","Brazil (BR 9)" : "Goias (GOI)","Brazil (BR 10)" : "Maranhao (MAR)","Brazil (BR 11)" : "Mato Grosso (MGR)","Brazil (BR 12)" : "Mato Grosso do Sul (MGS)","Brazil (BR 13)" : "Minas Gerais (MGE)","Brazil (BR 14)" : "Para (PAR)","Brazil (BR 15)" : "Paraiba (PRB)","Brazil (BR 16)" : "Parana (PRN)","Brazil (BR 17)" : "Pernambuco (PER)","Brazil (BR 18)" : "Piaui (PIA)","Brazil (BR 19)" : "Rio de Janeiro (RDJ)","Brazil (BR 20)" : "Rio Grande do Norte (RGN)","Brazil (BR 21)" : "Rio Grande do Sul (RGS)","Brazil (BR 22)" : "Rondonia (RON)","Brazil (BR 23)" : "Roraima (ROR)","Brazil (BR 24)" : "Santa Catarina (SCA)","Brazil (BR 25)" : "Sao Paulo (SPA)","Brazil (BR 26)" : "Sergipe (SER)","Brazil (BR 27)" : "Tocantins (TOC)","British Virgin Islands (VG)" : "British Virgin Islands (BVI)","Brunei (BN)" : "Brunei (BRU)","Bulgaria (BG 1)" : "Blagoevgrad (BLA)","Bulgaria (BG 2)" : "Burgas (BUR)","Bulgaria (BG 3)" : "Dobrich (DOB)","Bulgaria (BG 4)" : "Gabrovo (GAB)","Bulgaria (BG 5)" : "Khaskovo (KHA)","Bulgaria (BG 6)" : "Kurdzhali (KUR)","Bulgaria (BG 7)" : "Kyustendil (KYU)","Bulgaria (BG 8)" : "Lovech (LOV)","Bulgaria (BG 9)" : "Montana (MON)","Bulgaria (BG 10)" : "Pazardzhik (PAZ)","Bulgaria (BG 11)" : "Pernik (PER)","Bulgaria (BG 12)" : "Pleven (PLE)","Bulgaria (BG 13)" : "Plovdiv (PLO)","Bulgaria (BG 14)" : "Razgrad (RAZ)","Bulgaria (BG 15)" : "Ruse (RUS)","Bulgaria (BG 16)" : "Shumen (SHU)","Bulgaria (BG 17)" : "Silistra (SIL)","Bulgaria (BG 18)" : "Sliven (SLI)","Bulgaria (BG 19)" : "Smolyan (SMO)","Bulgaria (BG 20)" : "Sofiya (SOF)","Bulgaria (BG 21)" : "Sofiya-Grad (SFG)","Bulgaria (BG 22)" : "Stara Zagora (STA)","Bulgaria (BG 23)" : "Turgovishte (TUR)","Bulgaria (BG 24)" : "Varna (VAR)","Bulgaria (BG 25)" : "Veliko Turnovo (VEL)","Bulgaria (BG 26)" : "Vidin (VID)","Bulgaria (BG 27)" : "Vratsa (VRA)","Bulgaria (BG 28)" : "Yambol (YAM)","Burkina Faso (BF)" : "Burkina Faso (BUF)","Burundi (BN)" : "Burundi (BUR)","Cambodia (KH 1)" : "Batdambang (BAT)","Cambodia (KH 2)" : "Kampong Cham (CHA)","Cambodia (KH 3)" : "Kampong Chhnang (CHH)","Cambodia (KH 4)" : "Kampong Spoe (SPO)","Cambodia (KH 5)" : "Kampong Thum (THU)","Cambodia (KH 6)" : "Kampot (KAM)","Cambodia (KH 7)" : "Kandal (KAN)","Cambodia (KH 8)" : "Kaoh Kong (KAO)","Cambodia (KH 9)" : "Kracheh (KRA)","Cambodia (KH 10)" : "Mondol Kiri (MON)","Cambodia (KH 11)" : "Pouthisat (POU)","Cambodia (KH 12)" : "Preah Vihear (PRE)","Cambodia (KH 13)" : "Prey Veng (PRV)","Cambodia (KH 14)" : "Rotanah Kiri (ROT)","Cambodia (KH 15)" : "Siem Reab (SIE)","Cambodia (KH 16)" : "Stoeng Treng (STO)","Cambodia (KH 17)" : "Svay Rieng (SVA)","Cambodia (KH 18)" : "Takev (TAK)","Cambodia (KH 19)" : "Unknown (UNK)","Cameroon (CM)" : "Cameroon (CAM)","Canada (CA 1)" : "Alberta (AB)","Canada (CA 2)" : "British Columbia (BC)","Canada (CA 3)" : "Manitoba (MB)","Canada (CA 4)" : "New Brunswick (NB)","Canada (CA 5)" : "Newfoundland and Labrador (NL)","Canada (CA 6)" : "Northwest Territories (NT)","Canada (CA 7)" : "Nova Scotia (NS)","Canada (CA 8)" : "Nunavut (NU)","Canada (CA 9)" : "Ontario (ON)","Canada (CA 10)" : "Prince Edward Island (PE)","Canada (CA 11)" : "Quebec (QC)","Canada (CA 12)" : "Saskatchewan (SK)","Canada (CA 13)" : "Yukon (YT)","Cape Verde (CV)" : "Cape Verde (CPV)","Cayman Islands (KY)" : "Cayman Islands (CYN)","Central African Republic (CF)" : "Central African Republic (CAR)","Chad (TD 1)" : "Batha (BAT)","Chad (TD 2)" : "Biltine (BIL)","Chad (TD 3)" : "Borkou-Ennedi-Tibesti (BET)","Chad (TD 4)" : "Chari-Baguirmi (CHB)","Chad (TD 5)" : "Guera (GUE)","Chad (TD 6)" : "Kanem (KAN)","Chad (TD 7)" : "Lac (LAC)","Chad (TD 8)" : "Logone Occidental (LOC)","Chad (TD 9)" : "Logone Oriental (LOR)","Chad (TD 10)" : "Mayo-Kebbi (MAK)","Chad (TD 11)" : "Moyen-Chari (MOC)","Chad (TD 12)" : "Ouaddai (OUA)","Chad (TD 13)" : "Salamat (SAL)","Chad (TD 14)" : "Tandjile (TAN)","Chile (CL 1)" : "Aisen del General Carlos Ibanez del Campo (AIS)","Chile (CL 2)" : "Antofagasta (ANT)","Chile (CL 3)" : "Araucania (ARA)","Chile (CL 4)" : "Atacama (ATA)","Chile (CL 5)" : "Bio-Bio (BIO)","Chile (CL 6)" : "Coquimbo (COQ)","Chile (CL 7)" : "Libertador G.B. O'Higgins (LIB)","Chile (CL 8)" : "Los Lagos (LAG)","Chile (CL 9)" : "Magallanes y de la Antartica Chilena (MAG)","Chile (CL 10)" : "Maule (MAU)","Chile (CL 11)" : "Region Metropolitana (MET)","Chile (CL 12)" : "Tarapaca (TAR)","Chile (CL 13)" : "Valparaiso (VAL)","China (CN 1)" : "Anhui (ANH)","China (CN 2)" : "Beijing Shi (BEJ)","China (CN 3)" : "Chongqing Shi (CHS)","China (CN 4)" : "Fujian (FUJ)","China (CN 5)" : "Gansu (GAN)","China (CN 6)" : "Guangdong (GUA)","China (CN 7)" : "Guangxi Zhuangzu (GUZ)","China (CN 8)" : "Guizhou (GUI)","China (CN 9)" : "Hainan (HAI)","China (CN 10)" : "Hebei (HEB)","China (CN 11)" : "Heilongjiang (HEI)","China (CN 12)" : "Henan (HEN)","China (CN 13)" : "Hubei (HUB)","China (CN 14)" : "Hunan (HUN)","China (CN 15)" : "Inner Mongolia (IMO)","China (CN 16)" : "Jiangsu (JIU)","China (CN 17)" : "Jiangxi (JII)","China (CN 18)" : "Jilin (JIN)",
										"China (CN 19)" : "Liaoning (LIA)","China (CN 20)" : "Ningxia Huizu (NIH)","China (CN 21)" : "Qinghai (QIN)","China (CN 22)" : "Shaanxi (SHX)","China (CN 23)" : "Shandong (SHG)","China (CN 24)" : "Shanxi (SHI)","China (CN 25)" : "Sichuan (SIC)","China (CN 26)" : "Tibet (TIB)","China (CN 27)" : "Unknown (UNK)","China (CN 28)" : "Xinjiang Uygur (XIU)","China (CN 29)" : "Yunnan (YUN)","China (CN 30)" : "Zhejiang (ZHE)","Christmas Island (CX)" : "Christmas Island (CHI)","Columbia (CO 1)" : "Antioquia (ANT)","Columbia (CO 2)" : "Atlantico (ALT)","Columbia (CO 3)" : "Bogota (BOG)","Columbia (CO 4)" : "Bolivar (BOL)","Columbia (CO 5)" : "Cauca (CAU)","Columbia (CO 6)" : "Cundinamarca (CUN)","Columbia (CO 7)" : "Magdalena (MAG)","Columbia (CO 8)" : "Meta (MET)","Columbia (CO 9)" : "Santander (SAN)","Columbia (CO 10)" : "Valle del Cauca (VAL)","Comoros (KM)" : "Comoros (COM)","Congo (CG 1)" : "Bouenza (BOU)","Congo (CG 2)" : "Brazzaville (BRA)","Congo (CG 3)" : "Cuvette (CUV)","Congo (CG 4)" : "Kouilou (KOU)","Congo (CG 5)" : "Lekoumou (LEK)","Congo (CG 6)" : "Likouala (LIK)","Congo (CG 7)" : "Niari (NIA)","Congo (CG 8)" : "Plateaux (PLA)","Congo (CG 9)" : "Pool (POO)","Congo (CG 10)" : "Sangha (SAN)","Cook Islands (CW)" : "Cook Islands (CKI)","Costa Rica (CR 1)" : "Alajuela (ALA)","Costa Rica (CR 2)" : "Cartago (CAR)","Costa Rica (CR 3)" : "Guanacaste (GUA)","Costa Rica (CR 4)" : "Heredia (HER)","Costa Rica (CR 5)" : "Limon (LIM)","Costa Rica (CR 6)" : "Puntarenas (PUN)","Costa Rica (CR 7)" : "San Jose (SJO)","Cote D'Ivoire (CI)" : "Cote D'Ivoire (CDI)","Croatia (HR 1)" : "Bjelovarsko-Bilogorska (BJE)","Croatia (HR 2)" : "Brodsko-Posavska (BRO)","Croatia (HR 3)" : "Dubrovacko-Neretvanska (DUB)","Croatia (HR 4)" : "Grad Zagreb (GRA)","Croatia (HR 5)" : "Istarska (IST)","Croatia (HR 6)" : "Karlovacka (KAR)","Croatia (HR 7)" : "Koprivnicko-Krizevacka (KOP)","Croatia (HR 8)" : "Krapinsko-Zagorska (KRA)","Croatia (HR 9)" : "Licko-Senjska (LIC)","Croatia (HR 10)" : "Medimurska (MED)","Croatia (HR 11)" : "Osjecko-Baranjska (OSJ)","Croatia (HR 12)" : "Pozesko-Slavonska (POZ)","Croatia (HR 13)" : "Primorsko-Goranska (PRI)","Croatia (HR 14)" : "Sibensko-Kninska (SIB)","Croatia (HR 15)" : "Sisacko-Moslavacka (SIS)","Croatia (HR 16)" : "Splitsko-Dalmatinska (SPL)","Croatia (HR 17)" : "Varazdinska (VAR)","Croatia (HR 18)" : "Viroviticko-Podravska (VIR)","Croatia (HR 19)" : "Vukovarsko-Srijemska (VUK)","Croatia (HR 20)" : "Zagrebacka (ZAG)","Cuba (CU 1)" : "Camaguey (CAM)","Cuba (CU 2)" : "Ciego de Avila (CDA)","Cuba (CU 3)" : "Cienfuegos (CIE)","Cuba (CU 4)" : "Ciudad de la Habana (CLH)","Cuba (CU 5)" : "Granma (GRA)","Cuba (CU 6)" : "Guantanamo (GUA)","Cuba (CU 7)" : "Holguin (HOL)","Cuba (CU 8)" : "Isla de la Juventud (JUV)","Cuba (CU 9)" : "La Habana (HAB)","Cuba (CU 10)" : "Las Tunas (TUN)","Cuba (CU 11)" : "Matanzas (MAT)","Cuba (CU 12)" : "Pinar del Rio (PIN)","Cuba (CU 13)" : "Sancti Spiritus (SSP)","Cuba (CU 14)" : "Santiago de Cuba (SAN)","Cuba (CU 15)" : "Villa Clara (VIL)","Cyprus (CY)" : "Cyprus (CYP)","Czech Republic (CZ)" : "Czech Republic (CZE)","Democratic Repubilic of Congo (CD 1)" : "Bandundu (BAN)","Democratic Repubilic of Congo (CD 2)" : "Bas-Congo (BAS)","Democratic Repubilic of Congo (CD 3)" : "Equateur (EQU)","Democratic Repubilic of Congo (CD 4)" : "Kasai-Occidental (KOC)","Democratic Repubilic of Congo (CD 5)" : "Katanga (KAT)","Democratic Repubilic of Congo (CD 6)" : "Kinshasa (KIN)","Democratic Repubilic of Congo (CD 7)" : "Kivu (KIV)","Democratic Repubilic of Congo (CD 8)" : "Maniema (MAN)","Democratic Repubilic of Congo (CD 9)" : "Nord-Kivu (NKI)","Democratic Repubilic of Congo (CD 10)" : "Orientale (ORI)","Democratic Repubilic of Congo (CD 11)" : "Sud-Kivu (SKI)","Denmark (DK 1)" : "Arhus Amt (ARH)","Denmark (DK 2)" : "Bornholms Amt (BOR)","Denmark (DK 3)" : "Frederiksberg Kommune (FK)","Denmark (DK 4)" : "Frederiksborg Amt (FRE)","Denmark (DK 5)" : "Fyns Amt (FYN)","Denmark (DK 6)" : "Kobenhavns Amt (KOB)","Denmark (DK 7)" : "Kobenhavns Kommune (KK)","Denmark (DK 8)" : "Nordjyllands Amt (NJL)","Denmark (DK 9)" : "Ribe Amt (RIB)","Denmark (DK 10)" : "Ringkobing Amt (RIN)","Denmark (DK 11)" : "Roskilde Amt (ROS)","Denmark (DK 12)" : "Sonderjyllands Amt (SJL)","Denmark (DK 13)" : "Storstroms Amt (STO)","Denmark (DK 14)" : "Vejle Amt (VEJ)","Denmark (DK 15)" : "Vestsjaellands Amt (VSL)","Denmark (DK 16)" : "Viborg Amt (VIB)","Djibouti (DJ)" : "Djibouti (DJI)","Dominica (DM)" : "Dominica (DOM)","Dominican Republic (DO 1)" : "Azua (AZU)","Dominican Republic (DO 2)" : "Baoruco (BAH)","Dominican Republic (DO 3)" : "Barahona (BAR)","Dominican Republic (DO 4)" : "Dajabon (DAJ)","Dominican Republic (DO 5)" : "Distrito Nacional (DN)","Dominican Republic (DO 6)" : "Duarte (DUA)","Dominican Republic (DO 7)" : "El Seibo (ESE)","Dominican Republic (DO 8)" : "Elias Pina (EPA)","Dominican Republic (DO 9)" : "Espaillat (ESP)","Dominican Republic (DO 10)" : "Hato Mayor (HMA)","Dominican Republic (DO 11)" : "Independencia (IND)","Dominican Republic (DO 12)" : "La Altagracia (LAL)","Dominican Republic (DO 13)" : "La Romana (LRO)","Dominican Republic (DO 14)" : "La Vega (LVE)","Dominican Republic (DO 15)" : "Maria Trinidad Sanchez (MTS)","Dominican Republic (DO 16)" : "Monsenor Nouel (MSN)","Dominican Republic (DO 17)" : "Monte Cristi (MCR)","Dominican Republic (DO 18)" : "Monte Plata (MPL)","Dominican Republic (DO 19)" : "Pedernales (PED)","Dominican Republic (DO 20)" : "Peravia (PER)","Dominican Republic (DO 21)" : "Puerto Plata (PPL)","Dominican Republic (DO 22)" : "Salcedo (SAL)","Dominican Republic (DO 23)" : "Samana (SAM)","Dominican Republic (DO 24)" : "San Cristobal (SCR)","Dominican Republic (DO 25)" : "San Juan (SJU)","Dominican Republic (DO 26)" : "San Pedro de Macoris (SPM)","Dominican Republic (DO 27)" : "Sanchez Ramirez (SRA)","Dominican Republic (DO 28)" : "Santiago (SAN)","Dominican Republic (DO 29)" : "Santiago Rodriguez (SRO)","Dominican Republic (DO 30)" : "Valverde (VAL)","East Timor (TL)" : "East Timor (ETM)","Ecuador (EC 1)" : "Azuay (AZU)","Ecuador (EC 2)" : "Boliar (BOL)","Ecuador (EC 3)" : "Canar (CAN)","Ecuador (EC 4)" : "Carchi (CAR)","Ecuador (EC 5)" : "Chimborazo (CHI)","Ecuador (EC 6)" : "Cotopaxi (COT)","Ecuador (EC 7)" : "El Oro (EOR)","Ecuador (EC 8)" : "Esmeraldas (ESM)","Ecuador (EC 9)" : "Galapagos (GAL)","Ecuador (EC 10)" : "Guayas (GUA)","Ecuador (EC 11)" : "Imbabura (IMB)","Ecuador (EC 12)" : "Loja (LOJ)","Ecuador (EC 13)" : "Los Rios (LRI)","Ecuador (EC 14)" : "Manabi (MAN)","Ecuador (EC 15)" : "Morona-Santiago (MSA)","Ecuador (EC 16)" : "Napo (NAP)","Ecuador (EC 17)" : "Orellana (ORE)","Ecuador (EC 18)" : "Pastaza (PAS)","Ecuador (EC 19)" : "Pichincha (PIC)","Ecuador (EC 20)" : "Sucumbios (SUC)","Ecuador (EC 21)" : "Zamora-Chinchipe (ZCH)","Egypt (EG 1)" : "Ad-Daqahiyah (DAQ)","Egypt (EG 2)" : "Al-Bahr al-Ahmar (BAH)","Egypt (EG 3)" : "Al-Buhayrah (BUH)","Egypt (EG 4)" : "Al-Fayyum (FAY)","Egypt (EG 5)" : "Al-Gharbiyah (GHA)","Egypt (EG 6)" : "Al-Iskandariyah (ISK)","Egypt (EG 7)" : "Al-Isma'iliyah (ISM)","Egypt (EG 8)" : "Al-Jizah (JIZ)","Egypt (EG 9)" : "Al-Minufiyah (MNF)","Egypt (EG 10)" : "Al-Minya (MIN)","Egypt (EG 11)" : "Al-Qahirah (QAH)","Egypt (EG 12)" : "Al-Qalyubyah (QAL)","Egypt (EG 13)" : "Al-Wadi al-Jadid (WJA)","Egypt (EG 14)" : "As-Suways (SUW)","Egypt (EG 15)" : "Ash-Sharqiyah (SHA)","Egypt (EG 16)" : "Aswan (ASW)","Egypt (EG 17)" : "Asyut (ASY)","Egypt (EG 18)" : "Bani Suwayf (BSU)","Egypt (EG 19)" : "Bur Sa'id (BSA)","Egypt (EG 20)" : "Dumyat (DUM)","Egypt (EG 21)" : "Kafr ash-Shaykh (KSH)","Egypt (EG 22)" : "Marsa Matruh (MMA)","Egypt (EG 23)" : "Qina (QIN)","Egypt (EG 24)" : "Sawhaj (SAW)","Egypt (EG 25)" : "Sina' al-Janubiyah (SJA)","Egypt (EG 26)" : "Sina' ash-Shamaliyah (SSH)","El Salvador (SV 1)" : "Ahuachapan (AHU)","El Salvador (SV 2)" : "Cabanas (CAB)","El Salvador (SV 3)" : "Chalatenango (CHA)","El Salvador (SV 4)" : "Cuscatlan (CUS)","El Salvador (SV 5)" : "La Libertad (LLI)","El Salvador (SV 6)" : "La Paz (LPA)","El Salvador (SV 7)" : "La Union (LUN)","El Salvador (SV 8)" : "Morazan (MOR)","El Salvador (SV 9)" : "San Miguel (SMI)","El Salvador (SV 10)" : "San Salvador (SSA)","El Salvador (SV 11)" : "San Vicente (SVI)","El Salvador (SV 12)" : "Santa Ana (SAN)","El Salvador (SV 13)" : "Sonsonate (SON)","El Salvador (SV 14)" : "Usulutan (USU)","Equatorial Guinea (GQ)" : "Equatorial Guinea (EQG)","Eritrea (ER)" : "Eritrea (ERI)","Estonia (EE)" : "Estonia (EST)","Ethiopia (ET)" : "Ethiopia (ETH)","Falkland Islands (FK)" : "Falkland Islands (FAL)","Faroe Islands (FO)" : "Faroe Islands (FAR)","Fiji (FJ)" : "Fiji (FIJ)","Finland (FI 1)" : "Alands Lan (ALA)","Finland (FI 2)" : "Lapplands Lan (LPA)","Finland (FI 3)" : "Ostra Finlands Lan (OST)","Finland (FI 4)" : "Sodra Finlands Lan (SOD)","Finland (FI 5)" : "Uleaborgs Lan (ULE)","Finland (FI 6)" : "Vastra Finlands Lan (VAS)","France (FR 1)" : "Alsace (ALS)","France (FR 2)" : "Aquitaine (AQU)","France (FR 3)" : "Auvergne (AUV)","France (FR 4)" : "Basse-Normandie (BAS)","France (FR 5)" : "Bourgogne (BOU)","France (FR 6)" : "Bretagne (BRE)","France (FR 7)" : "Centre (CEN)","France (FR 8)" : "Champagne-Ardenne (CHA)","France (FR 9)" : "Corse (COR)","France (FR 10)" : "Franche-Comte (FRA)","France (FR 11)" : "Haute-Normandie (HAU)","France (FR 12)" : "Ile-de-France (ILE)","France (FR 13)" : "Languedoc-Roussillon (LAN)","France (FR 14)" : "Limousin (LIM)","France (FR 15)" : "Lorraine (LOR)","France (FR 16)" : "Midi-Pyrenees (MID)","France (FR 17)" : "Nord-Pas-de-Calais (NOR)","France (FR 18)" : "Pays-de-la Loire (PAY)","France (FR 19)" : "Picardie (PIC)","France (FR 20)" : "Poitou-Charentes (POI)","France (FR 21)" : "Provence-Alpes-Cote d'Azur (PRO)","France (FR 22)" : "Rhooe-Alpes (RHO)","France (FR 23)" : "Unknown (UNK)","French Guiana (GF)" : "French Guiana (FGU)","French Polynesia (FP)" : "French Polynesia (FPY)","Gabon (GA)" : "Gabon (GAB)","Gambia (GM)" : "Gambia (GAM)","Georgia (GE)" : "Georgia (GEO)","Germany (DE 1)" : "Baden-Wurttemberg (BW)","Germany (DE 2)" : "Bayern (BY)","Germany (DE 3)" : "Berlin (BE)","Germany (DE 4)" : "Brandenburg (BB)","Germany (DE 5)" : "Bremen (HB)","Germany (DE 6)" : "Hamburg (HH)","Germany (DE 7)" : "Hessen (HE)","Germany (DE 8)" : "Mecklenburg-Vorpommern (MV)","Germany (DE 9)" : "Niedersachsen (NI)","Germany (DE 10)" : "Nordrhein-Westfalen (NW)","Germany (DE 11)" : "Rheinland-Pfalz (RP)","Germany (DE 12)" : "Saarland (SL)","Germany (DE 13)" : "Sachsen (SN)","Germany (DE 14)" : "Sachsen-Anhalt (ST)","Germany (DE 15)" : "Schleswig-Holstein (SH)","Germany (DE 16)" : "Thuringen (TH)","Ghana (GH)" : "Ghana (GHA)","Gibraltar (GI)" : "Gibraltar (GIB)","Greece (GR 1)" : "Aegean Islands (AIY)","Greece (GR 2)" : "Attiki (ATT)","Greece (GR 3)" : "Central Greece and Evvoia (SEE)","Greece (GR 4)" : "Crete (KRI)","Greece (GR 5)" : "Epirus (IPI)","Greece (GR 6)" : "Ionia Islands (ION)","Greece (GR 7)" : "Macedonia (MAK)","Greece (GR 8)" : "Peloponnesus (PEL)","Greece (GR 9)" : "Thessalia (THE)","Greece (GR 10)" : "Thrace (THR)","Greenland (GL)" : "Greenland (GL)","Grenada (GD)" : "Grenada (GJ)","Guadeloupe (GP)" : "Guadeloupe (GUA)","Guatemala (GT 1)" : "Alta Verapaz (AVE)","Guatemala (GT 2)" : "Baja Verapaz (BVE)","Guatemala (GT 3)" : "Chimaltenango (CMT)","Guatemala (GT 4)" : "Chiquimula (CQM)","Guatemala (GT 5)" : "El Progreso (EPR)","Guatemala (GT 6)" : "Escuintla (ESC)","Guatemala (GT 7)" : "Guatemala (GUA)","Guatemala (GT 8)" : "Huehuetenango (HUE)","Guatemala (GT 9)" : "Izabal (IZA)","Guatemala (GT 10)" : "Jalapa (JAL)","Guatemala (GT 11)" : "Jutiapa (JUT)","Guatemala (GT 12)" : "Peten (PET)","Guatemala (GT 13)" : "Quetzaltenango (QUE)","Guatemala (GT 14)" : "Quiche (QUI)","Guatemala (GT 15)" : "Retalhuleu (RET)","Guatemala (GT 16)" : "Sacatepequez (SAC)","Guatemala (GT 17)" : "San Marcos (SMA)","Guatemala (GT 18)" : "Santa Rosa (SRO)","Guatemala (GT 19)" : "Solola (SOL)","Guatemala (GT 20)" : "Suchitepequez (SUC)","Guatemala (GT 21)" : "Totonicapan (TOT)","Guatemala (GT 22)" : "Zacapa (ZAC)","Guernsey (GG)" : "Guernsey (GUR)","Guinea (GN)" : "Guinea (GUI)","Guinea-Bissau (GW)" : "Guinea-Bissau (GUB)","Guyana (GY)" : "Guyana (GUY)","Haiti (HT)" : "Haiti (HAI)","Honduras (HN 1)" : "Atlantida (ATL)","Honduras (HN 2)" : "Choluteca (CHO)","Honduras (HN 3)" : "Colon (COL)","Honduras (HN 4)" : "Comayagua (COM)","Honduras (HN 5)" : "Copan (COP)","Honduras (HN 6)" : "El Paraiso (EPA)","Honduras (HN 7)" : "Francisco Morazan (FMO)","Honduras (HN 8)" : "Gracias a Dios (GAD)","Honduras (HN 9)" : "Intibuca (INT)","Honduras (HN 10)" : "Islas de la Bahia (IBA)","Honduras (HN 11)" : "La Paz (LPA)","Honduras (HN 12)" : "Lempira (LEM)","Honduras (HN 13)" : "Ocotepeque (OCO)","Honduras (HN 14)" : "Olancho (OLA)","Honduras (HN 15)" : "Santa Barbara (SBA)","Honduras (HN 16)" : "Valle (VAL)","Honduras (HN 17)" : "Yoro (YOR)","Hungary (HU 1)" : "Bacs-Kiskun Megye (BAC)","Hungary (HU 2)" : "Baranya Megye (BAR)","Hungary (HU 3)" : "Bekes Megye (BEK)","Hungary (HU 4)" : "Borsod-Abauj-Zemplen Megye (BOR)","Hungary (HU 5)" : "Budapest Fovaros (BUD)","Hungary (HU 6)" : "Csongrad Megye (CSO)","Hungary (HU 7)" : "Debrecen Megyei Varos (DEB)","Hungary (HU 8)" : "Fejer Megye (FEJ)","Hungary (HU 9)" : "Gyor Megyei Varos (GYO)","Hungary (HU 10)" : "Gyor-Moson-Sopron Megye (GYO)","Hungary (HU 11)" : "Hajdu-Bihar Megye (HAJ)","Hungary (HU 12)" : "Heves Megye (HEV)","Hungary (HU 13)" : "Jasz-Nagykun-Szolnok Megye (JAS)","Hungary (HU 14)" : "Komarom-Esztergom Megye (KOM)","Hungary (HU 15)" : "Miskolc Megyei Varos (MIS)","Hungary (HU 16)" : "Nograd Megye (NOG)","Hungary (HU 17)" : "Pecs Megyei Varos (PEC)","Hungary (HU 18)" : "Pest Megye (PES)","Hungary (HU 19)" : "Somogy Megye (SOM)","Hungary (HU 20)" : "Szabolcs-Szatmar-Bereg Megye (SZA)","Hungary (HU 21)" : "Szeged Megyei Varos (SZE)","Hungary (HU 22)" : "Tolna Megye (TOL)","Hungary (HU 23)" : "Vas Megye (VAS)","Hungary (HU 24)" : "Veszprem Megye (VES)","Hungary (HU 25)" : "Zala Megye (ZAL)","Iceland (IS 1)" : "Arnessysla (ARN)","Iceland (IS 2)" : "Austur-Bardhastrandarsysla (ABA)","Iceland (IS 3)" : "Austur-Hunavatnssysla (AHU)","Iceland (IS 4)" : "Austur-Skaftafellssysla (ASK)","Iceland (IS 5)" : "Borgarfjardharsysla (BOR)","Iceland (IS 6)" : "Dalasysla (DAL)","Iceland (IS 7)" : "Eyjafjardharsysla (EYJ)","Iceland (IS 8)" : "Gullbringusysla (GUL)","Iceland (IS 9)" : "Kjosarsysla (KJY)","Iceland (IS 10)" : "Myrasysla (MYR)","Iceland (IS 11)" : "Nordhur-Isafjardharsysla (NIS)","Iceland (IS 12)" : "Nordhur-Mulasysla (NMU)","Iceland (IS 13)" : "Nordhur-Thingeyjarsysla (NTY)","Iceland (IS 14)" : "Rangarvallasysla (RNG)","Iceland (IS 15)" : "Skagafjardharsysla (SKA)","Iceland (IS 16)" : "Snaefellsnessysla- og Hnappadalssysla (SHN)","Iceland (IS 17)" : "Strandasysla (STR)","Iceland (IS 18)" : "Sudhur-Mulasysla (SMU)","Iceland (IS 19)" : "Sudhur-Thingeijjar (STI)","Iceland (IS 20)" : "Vestur-Bardhastrandarsysla (VBA)","Iceland (IS 21)" : "Vestur-Hunavatnssysla (VHU)","Iceland (IS 22)" : "Vestur-Isafjardharsysla (VIS)","Iceland (IS 23)" : "Vestur-Skaftafellssysla (VSK)","India (IN 1)" : "Andaman and Nicobar Islands (ANI)","India (IN 2)" : "Andhra Pradesh (AND)","India (IN 3)" : "Arunachal Pradesh (ARU)","India (IN 4)" : "Assam (ASS)","India (IN 5)" : "Bihar (BIH)","India (IN 6)" : "Chandigarh (CHA)","India (IN 7)" : "Dadra and Nagar Haveli (DAD)","India (IN 8)" : "Delhi (DEL)","India (IN 9)" : "Goa (GOA)","India (IN 10)" : "Gujarat (GUJ)","India (IN 11)" : "Haryana (HAR)","India (IN 12)" : "Himachal Pradesh (HIM)","India (IN 13)" : "Jammu and Kashmir (JAM)","India (IN 14)" : "Jharkhand (JHA)","India (IN 15)" : "Karnataka (KAR)","India (IN 16)" : "Kerala (KER)","India (IN 17)" : "Lakshadweep (LAK)","India (IN 18)" : "Madhya Pradesh (MAD)","India (IN 19)" : "Maharashtra (MAH)","India (IN 20)" : "Manipur (MAN)","India (IN 21)" : "Meghalaya (MEG)","India (IN 22)" : "Mizoram (MIZ)","India (IN 23)" : "Nagaland (NAG)","India (IN 24)" : "Orissa (ORI)","India (IN 25)" : "Pondicherry (PON)","India (IN 26)" : "Punjab (PUN)","India (IN 27)" : "Rajasthan (RAJ)","India (IN 28)" : "Sikkim (SIK)","India (IN 29)" : "Tamil Nadu (TAM)","India (IN 30)" : "Tripura (TRI)","India (IN 31)" : "Uttar Pradesh (UTT)","India (IN 32)" : "Uttaranchal (UAR)","India (IN 33)" : "West Bengal (WES)","Indonesia (ID 1)" : "Aceh (ACE)","Indonesia (ID 2)" : "Bali (BAL)","Indonesia (ID 3)" : "Bengkulu (BEN)","Indonesia (ID 4)" : "Jambi (JAM)","Indonesia (ID 5)" : "Jawa Barat (JBA)","Indonesia (ID 6)" : "Jawa Tengah (JTE)","Indonesia (ID 7)" : "Jawa Timur (JTI)","Indonesia (ID 8)" : "Kalimantan Barat (BAR)","Indonesia (ID 9)" : "Kalimantan Selatan (SEL)","Indonesia (ID 10)" : "Kalimantan Tengah (TEN)","Indonesia (ID 11)" : "Kalimantan Timur (TIM)","Indonesia (ID 12)" : "Lampung (LAM)","Indonesia (ID 13)" : "Maluku (MAL)","Indonesia (ID 14)" : "Nusa Tenggara Barat (NTB)","Indonesia (ID 15)" : "Nusa Tenggara Timur (NTT)","Indonesia (ID 16)" : "Papua (PAP)","Indonesia (ID 17)" : "Riau (RIA)","Indonesia (ID 18)" : "Sulawesi Selatan (SSE)","Indonesia (ID 19)" : "Sulawesi Tengah (STE)","Indonesia (ID 20)" : "Sulawesi Tenggara (STG)","Indonesia (ID 21)" : "Sulawesi Utara (SLU)","Indonesia (ID 22)" : "Sumatera Barat (SBA)","Indonesia (ID 23)" : "Sumatera Utara (SUT)",
										"Indonesia (ID 24)" : "Unknown (UNK)","Indonesia (ID 25)" : "Yogyakarta (YOG)","Iran (IR 1)" : "a Baluchestan (BAL)","Iran (IR 2)" : "ahall va Bakhtiari (BAK)","Iran (IR 3)" : "an-e Gharbi (GHA)","Iran (IR 4)" : "an-e Sharqi (SHA)","Iran (IR 5)" : "eh va Buyer Ahmad (KOH)","Iran (IR 6)" : "n (KOR)","Iran (IR 7)" : "n (KHU)","Iran (IR 8)" : "n (HOR)","Iraq (IQ 1)" : "Anbar (ANB)","Iraq (IQ 2)" : "Arbil (ARB)","Iraq (IQ 3)" : "Babil (BAB)","Iraq (IQ 4)" : "Baghdad (BAG)","Iraq (IQ 5)" : "Basrah (BAS)","Iraq (IQ 6)" : "Dahuk (DAH)","Iraq (IQ 7)" : "Dhi Qar (DHI)","Iraq (IQ 8)" : "Diyala (DIY)","Iraq (IQ 9)" : "Karbala' (KAR)","Iraq (IQ 10)" : "Maysan (MAY)","Iraq (IQ 11)" : "Muthanna (MUT)","Iraq (IQ 12)" : "Najaf (NAJ)","Iraq (IQ 13)" : "Ninawa (NIN)","Iraq (IQ 14)" : "Qadisiyah (QAD)","Iraq (IQ 15)" : "Salah ad Din (SAL)","Iraq (IQ 16)" : "Sulaymaniyah (SUL)","Iraq (IQ 17)" : "Ta'mim (TAM)","Iraq (IQ 18)" : "Wasit (WAS)","Ireland (IE 1)" : "Carlow (CAR)","Ireland (IE 2)" : "Cavan (CAV)","Ireland (IE 3)" : "Clare (CLA)","Ireland (IE 4)" : "Cork (COR)","Ireland (IE 5)" : "Donegal (DON)","Ireland (IE 6)" : "Dublin (DUB)","Ireland (IE 7)" : "Galway (GAL)","Ireland (IE 8)" : "Kerry (KRY)","Ireland (IE 9)" : "Kildare (KID)","Ireland (IE 10)" : "Kilkenny (KIK)","Ireland (IE 11)" : "Laois (LAO)","Ireland (IE 12)" : "Leitrim (LEI)","Ireland (IE 13)" : "Limerick (LIM)","Ireland (IE 14)" : "Longford (LON)","Ireland (IE 15)" : "Louth (LOU)","Ireland (IE 16)" : "Mayo (MAY)","Ireland (IE 17)" : "Meath (MEA)","Ireland (IE 18)" : "Monaghan (MON)","Ireland (IE 19)" : "Offaly (OFF)","Ireland (IE 20)" : "Roscommon (ROS)","Ireland (IE 21)" : "Sligo (SLI)","Ireland (IE 22)" : "Tipperary (TIP)","Ireland (IE 23)" : "Unknown (UNK)","Ireland (IE 24)" : "Waterford (WAT)","Ireland (IE 25)" : "Westmeath (WES)","Ireland (IE 26)" : "Wexford (WEX)","Ireland (IE 27)" : "Wicklow (WIC)","Isle of Man (IM)" : "Isle of Man (IOM)","Israel (IL 1)" : "Central District (CEN)","Israel (IL 2)" : "Haifa District (HAF)","Israel (IL 3)" : "Jerusalem District (JER)","Israel (IL 4)" : "Northern District (HAF)","Israel (IL 5)" : "Southern District (MEH)","Israel (IL 6)" : "Tel Aviv District (TEL)","Italy (IT 1)" : "Abruzzi (ABR)","Italy (IT 2)" : "Basilicata (BAS)","Italy (IT 3)" : "Calabria (CAL)","Italy (IT 4)" : "Campania (CAM)","Italy (IT 5)" : "Emilia-Romagna (EMI)","Italy (IT 6)" : "Friuli-Venezia Giulia (FRI)","Italy (IT 7)" : "Lazio (LAZ)","Italy (IT 8)" : "Liguria (LIG)","Italy (IT 9)" : "Lombardia (LOM)","Italy (IT 10)" : "Marche (MAR)","Italy (IT 11)" : "Molise (MOL)","Italy (IT 12)" : "Piemonte (PIE)","Italy (IT 13)" : "Puglia (PUG)","Italy (IT 14)" : "Sardegna (SAR)","Italy (IT 15)" : "Sicilia (SIC)","Italy (IT 16)" : "Toscana (TOS)","Italy (IT 17)" : "Trentino-Alto Adige (TRE)","Italy (IT 18)" : "Umbria (UMB)","Italy (IT 19)" : "Valle d'Aosta (VDA)","Italy (IT 20)" : "Veneto (VEN)","Jamaica (JM 1)" : "Clarendon (CLA)","Jamaica (JM 2)" : "Hanover (HAN)","Jamaica (JM 3)" : "Kingston (KIN)","Jamaica (JM 4)" : "Manchester (MAN)","Jamaica (JM 5)" : "Portland (POR)","Jamaica (JM 6)" : "Saint Andrews (AND)","Jamaica (JM 7)" : "Saint Ann (ANN)","Jamaica (JM 8)" : "Saint Catherine (CAT)","Jamaica (JM 9)" : "Saint Elizabeth (ELI)","Jamaica (JM 10)" : "Saint James (JAM)","Jamaica (JM 11)" : "Saint Mary (MAR)","Jamaica (JM 12)" : "Saint Thomas (THO)","Jamaica (JM 13)" : "Trelawny (TRE)","Jamaica (JM 14)" : "Westmoreland (WML)","Japan (JP 1)" : "Aichi (AIC)","Japan (JP 2)" : "Akita (AKI)","Japan (JP 3)" : "Aomori (AOM)","Japan (JP 4)" : "Chiba (CHI)","Japan (JP 5)" : "Ehime (EHI)","Japan (JP 6)" : "Fukui (FUI)","Japan (JP 7)" : "Fukuoka (FUA)","Japan (JP 8)" : "Fukushima (FUM)","Japan (JP 9)" : "Gifu (GIF)","Japan (JP 10)" : "Gumma (GUM)","Japan (JP 11)" : "Hiroshima (HIR)","Japan (JP 12)" : "Hokkaido (HOK)","Japan (JP 13)" : "Hyogo (HYO)","Japan (JP 14)" : "Ibaraki (IBA)","Japan (JP 15)" : "Ishikawa (ISH)","Japan (JP 16)" : "Iwate (IWA)","Japan (JP 17)" : "Kagawa (KAG)","Japan (JP 18)" : "Kagoshima (KAM)","Japan (JP 19)" : "Kanagawa (KAN)","Japan (JP 20)" : "Kochi (KOC)","Japan (JP 21)" : "Kumamoto (KUM)","Japan (JP 22)" : "Kyoto (KYO)","Japan (JP 23)" : "Mie (MIE)","Japan (JP 24)" : "Miyagi (MIG)","Japan (JP 25)" : "Miyazaki (MIZ)","Japan (JP 26)" : "Nagano (NAG)","Japan (JP 27)" : "Nagasaki (NAK)","Japan (JP 28)" : "Nara (NAR)","Japan (JP 29)" : "Niigata (NII)","Japan (JP 30)" : "Oita (OIT)","Japan (JP 31)" : "Okayama (OKA)","Japan (JP 32)" : "Okinawa (OKI)","Japan (JP 33)" : "Osaka (OSA)","Japan (JP 34)" : "Saga (SAG)","Japan (JP 35)" : "Saitama (SAI)","Japan (JP 36)" : "Shiga (SHG)","Japan (JP 37)" : "Shimane (SHM)","Japan (JP 38)" : "Shizuoka (SHZ)","Japan (JP 39)" : "Tochigi (TOC)","Japan (JP 40)" : "Tokushima (TOK)","Japan (JP 41)" : "Tokyo (TOY)","Japan (JP 42)" : "Tottori (TOT)","Japan (JP 43)" : "Toyama (TYM)","Japan (JP 44)" : "Wakayama (WAK)","Japan (JP 45)" : "Yamagata (YMT)","Japan (JP 46)" : "Yamaguchi (YMG)","Japan (JP 47)" : "Yamanashi (YMN)","Jersey (JE)" : "Jersey (JER)","Jordan (JO)" : "Jordan (JOR)","Kazakhstan (KZ)" : "Kazakhstan (KAZ)","Kenya (KE 1)" : "Central (CEN)","Kenya (KE 2)" : "Coast (CST)","Kenya (KE 3)" : "Eastern (EST)","Kenya (KE 4)" : "Nairobi (NAI)","Kenya (KE 5)" : "North Eastern (NEA)","Kenya (KE 6)" : "Nyanza (NYA)","Kenya (KE 7)" : "Rift Valley (RVY)","Kenya (KE 8)" : "Western (WST)","Kiribati (KI)" : "Kiribati (KIR)","Kuwait (KW 1)" : "Al-Ahmadi (AHM)","Kuwait (KW 2)" : "Al-Farwaniyah (FAR)","Kuwait (KW 3)" : "Al-Kuwayt (KUW)","Kuwait (KW 4)" : "Bubiyan and Warbah (BUB)","Kuwait (KW 5)" : "Hawalli (HAW)","Kyrgyzstan (KG)" : "Kyrgyzstan (KYR)","Laos (LA)" : "Laos (LAO)","Latvia (LV)" : "Latvia (LAT)","Lebanon (LB)" : "Lebanon (LEB)","Lesotho (LS)" : "Lesotho (LES)","Liberia (LR)" : "Liberia (LIB)","Libya (LY)" : "Libya (LIB)","Liechtenstein (LI)" : "Liechtenstein (LIE)","Lithuania (LT)" : "Lithuania (LIT)","Luxembourg (LU)" : "Luxembourg (LUX)","Macau (MA)" : "Macau (MAC)","Macedonia (MK)" : "Macedonia (MAC)","Madagascar (MG 1)" : "Antananarivo (ANT)","Madagascar (MG 2)" : "Antsiranana (ASI)","Madagascar (MG 3)" : "Fianarantsoa (FIA)","Madagascar (MG 4)" : "Mahajanga (MAH)","Madagascar (MG 5)" : "Toamasina (TOA)","Madagascar (MG 6)" : "Toliary (TOL)","Malawi (MW)" : "Malawi (MAL)","Malaysia (MY 1)" : "Johor (JOH)","Malaysia (MY 2)" : "Kedah (KED)","Malaysia (MY 3)" : "Kelantan (KEL)","Malaysia (MY 4)" : "Melaka (MEL)","Malaysia (MY 5)" : "Pahang (PAH)","Malaysia (MY 6)" : "Perak (PER)","Malaysia (MY 7)" : "Perlis (PES)","Malaysia (MY 8)" : "Pulau Pinang (PIN)","Malaysia (MY 9)" : "Sabah (SAB)","Malaysia (MY 10)" : "Sarawak (SAR)","Malaysia (MY 11)" : "Selangor (SEL)","Malaysia (MY 12)" : "Sembilan (SEM)","Malaysia (MY 13)" : "Terengganu (TER)","Malaysia (MY 14)" : "Unknown (UNK)","Malaysia (MY 15)" : "Wilayah Persekutuan (WIL)","Maldives (MV)" : "Maldives (MAL)","Mali (ML)" : "Mali (MAL)","Malta (MT)" : "Malta (MAL)","Marshall Islands (MH)" : "Marshall Islands (MRI)","Martinique (MB)" : "Martinique (MAR)","Mauritania (MR)" : "Mauritania (MAU)","Mauritius (MU)" : "Mauritius (MAU)","Mayotte (YT)" : "Mayotte (MAY)","Mexico (MX 1)" : "Aguascalientes (AGS)","Mexico (MX 2)" : "Baja California (BCN)","Mexico (MX 3)" : "Baja California Sur (BCS)","Mexico (MX 4)" : "Campeche (CAM)","Mexico (MX 5)" : "Chiapas (CHS)","Mexico (MX 6)" : "Chihuahua (CHI)","Mexico (MX 7)" : "Coahuila (COA)","Mexico (MX 8)" : "Colima (COL)","Mexico (MX 9)" : "Distrito Federal (DF)","Mexico (MX 10)" : "Durango (DGO)","Mexico (MX 11)" : "Guanajuato (GTO)","Mexico (MX 12)" : "Guerrero (GRO)","Mexico (MX 13)" : "Hidalgo (HGO)","Mexico (MX 14)" : "Jalisco (JAL)","Mexico (MX 15)" : "Mexico (MEX)","Mexico (MX 16)" : "Michoacan de Ocampo (MIC)","Mexico (MX 17)" : "Morelos (MOR)","Mexico (MX 18)" : "Nayarit (NAY)","Mexico (MX 19)" : "Nuevo Leon (NLN)","Mexico (MX 20)" : "Oaxaca (OAX)","Mexico (MX 21)" : "Puebla (PUE)","Mexico (MX 22)" : "Queretaro de Arteaga (QRO)","Mexico (MX 23)" : "Quintana Roo (QTR)","Mexico (MX 24)" : "San Luis Potosi (SLP)","Mexico (MX 25)" : "Sinaloa (SIN)","Mexico (MX 26)" : "Sonora (SON)","Mexico (MX 27)" : "Tabasco (TAB)","Mexico (MX 28)" : "Tamaulipas (TAM)","Mexico (MX 29)" : "Tlaxcala (TLA)","Mexico (MX 30)" : "Veracruz-Llave (VER)","Mexico (MX 31)" : "Yucatan (YUC)","Mexico (MX 32)" : "Zacatecas (ZAC)","Micronesia (FM)" : "Micronesia (MIC)","Moldova (MD)" : "Moldova (MOL)","Monaco (MC)" : "Monaco (MON)","Mongolia (MN)" : "Mongolia (MNG)","Montserrat (MS)" : "Montserrat (MON)","Morocco (MA 1)" : "Chaouia-Ouardigha (CHO)","Morocco (MA 2)" : "Doukkala-Abda (DOA)","Morocco (MA 3)" : "Fes-Boulemane (FEB)","Morocco (MA 4)" : "Gharb-Chrarda-Beni Hsen (GCB)","Morocco (MA 5)" : "Grand Casablanca (CAS)","Morocco (MA 6)" : "Marrakech-Tensift-El Haouz (MTH)","Morocco (MA 7)" : "Meknes-Tafilalt (MET)","Morocco (MA 8)" : "Rabat-Sale-Zemmour-Zaer (RSZ)","Morocco (MA 9)" : "Sous-Massa-Draa (SMD)","Morocco (MA 10)" : "Tanger-Tetouan (TAT)","Morocco (MA 11)" : "Taza-Al Hoceima-Taounate (THT)","Mozambique (MZ)" : "Mozambique (MOZ)","Myanmar (MM 1)" : "Ayeyarwady (AYE)","Myanmar (MM 2)" : "Bago (BAG)","Myanmar (MM 3)" : "Chin (CHI)","Myanmar (MM 4)" : "Kachin (KAC)","Myanmar (MM 5)" : "Kayah (KAH)","Myanmar (MM 6)" : "Kayin (KAN)","Myanmar (MM 7)" : "Magway (MAG)","Myanmar (MM 8)" : "Mandalay (MAN)","Myanmar (MM 9)" : "Mon (MON)","Myanmar (MM 10)" : "Rakhine (RAK)","Myanmar (MM 11)" : "Sagaing (SAG)","Myanmar (MM 12)" : "Shan (SHA)","Myanmar (MM 13)" : "Tanintharyi (TAN)","Myanmar (MM 14)" : "Unknown (UNK)","Namibia (NA)" : "Namibia (NAM)","Nauru (NR)" : "Nauru (NAU)","Nepal (NP)" : "Nepal (NEP)","Netherlands (NL 1)" : "Drenthe (DRE)","Netherlands (NL 2)" : "Flevoland (FLE)","Netherlands (NL 3)" : "Friesland (FRI)","Netherlands (NL 4)" : "Gelderland (GEL)","Netherlands (NL 5)" : "Groningen (GRO)","Netherlands (NL 6)" : "Limburg (LIM)","Netherlands (NL 7)" : "Noord-Brabant (NBR)","Netherlands (NL 8)" : "Noord-Holland (NHL)","Netherlands (NL 9)" : "Overijssel (OVE)","Netherlands (NL 10)" : "Utrecht (UTR)","Netherlands (NL 11)" : "Zeeland (ZEE)","Netherlands (NL 12)" : "Zuid-Holland (ZHO)","Netherlands Antilles (AN)" : "Netherlands Antilles (NTA)","New Caledonia (NC)" : "New Caledonia (NWC)","New Zealand (NZ 1)" : "Chatham Islands (CHI)","New Zealand (NZ 2)" : "North Island (NIS)","New Zealand (NZ 3)" : "South Island (SIS)","New Zealand (NZ 4)" : "Stewart Island (STI)","Nicaragua (NI 1)" : "Atlantico Norte (ATN)","Nicaragua (NI 2)" : "Atlantico Sur (ATS)","Nicaragua (NI 3)" : "Boaco (BOA)","Nicaragua (NI 4)" : "Carazo (CAR)","Nicaragua (NI 5)" : "Chinandega (CHI)","Nicaragua (NI 6)" : "Chontales (CHO)","Nicaragua (NI 7)" : "Esteli (EST)","Nicaragua (NI 8)" : "Granada (GRA)","Nicaragua (NI 9)" : "Jinotega (JIN)","Nicaragua (NI 10)" : "Leon (LEO)","Nicaragua (NI 11)" : "Madriz (MAD)","Nicaragua (NI 12)" : "Managua (MAN)","Nicaragua (NI 13)" : "Masaya (MAS)","Nicaragua (NI 14)" : "Matagalpa (MAT)","Nicaragua (NI 15)" : "Nueva Segovia (NSE)","Nicaragua (NI 16)" : "Rio San Juan (RSJ)","Nicaragua (NI 17)" : "Rivas (RIV)","Niger (NE 1)" : "Agadez (AGA)","Niger (NE 2)" : "Diffa (DIF)","Niger (NE 3)" : "Dosso (DOS)","Niger (NE 4)" : "Maradi (MAR)","Niger (NE 5)" : "Niamey (NIA)","Niger (NE 6)" : "Tahoua (TAH)","Niger (NE 7)" : "Tillaberi (TIL)","Niger (NE 8)" : "Zinder (ZIN)","Nigeria (NG 1)" : "Abuja (FC)","Nigeria (NG 2)" : "Adamawa (AD)","Nigeria (NG 3)" : "Bauchi (BA)","Nigeria (NG 4)" : "Benue (BE)","Nigeria (NG 5)" : "Borno (BO)","Nigeria (NG 6)" : "Delta (DE)","Nigeria (NG 7)" : "Gombe (GO)","Nigeria (NG 8)" : "Gongola (UNK)","Nigeria (NG 9)" : "Jigawa (JI)","Nigeria (NG 10)" : "Kaduna (KD)","Nigeria (NG 11)" : "Kano (KN)","Nigeria (NG 12)" : "Katsina (KT)","Nigeria (NG 13)" : "Kwara (KW)","Nigeria (NG 14)" : "Lagos (LA)","Nigeria (NG 15)" : "Nassarawa (NA)","Nigeria (NG 16)" : "Niger (NI)","Nigeria (NG 17)" : "Ogun (OG)","Nigeria (NG 18)" : "Oyo (OY)","Nigeria (NG 19)" : "Plateau (PL)","Nigeria (NG 20)" : "Sokoto (SO)","Nigeria (NG 21)" : "Unknown (UNK)","Nigeria (NG 22)" : "Zamfara (ZA)","Niue (NU)" : "Niue (NIU)","Norfolk Island (NF)" : "Norfolk Island (NFI)","North Korea (KP 1)" : "Chagang-do (CHA)","North Korea (KP 2)" : "Hamgyong-bukto (HYP)","North Korea (KP 3)" : "Hamgyong-namdo (HYN)","North Korea (KP 4)" : "Hwanghae-bukto (HWP)","North Korea (KP 5)" : "Hwanghae-namdo (HWN)","North Korea (KP 6)" : "Kaesong-si (KAE)","North Korea (KP 7)" : "Kangwon-do (KAN)","North Korea (KP 8)" : "Najin Sonbong-si (HAM)","North Korea (KP 9)" : "Namp'o-si (NAM)","North Korea (KP 10)" : "P'yongan-bukto (PYP)","North Korea (KP 11)" : "P'yongan-namdo (PYN)","North Korea (KP 12)" : "P'yongyang-si (PYY)","North Korea (KP 13)" : "Yanggang-do (YAN)","Norway (NO 1)" : "Akershus (AKE)","Norway (NO 2)" : "Aust-Agder (AAG)","Norway (NO 3)" : "Buskerud (BUS)","Norway (NO 4)" : "Finnmark (FIN)","Norway (NO 5)" : "Hedmark (HED)","Norway (NO 6)" : "Hordaland (HOR)","Norway (NO 7)" : "More og Romsdal (MOR)","Norway (NO 8)" : "Nord-Trondelag (NTR)","Norway (NO 9)" : "Nordland (NOR)","Norway (NO 10)" : "Oppland (OPP)","Norway (NO 11)" : "Oslo (OSL)","Norway (NO 12)" : "Ostfold (OFO)","Norway (NO 13)" : "Rogaland (ROG)","Norway (NO 14)" : "Sogn og Fjordane (SOF)","Norway (NO 15)" : "Sor-Trondelag (STR)","Norway (NO 16)" : "Telemark (TEL)","Norway (NO 17)" : "Troms (TRO)","Norway (NO 18)" : "Vest-Agder (VAG)","Norway (NO 19)" : "Vestfold (VFO)","Oman (OM)" : "Oman (OMN)","Pakistan (PK 1)" : "Balochistan (BAL)","Pakistan (PK 2)" : "Federally Administered Tribal Areas (TA)","Pakistan (PK 3)" : "Islamabad Capital Territory (FCA)","Pakistan (PK 4)" : "North-West Frontier Province (NWF)","Pakistan (PK 5)" : "Punjab (PUN)","Pakistan (PK 6)" : "Sind (SIN)","Palau (PW)" : "Palau (PAL)","Panama (PA 1)" : "Bocas del Toro (BDT)","Panama (PA 2)" : "Chiriqui (CHI)","Panama (PA 3)" : "Colon (COL)","Panama (PA 4)" : "Darien (DAR)","Panama (PA 5)" : "Herrera (HER)","Panama (PA 6)" : "Kuna Yala (KYA)","Panama (PA 7)" : "Los Santos (LSA)","Panama (PA 8)" : "Panama (PAN)","Panama (PA 9)" : "Veraguas (VER)","Papua New Guinea (PG)" : "Papua New Guinea (PNG)","Paraguay (PY 1)" : "Alto Paraguay (APG)","Paraguay (PY 2)" : "Alto Parana (APR)","Paraguay (PY 3)" : "Amambay (AMA)","Paraguay (PY 4)" : "Boqueron (BOQ)","Paraguay (PY 5)" : "Caaguazu (CGZ)","Paraguay (PY 6)" : "Caazapa (CZP)","Paraguay (PY 7)" : "Canindeyu (CAN)","Paraguay (PY 8)" : "Central (CEN)","Paraguay (PY 9)" : "Concepcion (CON)","Paraguay (PY 10)" : "Cordillera (COR)","Paraguay (PY 11)" : "Guaira (GUA)","Paraguay (PY 12)" : "Itapua (ITA)","Paraguay (PY 13)" : "Misiones (MIS)","Paraguay (PY 14)" : "Neembucu (NEE)","Paraguay (PY 15)" : "Paraguari (PAR)","Paraguay (PY 16)" : "Presidente Hayes (PHA)","Paraguay (PY 17)" : "San Pedro (SPE)","Peru (PE 1)" : "Amazonas (AMA)","Peru (PE 2)" : "Ancash (ANC)","Peru (PE 3)" : "Apurimac (APU)","Peru (PE 4)" : "Arequipa (ARE)","Peru (PE 5)" : "Ayacucho (AYA)","Peru (PE 6)" : "Cajamarca (CAJ)","Peru (PE 7)" : "Callao (CAL)","Peru (PE 8)" : "Cusco (CUS)","Peru (PE 9)" : "Huancavelica (HUA)","Peru (PE 10)" : "Huanuco (HUO)","Peru (PE 11)" : "Ica (ICA)","Peru (PE 12)" : "Junin (JUN)","Peru (PE 13)" : "La Libertad (LIB)","Peru (PE 14)" : "Lambayeque (LAM)","Peru (PE 15)" : "Lima (LIM)","Peru (PE 16)" : "Loreto (LOR)","Peru (PE 17)" : "Madre de Dios (MAD)","Peru (PE 18)" : "Moquegua (MOQ)","Peru (PE 19)" : "Pasco (PAS)","Peru (PE 20)" : "Piura (PIU)","Peru (PE 21)" : "Puno (PUN)","Peru (PE 22)" : "San Martin (MAR)","Peru (PE 23)" : "Tacna (TAC)","Peru (PE 24)" : "Tumbes (TUM)","Peru (PE 25)" : "Ucayali (UCA)","Philippines (PH 1)" : "Abra (01)","Philippines (PH 2)" : "Agusan del Norte (02)","Philippines (PH 3)" : "Agusan del Sur (03)","Philippines (PH 4)" : "Aklan (04)","Philippines (PH 5)" : "Albay (05)","Philippines (PH 6)" : "Angeles City (A1)","Philippines (PH 7)" : "Antique (06)","Philippines (PH 8)" : "Aurora (G8)","Philippines (PH 9)" : "Bacolod City (A2)","Philippines (PH 10)" : "Bago City (A3)","Philippines (PH 11)" : "Baguio City (A4)","Philippines (PH 12)" : "Basilan (22)","Philippines (PH 13)" : "Bataan (07)","Philippines (PH 14)" : "Batanes (08)","Philippines (PH 15)" : "Batangas (09)","Philippines (PH 16)" : "Batangas City (A7)","Philippines (PH 17)" : "Benguet (10)","Philippines (PH 18)" : "Bohol (11)","Philippines (PH 19)" : "Bukidnon (12)","Philippines (PH 20)" : "Bulacan (13)","Philippines (PH 21)" : "Butuan City (A8)","Philippines (PH 22)" : "Cabanatuan City (A9)","Philippines (PH 23)" : "Cadiz City (B1)","Philippines (PH 24)" : "Cagayan (14)","Philippines (PH 25)" : "Cagayan de Oro City (B2)","Philippines (PH 26)" : "Calbayog City (B3)","Philippines (PH 27)" : "Caloocan City (B4)","Philippines (PH 28)" : "Camarines Norte (15)","Philippines (PH 29)" : "Camarines Sur (16)","Philippines (PH 30)" : "Camiguin (17)","Philippines (PH 31)" : "Canlaon City (B5)","Philippines (PH 32)" : "Capiz (18)","Philippines (PH 33)" : "Catanduanes (19)","Philippines (PH 34)" : "Cavite (20)","Philippines (PH 35)" : "Cavite City (B6)","Philippines (PH 36)" : "Cebu (21)","Philippines (PH 37)" : "Cebu City (B7)","Philippines (PH 38)" : "City of Manila (D9)","Philippines (PH 39)" : "Cotabato City (B8)","Philippines (PH 40)" : "Dagupan City (B9)",
										"Philippines (PH 41)" : "Danao City (C1)","Philippines (PH 42)" : "Dapitan City (C2)","Philippines (PH 43)" : "Davao City (C3)","Philippines (PH 44)" : "Davao del Norte (24)","Philippines (PH 45)" : "Davao del Sur (25)","Philippines (PH 46)" : "Davao Oriental (26)","Philippines (PH 47)" : "Dipolog City (C4)","Philippines (PH 48)" : "Dumaguete City (C5)","Philippines (PH 49)" : "Eastern Samar (23)","Philippines (PH 50)" : "General Santos City (C6)","Philippines (PH 51)" : "Gingoog City (C7)","Philippines (PH 52)" : "Ifugao (27)","Philippines (PH 53)" : "Iligan City (C8)","Philippines (PH 54)" : "Ilocos Norte (28)","Philippines (PH 55)" : "Ilocos Sur (29)","Philippines (PH 56)" : "Iloilo (30)","Philippines (PH 57)" : "Iloilo City (C9)","Philippines (PH 58)" : "Iriga City (D1)","Philippines (PH 59)" : "Isabela (31)","Philippines (PH 60)" : "Kalinga-Apayao (32)","Philippines (PH 61)" : "La Carlota City (D2)","Philippines (PH 62)" : "La Union (36)","Philippines (PH 63)" : "Laguna (33)","Philippines (PH 64)" : "Lanao del Norte (34)","Philippines (PH 65)" : "Lanao del Sur (35)","Philippines (PH 66)" : "Laoag City (D3)","Philippines (PH 67)" : "Lapu-Lapu City (D4)","Philippines (PH 68)" : "Legaspi City (D5)","Philippines (PH 69)" : "Leyte (37)","Philippines (PH 70)" : "Lipa City (D6)","Philippines (PH 71)" : "Lucena City (D7)","Philippines (PH 72)" : "Maguindanao (56)","Philippines (PH 73)" : "Mandaue City (D8)","Philippines (PH 74)" : "Marawi City (E1)","Philippines (PH 75)" : "Marinduque (38)","Philippines (PH 76)" : "Masbate (39)","Philippines (PH 77)" : "Mindoro Occidental (40)","Philippines (PH 78)" : "Mindoro Oriental (41)","Philippines (PH 79)" : "Misamis Occidental (42)","Philippines (PH 80)" : "Misamis Oriental (43)","Philippines (PH 81)" : "Mountain Province (44)","Philippines (PH 82)" : "Naga City (E2)","Philippines (PH 83)" : "Negros Occidental (H3)","Philippines (PH 84)" : "Negros Oriental (46)","Philippines (PH 85)" : "North Cotabato (57)","Philippines (PH 86)" : "Northern Samar (67)","Philippines (PH 87)" : "Nueva Ecija (47)","Philippines (PH 88)" : "Nueva Vizcaya (48)","Philippines (PH 89)" : "Olongapo City (E3)","Philippines (PH 90)" : "Ormoc City (E4)","Philippines (PH 91)" : "Oroquieta City (E5)","Philippines (PH 92)" : "Ozamis City (E6)","Philippines (PH 93)" : "Pagadian City (E7)","Philippines (PH 94)" : "Palawan (49)","Philippines (PH 95)" : "Palayan City (E8)","Philippines (PH 96)" : "Pampanga (50)","Philippines (PH 97)" : "Pangasinan (51)","Philippines (PH 98)" : "Pasay City (E9)","Philippines (PH 99)" : "Puerto Princesa City (F1)","Philippines (PH 100)" : "Quezon (H2)","Philippines (PH 101)" : "Quezon City (F2)","Philippines (PH 102)" : "Quirino (68)","Philippines (PH 103)" : "Rizal (53)","Philippines (PH 104)" : "Romblon (54)","Philippines (PH 105)" : "Roxas City (F3)","Philippines (PH 106)" : "Samar (55)","Philippines (PH 107)" : "San Carlos City (F4)","Philippines (PH 108)" : "San Pablo City (F7)","Philippines (PH 109)" : "Silay City (F8)","Philippines (PH 110)" : "Siquijor (69)","Philippines (PH 111)" : "Sorsogon (58)","Philippines (PH 112)" : "South Cotabato (70)","Philippines (PH 113)" : "Southern Leyte (59)","Philippines (PH 114)" : "Sultan Kudarat (71)","Philippines (PH 115)" : "Sulu (60)","Philippines (PH 116)" : "Surigao City (F9)","Philippines (PH 117)" : "Surigao del Norte (61)","Philippines (PH 118)" : "Surigao del Sur (62)","Philippines (PH 119)" : "Tacloban City (G1)","Philippines (PH 120)" : "Tagaytay City (G2)","Philippines (PH 121)" : "Tagbilaran City (G3)","Philippines (PH 122)" : "Tangub City (G4)","Philippines (PH 123)" : "Tarlac (63)","Philippines (PH 124)" : "Tawi-Tawi (72)","Philippines (PH 125)" : "Toledo City (G5)","Philippines (PH 126)" : "Trece Martires City (G6)","Philippines (PH 127)" : "Zambales (64)","Philippines (PH 128)" : "Zamboanga City (G7)","Philippines (PH 129)" : "Zamboanga del Norte (65)","Philippines (PH 130)" : "Zamboanga del Sur (66)","Pitcairn Islands (PN)" : "Pitcairn Islands (PIT)","Poland (PL 1)" : "Dolnoslaskie (DOL)","Poland (PL 2)" : "Kujawsko-Pomorskie (KUJ)","Poland (PL 3)" : "Lodzkie (LOD)","Poland (PL 4)" : "Lubelskie (LUB)","Poland (PL 5)" : "Lubuskie (LBU)","Poland (PL 6)" : "Malopolskie (MAL)","Poland (PL 7)" : "Mazowieckie (MAZ)","Poland (PL 8)" : "Opolskie (OPO)","Poland (PL 9)" : "Podkarpackie (PDK)","Poland (PL 10)" : "Podlaskie (POD)","Poland (PL 11)" : "Pomorskie (POM)","Poland (PL 12)" : "Slaskie (SLA)","Poland (PL 13)" : "Swietokrzyskie (SWI)","Poland (PL 14)" : "Warminsko-Mazurskie (WAR)","Poland (PL 15)" : "Wielkopolskie (WIE)","Poland (PL 16)" : "Zachodniopomorskie (ZAC)","Portugal (PT 1)" : "Acores (ACO)","Portugal (PT 2)" : "Alentejo (ALE)","Portugal (PT 3)" : "Algarve (ALG)","Portugal (PT 4)" : "Centro (CEN)","Portugal (PT 5)" : "Lisboa (LIS)","Portugal (PT 6)" : "Madeira (MAD)","Portugal (PT 7)" : "Norte (NOR)","Qatar (QA)" : "Qatar (QTR)","Reunion (RE)" : "Reunion (RE)","Romania (RO 1)" : "Alba (ALB)","Romania (RO 2)" : "Arad (ARA)","Romania (RO 3)" : "Arges (ARG)","Romania (RO 4)" : "Bacau (BAC)","Romania (RO 5)" : "Bihor (BIH)","Romania (RO 6)" : "Bistrita-Nasaud (BIS)","Romania (RO 7)" : "Botosani (BOT)","Romania (RO 8)" : "Braila (BRA)","Romania (RO 9)" : "Brasov (BRS)","Romania (RO 10)" : "Buzau (BUZ)","Romania (RO 11)" : "Calarasi (CAL)","Romania (RO 12)" : "Caras-Severin (CAR)","Romania (RO 13)" : "Cluj (CLU)","Romania (RO 14)" : "Constanta (CON)","Romania (RO 15)" : "Covasna (COV)","Romania (RO 16)" : "Dambovita (DAM)","Romania (RO 17)" : "Dolj (DOL)","Romania (RO 18)" : "Galati (GAL)","Romania (RO 19)" : "Giurgiu (GIU)","Romania (RO 20)" : "Gorj (GOR)","Romania (RO 21)" : "Harghita (HAR)","Romania (RO 22)" : "Hunedoara (HUN)","Romania (RO 23)" : "Ialomita (IAL)","Romania (RO 24)" : "Iasi (IAS)","Romania (RO 25)" : "Ilfov (ILF)","Romania (RO 26)" : "Maramures (MAR)","Romania (RO 27)" : "Mehedinti (MEH)","Romania (RO 28)" : "Municipiul Bucuresti (BUC)","Romania (RO 29)" : "Mures (MUR)","Romania (RO 30)" : "Neamt (NEA)","Romania (RO 31)" : "Olt (OLT)","Romania (RO 32)" : "Prahova (PRA)","Romania (RO 33)" : "Salaj (SAL)","Romania (RO 34)" : "Satu Mare (SAT)","Romania (RO 35)" : "Sibiu (SIB)","Romania (RO 36)" : "Suceava (SUC)","Romania (RO 37)" : "Teleorman (TEL)","Romania (RO 38)" : "Timis (TIM)","Romania (RO 39)" : "Tulcea (TUL)","Romania (RO 40)" : "Unknown (UNK)","Romania (RO 41)" : "Valcea (VAL)","Romania (RO 42)" : "Vaslui (VAS)","Romania (RO 43)" : "Vrancea (VRA)","Russia (RU 1)" : "Aginskiy Buryatskiy (02)","Russia (RU 2)" : "Altayskiy Kray (04)","Russia (RU 3)" : "Amurskaya (05)","Russia (RU 4)" : "Arkhangel'skaya (06)","Russia (RU 5)" : "Astrakhanskaya (07)","Russia (RU 6)" : "Belgorodskaya (09)","Russia (RU 7)" : "Bryanskaya (10)","Russia (RU 8)" : "Chechenskaya (CI)","Russia (RU 9)" : "Chelyabinskaya (13)","Russia (RU 10)" : "Chitinskaya (14)","Russia (RU 11)" : "Chukotskiy (15)","Russia (RU 12)" : "Chuvashskaya (16)","Russia (RU 13)" : "Evenkiyskiy (18)","Russia (RU 14)" : "Gorod Moskva (48)","Russia (RU 15)" : "Gorod Sankt-Peterburg (66)","Russia (RU 16)" : "Irkutskaya (20)","Russia (RU 17)" : "Ivanovskaya (21)","Russia (RU 18)" : "Kabardino-Balkarskaya (22)","Russia (RU 19)" : "Kaliningradskaya (23)","Russia (RU 20)" : "Kaluzhskaya (25)","Russia (RU 21)" : "Kamchatskaya (26)","Russia (RU 22)" : "Karachayevo-Cherkesskaya (27)","Russia (RU 23)" : "Kemerovskaya (29)","Russia (RU 24)" : "Khabarovskiy Kray (30)","Russia (RU 25)" : "Khanty-Mansiyskiy (32)","Russia (RU 26)" : "Kirovskaya (33)","Russia (RU 27)" : "Komi-Permyatskiy (35)","Russia (RU 28)" : "Koryakskiy (36)","Russia (RU 29)" : "Kostromskaya (37)","Russia (RU 30)" : "Krasnodarskiy Kray (38)","Russia (RU 31)" : "Krasnoyarskiy Kray (39)","Russia (RU 32)" : "Kurganskaya (40)","Russia (RU 33)" : "Kurskaya (41)","Russia (RU 34)" : "Leningradskaya (42)","Russia (RU 35)" : "Lipetskaya (43)","Russia (RU 36)" : "Magadanskaya (44)","Russia (RU 37)" : "Moskovskaya (47)","Russia (RU 38)" : "Murmanskaya (49)","Russia (RU 39)" : "Nenetskiy (50)","Russia (RU 40)" : "Nizhegorodskaya (51)","Russia (RU 41)" : "Novgorodskaya (52)","Russia (RU 42)" : "Novosibirskaya (53)","Russia (RU 43)" : "Omskaya (54)","Russia (RU 44)" : "Orenburgskaya (55)","Russia (RU 45)" : "Orlovskaya (56)","Russia (RU 46)" : "Penzenskaya (57)","Russia (RU 47)" : "Permskaya (58)","Russia (RU 48)" : "Primorskiy Kray (59)","Russia (RU 49)" : "Pskovskaya (60)","Russia (RU 50)" : "Respublika Adygeya (01)","Russia (RU 51)" : "Respublika Altay (03)","Russia (RU 52)" : "Respublika Bashkortostan (08)","Russia (RU 53)" : "Respublika Buryatiya (11)","Russia (RU 54)" : "Respublika Dagestan (17)","Russia (RU 55)" : "Respublika Kalmykiya (24)","Russia (RU 56)" : "Respublika Kareliya (28)","Russia (RU 57)" : "Respublika Khakasiya (31)","Russia (RU 58)" : "Respublika Komi (34)","Russia (RU 59)" : "Respublika Mariy-El (45)","Russia (RU 60)" : "Respublika Mordoviya (46)","Russia (RU 61)" : "Respublika Sakha (Yakutiya) (63)","Russia (RU 62)" : "Respublika Severnaya Osetiya-Alaniya (68)","Russia (RU 63)" : "Respublika Tatarstan (73)","Russia (RU 64)" : "Respublika Tyva (79)","Russia (RU 65)" : "Rostovskaya (61)","Russia (RU 66)" : "Ryazanskaya (62)","Russia (RU 67)" : "Sakhalinskaya (64)","Russia (RU 68)" : "Samarskaya (65)","Russia (RU 69)" : "Saratovskaya (67)","Russia (RU 70)" : "Smolenskaya (69)","Russia (RU 71)" : "Stavropol'skiy Kray (70)","Russia (RU 72)" : "Sverdlovskaya (71)","Russia (RU 73)" : "Tambovskaya (72)","Russia (RU 74)" : "Taymyrskiy (Dolgano-Nenetskiy) (74)","Russia (RU 75)" : "Tomskaya (75)","Russia (RU 76)" : "Tul'skaya (76)","Russia (RU 77)" : "Tverskaya (77)","Russia (RU 78)" : "Tyumenskaya (78)","Russia (RU 79)" : "Udmurtskaya (80)","Russia (RU 80)" : "Ul'yanovskaya (81)","Russia (RU 81)" : "Ust'-Ordynskiy Buryatskiy (82)","Russia (RU 82)" : "Vladimirskaya (83)","Russia (RU 83)" : "Volgogradskaya (84)","Russia (RU 84)" : "Vologodskaya (85)","Russia (RU 85)" : "Voronezhskaya (86)","Russia (RU 86)" : "Yamalo-Nenetskiy (87)","Russia (RU 87)" : "Yaroslavskaya (88)","Russia (RU 88)" : "Yevreyskaya (89)","Rwanda (RW)" : "Rwanda (RWA)","Saint Helena (SH)" : "Saint Helena (STH)","Saint Kitts and Nevis (KN)" : "Saint Kitts and Nevis (SKN)","Saint Lucia (LC)" : "Saint Lucia (SLC)","Saint Pierre and Miquelon (PM)" : "Saint Pierre and Miquelon (SPM)","Saint Vincent and the Grenadines (VC)" : "Saint Vincent and the Grenadines (STV)","Samoa (WS)" : "Samoa (SAM)","San Marino (SM)" : "San Marino (MAR)","Sao Tome and Principe (ST)" : "Sao Tome and Principe (SAO)","Saudi Arabia (SA 1)" : "Al Bahah (BAH)","Saudi Arabia (SA 2)" : "Al Hudud ash Shamaliyah (HUD)","Saudi Arabia (SA 3)" : "Al Madinah (MAD)","Saudi Arabia (SA 4)" : "Al Mintaqah ash Sharqiyah (MAS)","Saudi Arabia (SA 5)" : "Al Qasim (QAS)","Saudi Arabia (SA 6)" : "Al-Jawf (JAW)","Saudi Arabia (SA 7)" : "Ar Riyad (RIY)","Saudi Arabia (SA 8)" : "Ha'il (HAI)","Saudi Arabia (SA 9)" : "Jizan (JIZ)","Saudi Arabia (SA 10)" : "Makkah (MAK)","Saudi Arabia (SA 11)" : "Tabuk (TAB)","Senegal (SN 1)" : "Dakar (DAK)","Senegal (SN 2)" : "Saint-Louis (STL)","Senegal (SN 3)" : "Thies (THI)","Serbia and Montenegro (CS)" : "Serbia and Montenegro (SRB)","Seychelles (SC)" : "Seychelles (SEY)","Sierra Leone (SL 1)" : "Eastern Province (EAS)","Sierra Leone (SL 2)" : "Northern Province (NOR)","Sierra Leone (SL 3)" : "Southern Province (SOU)","Sierra Leone (SL 4)" : "Western Area (WES)","Singapore (SG)" : "Singapore (SNG)","Slovakia (SK)" : "Slovakia (SLO)","Slovenia (SI)" : "Slovenia (SLO)","Solomon Islands (SB)" : "Solomon Islands (SOL)","Somalia (SO 1)" : "Bakool (BAK)","Somalia (SO 2)" : "Banaadir (BAN)","Somalia (SO 3)" : "Bari (BAR)","Somalia (SO 4)" : "Bay (BAY)","Somalia (SO 5)" : "Gedo (GED)","Somalia (SO 6)" : "Jubbada Dhexe (JUD)","Somalia (SO 7)" : "Jubbada Hoose (JUH)","Somalia (SO 8)" : "Shabeellaha Hoose (SHH)","South Africa (ZA 1)" : "Eastern Cape (EAS)","South Africa (ZA 2)" : "Free State (FRE)","South Africa (ZA 3)" : "Gauteng (GAU)","South Africa (ZA 4)" : "KwaZulu-Natal (KWA)","South Africa (ZA 5)" : "Limpopo (LIM)","South Africa (ZA 6)" : "Mpumalanga (MPU)","South Africa (ZA 7)" : "North-West (NRW)","South Africa (ZA 8)" : "Northern Cape (NOR)","South Africa (ZA 9)" : "Unknown (UNK)","South Africa (ZA 10)" : "Western Cape (WES)","South Georgia (GS)" : "South Georgia and South Sandwich Islands (SGS)","South Korea (KR 1)" : "Ch'ungch'ong-bukto (CHU)","South Korea (KR 2)" : "Ch'ungch'ong-namdo (CON)","South Korea (KR 3)" : "Cheju-do (CHE)","South Korea (KR 4)" : "Cholla-bukto (CHO)","South Korea (KR 5)" : "Cholla-namdo (CHN)","South Korea (KR 6)" : "Inch'on-gwangyoksi (INC)","South Korea (KR 7)" : "Kangwon-do (KAN)","South Korea (KR 8)" : "Kwangju-gwangyoksi (KWA)","South Korea (KR 9)" : "Kyonggi-do (KYO)","South Korea (KR 10)" : "Kyongsang-bukto (KYB)","South Korea (KR 11)" : "Kyongsang-namdo (KGM)","South Korea (KR 12)" : "Pusan-gwangyoksi (PUS)","South Korea (KR 13)" : "Soul-t'ukpyolsi (SOU)","South Korea (KR 14)" : "Taegu-gwangyoksi (TAE)","South Korea (KR 15)" : "Taejon-gwangyoksi (TAG)","South Korea (KR 16)" : "Ulsan-gwangyoksi (ULS)","Spain (ES 1)" : "Andalucia (AND)","Spain (ES 2)" : "Aragon (ARA)","Spain (ES 3)" : "Asturias (AST)","Spain (ES 4)" : "Baleares (BAL)","Spain (ES 5)" : "Canarias (CAN)","Spain (ES 6)" : "Cantabria (CAR)","Spain (ES 7)" : "Castilla y Leon (CLE)","Spain (ES 8)" : "Castilla-La Mancha (CLM)","Spain (ES 9)" : "Cataluna (CAT)","Spain (ES 10)" : "Ceuta y Melilla (CM)","Spain (ES 11)" : "Extremadura (EXT)","Spain (ES 12)" : "Galicia (GAL)","Spain (ES 13)" : "La Rioja (LAR)","Spain (ES 14)" : "Madrid (MAD)","Spain (ES 15)" : "Murcia (MUR)","Spain (ES 16)" : "Navarra (NAV)","Spain (ES 17)" : "Pais Vasco (PAI)","Spain (ES 18)" : "Valencia (VAL)","Sri Lanka (LK)" : "Sri Lanka (SRI)","Sudan (SD)" : "Sudan (SUD)","Suriname (SR)" : "Suriname (SUR)","Svalbard (SJ)" : "Svalbard (SVL)","Swaziland (SZ)" : "Swaziland (SWZ)","Sweden (SE 1)" : "Blekinge lan (BLE)","Sweden (SE 2)" : "Dalarnas lan (DAL)","Sweden (SE 3)" : "Gavleborgs lan (GAV)","Sweden (SE 4)" : "Gotlands lan (GOT)","Sweden (SE 5)" : "Hallands lan (HAL)","Sweden (SE 6)" : "Jamtlands lan (JAM)","Sweden (SE 7)" : "Jonkopings lan (JON)","Sweden (SE 8)" : "Kalmar lan (KAL)","Sweden (SE 9)" : "Kronobergs lan (KRO)","Sweden (SE 10)" : "Norrbottens lan (NOR)","Sweden (SE 11)" : "Orebro lan (ORE)","Sweden (SE 12)" : "Ostergotlands lan (OST)","Sweden (SE 13)" : "Skane lan (SKA)","Sweden (SE 14)" : "Sodermanlands lan (SOD)","Sweden (SE 15)" : "Stockholms lan (STO)","Sweden (SE 16)" : "Uppsala lan (UPP)","Sweden (SE 17)" : "Varmlands lan (VAR)","Sweden (SE 18)" : "Vasterbottens lan (VAS)","Sweden (SE 19)" : "Vasternorrlands lan (VNL)","Sweden (SE 20)" : "Vastmanlands lan (VML)","Sweden (SE 21)" : "Vastra Gotalands lan (VGI)","Switzerland (CH)" : "Switzerland (SWZ)","Syria (SY 1)" : "Dar`a (DAR)","Syria (SY 2)" : "Dayr az Zawr (DAY)","Syria (SY 3)" : "Dimashq (DIM)","Syria (SY 4)" : "Hamah (HAM)","Syria (SY 5)" : "Hasakah (HAS)","Syria (SY 6)" : "Hims (HIM)","Syria (SY 7)" : "Ladhiqiyah (LAD)","Syria (SY 8)" : "Unknown (UNK)","Taiwan (TW 1)" : "Kao-hsiung (KAO)","Taiwan (TW 2)" : "T'ai-pei (TPS)","Taiwan (TW 3)" : "T'ai-wan (TWS)","Tajikistan (TJ 1)" : "Khatlon (KHA)","Tajikistan (TJ 2)" : "Mukhtori Kuhistoni Badakhshon (MKB)","Tajikistan (TJ 3)" : "Sughd (SUG)","Tajikistan (TJ 4)" : "Unknown (UNK)","Tanzania (TZ 1)" : "Kagera (KAG)","Tanzania (TZ 2)" : "Kigoma (KIG)","Tanzania (TZ 3)" : "Kilimanjaro (KIL)","Tanzania (TZ 4)" : "Mwanza (MWA)","Tanzania (TZ 5)" : "Rukwa (RUK)","Tanzania (TZ 6)" : "Shinyanga (SHI)","Tanzania (TZ 7)" : "Tabora (TAB)","Tanzania (TZ 8)" : "Unknown (UNK)","Thailand (TH 1)" : "Bangkok Metropolis (BKM)","Thailand (TH 2)" : "Central (CEN)","Thailand (TH 3)" : "Northeastern (NEA)","Thailand (TH 4)" : "Northern (NOR)","Thailand (TH 5)" : "Southern (SOU)","Togo (TG)" : "Togo (TOG)","Tokelau (TK)" : "Tokelau (TOK)","Tonga (TO)" : "Tonga (TNG)","Trinidad and Tobago (TT)" : "Trinidad and Tobago (TRT)","Tunisia (TN 1)" : "Ariana (ARI)","Tunisia (TN 2)" : "Mahdia (MAH)","Tunisia (TN 3)" : "Sousse (SOU)","Tunisia (TN 4)" : "Tunis (TUN)","Tunisia (TN 5)" : "Unknown (UNK)","Turkey (TR 1)" : "Adana (ADA)","Turkey (TR 2)" : "Ankara (ANK)","Turkey (TR 3)" : "Antalya (ANT)","Turkey (TR 4)" : "Aydin (AYD)","Turkey (TR 5)" : "Bilecik (BIL)","Turkey (TR 6)" : "Bursa (BUR)","Turkey (TR 7)" : "Diyarbakir (DIY)","Turkey (TR 8)" : "Erzurum (ERZ)","Turkey (TR 9)" : "Hakkari (HAK)","Turkey (TR 10)" : "Hatay (HAT)","Turkey (TR 11)" : "Icel (ICE)","Turkey (TR 12)" : "Isparta (ISP)","Turkey (TR 13)" : "Istanbul (IST)","Turkey (TR 14)" : "Izmir (IZM)","Turkey (TR 15)" : "Karaman (KAM)","Turkey (TR 16)" : "Kilis (KIL)","Turkey (TR 17)" : "Kocaeli (KOC)","Turkey (TR 18)" : "Konya (KON)","Turkey (TR 19)" : "Manisa (MAN)","Turkey (TR 20)" : "Nigde (NIG)","Turkey (TR 21)" : "Sirnak (SIR)","Turkey (TR 22)" : "Sivas (SIV)","Turkey (TR 23)" : "Yalova (YAL)","Turkmenistan (TM 1)" : "Ahal (AHL)","Turkmenistan (TM 2)" : "Balkan (BAL)","Turkmenistan (TM 3)" : "Dasoguz (DAS)","Turkmenistan (TM 4)" : "Lebap (LEB)","Turkmenistan (TM 5)" : "Mary (MAR)","Turks and Caicos Islands (TC)" : "Turks and Caicos Islands (TUK)","Tuvalu (TV)" : "Tuvalu (TUV)",
										"Uganda (UG)" : "Uganda (UGA)","Ukraine (UA 1)" : "Cherkas'ka (CHK)","Ukraine (UA 2)" : "Chernihivs'ka (CHH)","Ukraine (UA 3)" : "Chernivets'ka (CHT)","Ukraine (UA 4)" : "Dnipropetrovs'ka (DNI)","Ukraine (UA 5)" : "Donets'ka (DON)","Ukraine (UA 6)" : "Ivano-Frankivs'ka (IVA)","Ukraine (UA 7)" : "Kharkivs'ka (KHA)","Ukraine (UA 8)" : "Khersons'ka (KHE)","Ukraine (UA 9)" : "Khmel'nyts'ka (KHM)","Ukraine (UA 10)" : "Kirovohrads'ka (KIR)","Ukraine (UA 11)" : "Kyrm (KRY)","Ukraine (UA 12)" : "Kyyivs'ka (KYY)","Ukraine (UA 13)" : "L'vivs'ka (LVI)","Ukraine (UA 14)" : "Luhans'ka (LUH)","Ukraine (UA 15)" : "Misto Kyyiv (KYC)","Ukraine (UA 16)" : "Misto Sevastopol' (SEV)","Ukraine (UA 17)" : "Mykolayivs'ka (MYK)","Ukraine (UA 18)" : "Odes'ka (ODE)","Ukraine (UA 19)" : "Poltavs'ka (POL)","Ukraine (UA 20)" : "Rivnens'ka (RIV)","Ukraine (UA 21)" : "Sums'ka (SUM)","Ukraine (UA 22)" : "Ternopil's'ka (TER)","Ukraine (UA 23)" : "Vinnyts'ka (VIN)","Ukraine (UA 24)" : "Volyns'ka (VOL)","Ukraine (UA 25)" : "Zakarpats'ka (ZAK)","Ukraine (UA 26)" : "Zaporiz'ka (ZAP)","Ukraine (UA 27)" : "Zhytomyrs'ka (ZHY)","United Arab Emirates (AE)" : "United Arab Emirates (UAE)","United Kingdom (GB 1)" : "England (ENG)","United Kingdom (GB 2)" : "Northern Ireland (NIR)","United Kingdom (GB 3)" : "Scotland (SCO)","United Kingdom (GB 4)" : "Wales (WAL)","United States (US 1)" : "Alabama (AL)","United States (US 2)" : "Alaska (AK)","United States (US 3)" : "American Samoa (AS)","United States (US 4)" : "Arizona (AZ)","United States (US 5)" : "Arkansas (AR)","United States (US 6)" : "California (CA)","United States (US 7)" : "Colorado (CO)","United States (US 8)" : "Connecticut (CT)","United States (US 9)" : "Delaware (DE)","United States (US 10)" : "District of Columbia (DC)","United States (US 11)" : "Florida (FL)","United States (US 12)" : "Georgia (GA)","United States (US 13)" : "Guam (GU)","United States (US 14)" : "Hawaii (HI)","United States (US 15)" : "Idaho (ID)","United States (US 16)" : "Illinois (IL)","United States (US 17)" : "Indiana (IN)","United States (US 18)" : "Iowa (IA)","United States (US 19)" : "Kansas (KS)","United States (US 20)" : "Kentucky (KY)","United States (US 21)" : "Louisiana (LA)","United States (US 22)" : "Maine (ME)","United States (US 23)" : "Maryland (MD)","United States (US 24)" : "Massachusetts (MA)","United States (US 25)" : "Michigan (MI)","United States (US 26)" : "Minnesota (MN)","United States (US 27)" : "Mississippi (MS)","United States (US 28)" : "Missouri (MO)","United States (US 29)" : "Montana (MT)","United States (US 30)" : "Nebraska (NE)","United States (US 31)" : "Nevada (NV)","United States (US 32)" : "New Hampshire (NH)","United States (US 33)" : "New Jersey (NJ)","United States (US 34)" : "New Mexico (NM)","United States (US 35)" : "New York (NY)","United States (US 36)" : "North Carolina (NC)","United States (US 37)" : "North Dakota (ND)","United States (US 38)" : "Northern Mariana Islands (MP)","United States (US 39)" : "Ohio (OH)","United States (US 40)" : "Oklahoma (OK)","United States (US 41)" : "Oregon (OR)","United States (US 42)" : "Pennsylvania (PA)","United States (US 43)" : "Puerto Rico (PR)","United States (US 44)" : "Rhode Island (RI)","United States (US 45)" : "South Carolina (SC)","United States (US 46)" : "South Dakota (SD)","United States (US 47)" : "Tennessee (TN)","United States (US 48)" : "Texas (TX)","United States (US 49)" : "Utah (UT)","United States (US 50)" : "Vermont (VT)","United States (US 51)" : "Virgin Islands (VI)","United States (US 52)" : "Virginia (VA)","United States (US 53)" : "Washington (WA)","United States (US 54)" : "West Virginia (WV)","United States (US 55)" : "Wisconsin (WI)","United States (US 56)" : "Wyoming (WY)","Uruguay (UY 1)" : "Artigas (ART)","Uruguay (UY 2)" : "Canelones (CAN)","Uruguay (UY 3)" : "Cerro Largo (CER)","Uruguay (UY 4)" : "Colonia (COL)","Uruguay (UY 5)" : "Durazno (DUR)","Uruguay (UY 6)" : "Florida (FLO)","Uruguay (UY 7)" : "Lavalleja (LAV)","Uruguay (UY 8)" : "Maldonado (MAL)","Uruguay (UY 9)" : "Montevideo (MON)","Uruguay (UY 10)" : "Paysandu (PAY)","Uruguay (UY 11)" : "Rio Negro (RNE)","Uruguay (UY 12)" : "Rivera (RIV)","Uruguay (UY 13)" : "Rocha (ROC)","Uruguay (UY 14)" : "Salto (SAL)","Uruguay (UY 15)" : "San Jose (SJO)","Uruguay (UY 16)" : "Soriano (SOR)","Uruguay (UY 17)" : "Tacuarembo (TAC)","Uruguay (UY 18)" : "Treinta y Tres (TYT)","Uzbekistan (UZ 1)" : "Andijon (AND)","Uzbekistan (UZ 2)" : "Buxoro (BUX)","Uzbekistan (UZ 3)" : "Jizzax (JIZ)","Uzbekistan (UZ 4)" : "Namangan (NAM)","Uzbekistan (UZ 5)" : "Navoiy (NAV)","Uzbekistan (UZ 6)" : "Qashqadaryo (QAS)","Uzbekistan (UZ 7)" : "Qoraqalpog`iston (QOR)","Uzbekistan (UZ 8)" : "Samarqand (SAM)","Uzbekistan (UZ 9)" : "Sirdaryo (SIR)","Uzbekistan (UZ 10)" : "Surxondaryo (SUR)","Uzbekistan (UZ 11)" : "Toshkent (TOS)","Uzbekistan (UZ 12)" : "Toshkent Shahri (TSH)","Uzbekistan (UZ 13)" : "Unknown (UNK)","Uzbekistan (UZ 14)" : "Xorazm (XOR)","Vanuatu (VU)" : "Vanuatu (VAN)","Vatican City (VA)" : "Vatican City (VTC)","Venezuela (VE 1)" : "Amazonas (AMA)","Venezuela (VE 2)" : "Anzoategui (ANZ)","Venezuela (VE 3)" : "Apure (APU)","Venezuela (VE 4)" : "Aragua (ARA)","Venezuela (VE 5)" : "Barinas (BAR)","Venezuela (VE 6)" : "Bolivar (BOL)","Venezuela (VE 7)" : "Carabobo (CAR)","Venezuela (VE 8)" : "Falcon (FAL)","Venezuela (VE 9)" : "Guarico (GUA)","Venezuela (VE 10)" : "Lara (LAR)","Venezuela (VE 11)" : "Merida (MER)","Venezuela (VE 12)" : "Miranda (MIR)","Venezuela (VE 13)" : "Monagas (MON)","Venezuela (VE 14)" : "Nueva Esparta (NES)","Venezuela (VE 15)" : "Sucre (SUC)","Venezuela (VE 16)" : "Tachira (TAC)","Venezuela (VE 17)" : "Trujillo (TRU)","Venezuela (VE 18)" : "Vargas (VAR)","Venezuela (VE 19)" : "Yaracuy (YAR)","Venezuela (VE 20)" : "Zulia (ZUL)","Vietnam (VN 1)" : "An Giang (ANG)","Vietnam (VN 2)" : "Ba Ria-Vung Tau (BRV)","Vietnam (VN 3)" : "Bac Giang (GIN)","Vietnam (VN 4)" : "Bac Kan (KAN)","Vietnam (VN 5)" : "Bac Lieu (LIU)","Vietnam (VN 6)" : "Bac Ninh (NIH)","Vietnam (VN 7)" : "Ben Tre (BEN)","Vietnam (VN 8)" : "Binh Dinh (BDI)","Vietnam (VN 9)" : "Binh Duong (DUO)","Vietnam (VN 10)" : "Binh Phuoc (BPC)","Vietnam (VN 11)" : "Binh Thuan (BTH)","Vietnam (VN 12)" : "Ca Mau (CAM)","Vietnam (VN 13)" : "Can Tho (CAN)","Vietnam (VN 14)" : "Cao Bang (CAO)","Vietnam (VN 15)" : "Da Nang (DAN)","Vietnam (VN 16)" : "Dac Lak (DAC)","Vietnam (VN 17)" : "Dong Nai (DNA)","Vietnam (VN 18)" : "Dong Thap (DON)","Vietnam (VN 19)" : "Gia Lai (GIA)","Vietnam (VN 20)" : "Ha Giang (HAG)","Vietnam (VN 21)" : "Ha Nam (HAM)","Vietnam (VN 22)" : "Ha Tay (HAT)","Vietnam (VN 23)" : "Ha Tinh (HAN)","Vietnam (VN 24)" : "Hai Duong (HDG)","Vietnam (VN 25)" : "Hoa Binh (HOA)","Vietnam (VN 26)" : "Hung Yen (HUY)","Vietnam (VN 27)" : "Khanh Hoa (KHH)","Vietnam (VN 28)" : "Kien Giang (KIE)","Vietnam (VN 29)" : "Kon Tum (KON)","Vietnam (VN 30)" : "Lai Chau (LAI)","Vietnam (VN 31)" : "Lam Dong (LAM)","Vietnam (VN 32)" : "Lang Son (LAN)","Vietnam (VN 33)" : "Lao Cai (LAC)","Vietnam (VN 34)" : "Long An (LON)","Vietnam (VN 35)" : "Nam Dinh (NAN)","Vietnam (VN 36)" : "Nghe An (NGH)","Vietnam (VN 37)" : "Ninh Binh (NBI)","Vietnam (VN 38)" : "Ninh Thuan (NIT)","Vietnam (VN 39)" : "Phu Tho (PTO)","Vietnam (VN 40)" : "Phu Yen (PHU)","Vietnam (VN 41)" : "Quang Binh (QBI)","Vietnam (VN 42)" : "Quang Nam (QNM)","Vietnam (VN 43)" : "Quang Ngai (QNG)","Vietnam (VN 44)" : "Quang Ninh (NIN)","Vietnam (VN 45)" : "Quang Tri (QTR)","Vietnam (VN 46)" : "Soc Trang (SOC)","Vietnam (VN 47)" : "Son La (SOL)","Vietnam (VN 48)" : "Tay Ninh (TAY)","Vietnam (VN 49)" : "Thai Binh (THB)","Vietnam (VN 50)" : "Thai Nguyen (TNY)","Vietnam (VN 51)" : "Thanh Hoa (THH)","Vietnam (VN 52)" : "Thanh Pho Hai Phong (PHP)","Vietnam (VN 53)" : "Thanh Pho Ho Chi Minh (PHC)","Vietnam (VN 54)" : "Thu Do Ha Noi (TDH)","Vietnam (VN 55)" : "Thua Thien-Hue (TTH)","Vietnam (VN 56)" : "Tien Giang (TGI)","Vietnam (VN 57)" : "Tra Vinh (TRA)","Vietnam (VN 58)" : "Tuyen Quang (TUY)","Vietnam (VN 59)" : "Vinh Long (VIL)","Vietnam (VN 60)" : "Vinh Phuc (VPC)","Vietnam (VN 61)" : "Yen Bai (YEN)","Wallis and Futuna (WF)" : "Wallis and Futuna (WAF)","Yemen (YE)" : "Yemen (YEM)","Zambia (ZM 1)" : "Central (CEN)","Zambia (ZM 2)" : "Eastern (EAS)","Zambia (ZM 3)" : "Lusaka (LUS)","Zambia (ZM 4)" : "Southern (SOU)","Zambia (ZM 5)" : "Unknown (UNK)","Zambia (ZM 6)" : "Western (WES)","Zimbabwe (ZW 1)" : "Harare (HAR)","Zimbabwe (ZW 2)" : "Manicaland (MNL)","Zimbabwe (ZW 3)" : "Mashonaland East (MSE)","Zimbabwe (ZW 4)" : "Mashonaland West (MSW)","Zimbabwe (ZW 5)" : "Masvingo (MVG)","Zimbabwe (ZW 6)" : "Matabeleland North (MBN)","Zimbabwe (ZW 7)" : "Matabeleland South (MBS)","Zimbabwe (ZW 8)" : "Midlands (MID)","Zimbabwe (ZW 9)" : "Unknown (UNK)"
						};
						
					
							$.each(states, function(key, value) 
							{ 
								if(key.indexOf("United States") != -1)
								{
									
									var val = "("+response.state+")";
									if(value.indexOf(val) != -1)
									{
										$("#state").val(value);
									}
									
								}
							});
						
					}	
					else
					{
						$("#state").val("");
						$("#city").val("");
					}
					 */
				});
			}	
		}
	});
	
	
});

function parseURL(url){
    parsed_url = {}

    if ( url == null || url.length == 0 )
        return parsed_url;

    protocol_i = url.indexOf('://');
    parsed_url.protocol = url.substr(0,protocol_i);

    remaining_url = url.substr(protocol_i + 3, url.length);
    domain_i = remaining_url.indexOf('/');
    domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
    parsed_url.domain = remaining_url.substr(0, domain_i);
    parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);

    domain_parts = parsed_url.domain.split('.');
    switch ( domain_parts.length ){
        case 2:
          parsed_url.subdomain = null;
          parsed_url.host = domain_parts[0];
          parsed_url.tld = domain_parts[1];
          break;
        case 3:
          parsed_url.subdomain = domain_parts[0];
          parsed_url.host = domain_parts[1];
          parsed_url.tld = domain_parts[2];
          break;
        case 4:
          parsed_url.subdomain = domain_parts[0];
          parsed_url.host = domain_parts[1];
          parsed_url.tld = domain_parts[2] + '.' + domain_parts[3];
          break;
    }

    parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;

    return parsed_url;
}

function setSiteTitle(domain, element, num)
{
	var fname = localStorage['firstname'];
	var lname = localStorage['lastname'];
	
	if(num == 1)
	{
		var str = fname+" "+lname+" | "+domain;
		document.getElementById(element).value = str;
	}
	else if(num == 2)
	{
		var str = fname+" "+lname+" on "+domain;
		document.getElementById(element).value = str;
	}
	else if(num == 3)
	{
		var str = fname+" "+lname+" and "+domain;
		document.getElementById(element).value = str;
	}
	else if(num == 4)
	{
		var str = fname+" "+lname+" ("+domain+")";
		document.getElementById(element).value = str;
	}
	else if(num == 5)
	{
		var str = fname+" "+lname+" "+domain+" Profile";
		document.getElementById(element).value = str;
	}
	else if(num == 6)
	{
		var str = fname+" "+lname+" "+domain+" Page";
		document.getElementById(element).value = str;
	}
}

function is_int(value)
{ 
      if((parseFloat(value) == parseInt(value)) && !isNaN(value))
	  {
        return true;
      } 
	  else 
	  { 
        return false;
      } 
}
function checkStudy()
{
	if(this.checked)
		$(".eduSlide").hide(500);
	else
		$(".eduSlide").show(500);
}

function checkEmployee()
{
	if(this.checked)
		$(".empSlide").hide(500);
	else
		$(".empSlide").show(500);
}

function checkstatusWhenPopupReopen(elemClass)
{
	$("."+elemClass).hide();
}
function showPrompt(message)
	{
		$.prompt(message);
	}
	
function showAlert()
	{
		
		switch(this.id)
		{
			case "loadfromsets":
				showPrompt("Loads the values from the other sets.");
				break;
			case "useremail1":
				showPrompt("Create a new Yahoo.com email. The email address will be spammed so you do not want to use a personal email address. Keep your Yahoo! Email open because you will be going back occasionally to verify your account. It is okay to move on to the next website while waiting for a verification email.");
				break;
				
			case "password1":
				showPrompt("Create a unique password that is between 6-10 characters. This password will be used for every site. Don\'t forget your password!");
				break;
				
			case "firstname1":
				showPrompt("Use the first name that you are targeting online. If your full name is Michael Smith, but negative internet articles make more references to Mike Smith, then use Mike. We want to use the most specific version of your name to be the most effective in this process.");
				break;
				
			case "middlename1":
				showPrompt("A middle name will be used roughly half the time, if you chose to include one.  If you have a specific keyword you are targeting, add it to the end of your last name.");
				break;
			
			case "lastname1":
				showPrompt("Use your regular last name. In rare cases, or if you are a business, you can attach a keyword to the end of your last name. If you have a specific keyword you are targeting, such as Mike Smith Surgeon or Mike Smith Doctor, you can use 'Smith Surgeon' or 'Smith Doctor' as your last name.");
				break;
				
			case "customurl1":
				showPrompt("Create a lowercase username with no spaces or special characters. We recommend to use 'firstnamelastname' as the format. You can use another keyword word attached to your name, such as 'mikesmithsurgeon' or 'mikesmithdoctor'.");
				break;

			case "country1":
				showPrompt("Select the country you are in");
				break;

			case "state1":
				showPrompt("Select the state by using the 2 letter state abbreviation.");
				break;
				
			case "city1":
				showPrompt("Type in the city you live in or wish to represent.");
				break;
				
			case "zip1":
				showPrompt("Type in the ZIP code of your area.");
				break;
				
			case "birthyear1":
				showPrompt("The year when you were born.");
				break;
				
			case "birthmonth1":
				showPrompt("The month when you were born.");
				break;
				
			case "birthday1":
				showPrompt("The day of your birthday.");
				break;
				
			case "username1":
				showPrompt("Your username.");
				break;
			
			case "gender":
				showPrompt("Your gender / sexual orientation.");
				break;
				
			case "college1":
				showPrompt("Type in your alm mater. You can use any of your degrees. Use a high school or certificate if you did not attend college.");
				break;
				
			case "collegelocation1":
				showPrompt("Type in the location of your attended school.");
				break;
				
			case "major1":
				showPrompt("Field of studies that you have taken in college.");
				break;
				
			case "degree1":
				showPrompt("Certification or college degree.");
				break;
				
			case "majordesc1":
				showPrompt("Any accomplishments through studies, athletics or misc details about your degree.");
				break;
				
			case "educationstartmonth1":
				showPrompt("Month when you started college.");
				break;
				
			case "educationstartyear1":
				showPrompt("Year when you started college.");
				break;
				
			case "educationendmonth1":
				showPrompt("Month when you ended college.");
				break;
				
			case "educationendyear1":
				showPrompt("Year when you ended college.");
				break;
				
			case "employer1":
				showPrompt("The name of your most recent employer or company.");
				break;
				
			case "joblocation1":
				showPrompt("Type in the location of the company you work for.");
				break;
				
			case "companydesc1":
				showPrompt("Tell us about the background of the company.");
				break;
				
			case "jobtitle1":
				showPrompt("What is your present of most relevant job?");
				break;
				
			case "jobdesc1":
				showPrompt("What do you do at your job?");
				break;
				
			case "jobstartmonth1":
				showPrompt("Month when you started your job.");
				break;
			
			case "jobstartyear1":
				showPrompt("Year when you started your job.");
				break;
				
			case "jobendmonth1":
				showPrompt("Month when you ended your job.");
				break;
			
			case "jobendyear1":
				showPrompt("Year when you ended your job.");
				break;
				
			case "keywords1":
				showPrompt("Type in your name, variations if they apply, and keywords that reflect you online,all separated with commas. Keep it to 80 characters and be sure to use each word individually too. If the full name I decided to use is Mike Smith MD, my keywords could be ?Mike Smith MD, Mike, Smith, MD, Mike Smith, Mike, SF Orthopedic Surgeon, Michael Smith MD.");
				break;
				
			case "tagline1":
				showPrompt("Write a short phrase with keywords you are targeting. Use as little junk words as possible: and, if, the, at, of. Instead, use specific and unique words. A good tagline would be ?Mike Smith MD Orthopedic Surgeon San Francisco? or ?Doctor Mike Smith St. Barnabas Hospital.");
				break;
				
			case "organizations1":
				showPrompt("List any organizations, affiliations or charities you associate with. You can leave this blank.");
				break;
				
			case "shortbio1":
				showPrompt("Type 1-2 sentences about yourself, using as many keywords as you can. You can also copy 2 sentences from any bio.<br/>140 Characters.");
				break;
				
			case "bio11":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio21":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio31":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio41":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio51":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio61":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio71":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio81":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio91":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "bio101":
				//showPrompt("Add a different biography to each of the 10 fields. The biography should be 2-4 paragraphs, written in 3rd person, and use keywords that are relevant. You can write them yourself or have the professional writers at SanFranSEO write them for you. If you have less than 10 biographies, leave the rest blank. But remember, more content the better.<br/><br/><center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SanFranSEO' href='http://www.SanFranSEO.com' target='_blank'>SanFranSEO</a></center>");
				showPrompt("<center>Professionally written SEO biographies can be purchased from <a style='color: blue; text-decoration: none;' title='SearchManipulator' href='http://www.searchmanipulator.com/bios' target='_blank'>SearchManipulator</a></center>");
				break;
				
			case "link1_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle11":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link2_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SanFranSEO.");
				break;
				
			case "linktitle21":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link3_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle31":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link4_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle41":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link5_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle51":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link6_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle61":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link7_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle71":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link8_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle81":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link9_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle91":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
				
			case "link10_oLink1":
				showPrompt("Add any neutral or positive websites that you wish to promote. Do not add any negative websites you wish to suppress. We highly recommend adding at least one 'Personal Website', i.e. www.yourname.com. Personal websites can be purchased from SearchManipulator.");
				break;
				
			case "linktitle101":
				showPrompt("Link Title of the link above. If it's your company website, a good title could be 'Mike Smith MD's Company Website: St. Barnabas'.");
				break;
		}
		
		
	}
	
function saveData()
{
	//Second Save data into File
	saveTextAsFile();
	
}

function saveTextAsFile()
{
	var textToWrite = "";
	$("input[type='text'], select").each(function() 
	{
		textToWrite += $(this).attr("id") + "arrmidl" + $(this).val() + "arrendl";
	});
	
	textToWrite += "gender" + "arrmidl" + $("input[name='gender']:checked").attr("id") + "arrendl";
	textToWrite += "fullname" + "arrmidl" + localStorage["firstname"]+" "+(localStorage["middlename"].length == 0 ? "" : localStorage["middlename"])+" "+localStorage["lastname"] + "arrendl";
	textToWrite += "citystate" + "arrmidl" + localStorage["city"] + ", " + localStorage["state"] + "arrendl";
	textToWrite += "education" + "arrmidl" + localStorage["college"] + "\n" + localStorage["degree"] + " " + localStorage["major"] + "arrendl";
	textToWrite += "job" + "arrmidl" + localStorage["jobtitle"] + ", " + localStorage["employer"]  + "arrendl";
	textToWrite += "jobsummary" + "arrmidl" + localStorage["employer"] + "\n" + localStorage["jobtitle"] + "arrendl";
	textToWrite += "presently_studied" + "arrmidl" + document.getElementById("presently_studied").checked + "arrendl";
	textToWrite += "presently_employed" + "arrmidl" + document.getElementById("presently_employed").checked + "arrendl";
	
	var link1 = $("#link1_oLinkSet2").val();
	var link2 = $("#link2_oLinkSet2").val();
	var link3 = $("#link3_oLinkSet2").val();
	var link4 = $("#link4_oLinkSet2").val();
		
	var link5 = $("#link5_oLinkSet2").val();
	var link6 = $("#link6_oLinkSet2").val();
	var link7 = $("#link7_oLinkSet2").val();
	var link8 = $("#link8_oLinkSet2").val();
	var link9 = $("#link9_oLinkSet2").val();
	var link10 = $("#link10_oLinkSet2").val();
		
	if(link1.indexOf("http://") == -1 && link1)
	{
		textToWrite += "link1_oLink" + "arrmidl" + "http://"+link1 + "arrendl";
	}
	
	if(link2.indexOf("http://") == -1 && link2)
	{
		textToWrite += "link2_oLink" + "arrmidl" + "http://"+link2 + "arrendl";
	}
	
	if(link3.indexOf("http://") == -1 && link3)
	{
		textToWrite += "link3_oLink" + "arrmidl" + "http://"+link3 + "arrendl";
	}
	
	if(link4.indexOf("http://") == -1 && link4)
	{
		textToWrite += "link4_oLink" + "arrmidl" + "http://"+link4 + "arrendl";
	}
	
	if(link5.indexOf("http://") == -1 && link5)
	{
		textToWrite += "link5_oLink" + "arrmidl" + "http://"+link5 + "arrendl";
	}
	
	if(link6.indexOf("http://") == -1 && link6)
	{
		textToWrite += "link6_oLink" + "arrmidl" + "http://"+link6 + "arrendl";
	}
	
	if(link7.indexOf("http://") == -1 && link7)
	{
		textToWrite += "link7_oLink" + "arrmidl" + "http://"+link7 + "arrendl";
	}
	
	if(link8.indexOf("http://") == -1 && link8)
	{
		textToWrite += "link8_oLink" + "arrmidl" + "http://"+link8 + "arrendl";
	}
	
	if(link9.indexOf("http://") == -1 && link9)
	{
		textToWrite += "link9_oLink" + "arrmidl" + "http://"+link9 + "arrendl";
	}
	
	if(link10.indexOf("http://") == -1 && link10)
	{
		textToWrite += "link10_oLink" + "arrmidl" + "http://"+link10 + "arrendl";
	}
	
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "Promote_Yourself_Set-2.txt";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		/*downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);*/
	}

	downloadLink.click();
}

function selectState()
{
	//Add State
	var states = json_states;
	
	//Change State Upon Open
	$("#state").empty();
	
	$.each(states, function(key, value) 
	{ 
		//if(key == "initial")
		//{
			//$("#state").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
		//}
		
		if($("#country").val() != "")
		{
			if(key.indexOf($("#country").val()) != -1) 
			{
				$("#state").append('<option value="' + value + '">' + value + '</option>');
			}
		}	
	});
}

function resetData()
{
	//Reset Saved Data
	$.prompt("Are you sure you want to reset the data", 
	{
		callback:function(result){if(result)
		{
			$("input[type='text'], select, input[type='checkbox']").each(function()
			{
				$(this).val('');
				$("#male").prop("checked", true);
				$("#presently_studied").prop("checked", false);
				$("#presently_employed").prop("checked", false);
				//$("#state").empty();	
				//$("#state").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');				
			});	
			
			//selectState();
			$(".eduSlide").show();
			$(".empSlide").show();
		}},
		buttons:{YES:true,NO:false}, 
	});
}

function showErrorAlert(errorText)
{
	$.noticeAdd({text:errorText, title: 'Just saying hi', position: 'bottom', type: 'error', stay: false});
}

$(function()
{	
	$("#urlguide").click(function()
	{
		var urlguide = chrome.extension.getURL("html/urlguide.html");
		chrome.extension.sendRequest({method: "openactivetab", url: urlguide}, function(response) {});
	}); 
	//attr('checked',v.type)
	//Prepare load from other sets
	chrome.management.getAll(function(apps) 
	{
		$("#loadset").html("<option value='Select a set to load'>Select a set to load</option>");
		for(var i = 0; app = apps[i]; i++) 
		{
			if(app.name.indexOf("Promote Yourself Set ") !== -1 && app.enabled)
			{
				var x = app.name.substr(app.name.lastIndexOf(" ") + 1, app.name.length - app.name.lastIndexOf(" "));
				localStorage["set_id-" + x] = app.id;
				if(app.id !== window.location.href.replace(/.*\/\/+(.*)+\/html.*/, "$1")) $("#loadset").append("<option value='" + x + "'>Set " + x + "</option>");
				else localStorage["iSet"] = app.id;
			}
		}
	});
	
	$("#load_data").click(function()
	{
		// The ID of the extension we want to talk to.
		var fileToLoady = document.getElementById("fileToLoad").files[0];
		if(fileToLoady)
		{
			$.prompt("Are you sure you want to discard the current set and load the data from "+ fileToLoady.name +" Set ", 
			{
				callback:function(result){if(result)
				{
					//chrome.extension.sendRequest(localStorage["set_id-" + $("#loadset").val()], {txt: ""}, function(response)
					//{
					
					var fileToLoad = document.getElementById("fileToLoad").files[0];
					var fileType = /text.*/;
						
					if(fileToLoad.type.match(fileType)) 
					{
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent) 
						{
							var textFromFileLoaded = fileLoadedEvent.target.result;
							var raw_info = textFromFileLoaded.split("arrendl");
							
							$.each(raw_info, function(k, v)
							{
								if(v.split("arrmidl")[0].indexOf("_sLink") === -1)
								{
									if(v.split("arrmidl")[0] == "link1_oLinkSet1")
									{
										localStorage["link1_oLinkSet2"] = v.split("arrmidl")[1];
									}
									else if(v.split("arrmidl")[0] == "link1_oTitleSet1")
									{
										localStorage["link1_oTitleSet2"] = v.split("arrmidl")[1];
									}
									else if(v.split("arrmidl")[0] == "link2_oLinkSet1")
									{
										localStorage["link2_oLinkSet2"] = v.split("arrmidl")[1];
									}
									else if(v.split("arrmidl")[0] == "link2_oTitleSet1")
									{
										localStorage["link2_oTitleSet2"] = v.split("arrmidl")[1];
									}
									else if(v.split("arrmidl")[0] == "link3_oLinkSet1")
									{
										localStorage["link3_oLinkSet2"] = v.split("arrmidl")[1];
									}
									else if(v.split("arrmidl")[0] == "link3_oTitleSet1")
									{
										localStorage["link3_oTitleSet2"] = v.split("arrmidl")[1];
									}
									else if(v.split("arrmidl")[0] == "presently_studied")
									{
										if(v.split("arrmidl")[1] == "true")
										{
											$("#presently_studied").prop("checked", true);
											checkstatusWhenPopupReopen("eduSlide");
											localStorage["presently_studied"] = "true";
										}
										else if(v.split("arrmidl")[1] == "false")
										{
											$("#presently_studied").prop("checked", false);
											$(".eduSlide").show();
											localStorage["presently_studied"] = "false";
										}
									}
									else if(v.split("arrmidl")[0] == "presently_employed")
									{
										if(v.split("arrmidl")[1] == "true")
										{
											$("#presently_employed").prop("checked", true);
											checkstatusWhenPopupReopen("empSlide");
											localStorage["presently_employed"] = "true";
										}
										else
										{
											$("#presently_employed").prop("checked", false);
											$(".empSlide").show();
											localStorage["presently_employed"] = "false";
										}
									}
									else
									{
										localStorage[v.split("arrmidl")[0]] = v.split("arrmidl")[1];
									}	
								}	
								
							});
						
							//Load Saved Data
							$("input[type='text'], select").each(function()
							{
								$(this).val(localStorage[$(this).attr("id")]);
								$("#" + localStorage["gender"]).prop("checked", true);
							});
							
							// Select State according to country in localhost
							$("#state").empty();
							$.each(states, function(key, value) 
							{ 
								if(key.indexOf($("#country").val()) != -1)
								{
									if(localStorage["state"] == value) 
										$("#state").append('<option value="' + value + '" selected="true">' + value + '</option>');
									else
										$("#state").append('<option value="' + value + '" >' + value + '</option>');
								}
							});
							
						};
							
						fileReader.readAsText(fileToLoad, "UTF-8");
						
					}
					else 
					{
						showPrompt("File not supported. Please choose .txt file only.");
					}		
					//});
				}},
					buttons:{YES:true,NO:false}, 
			});
			
		}
		else
		{
			showPrompt("Please select a set to load..");
		}
	});

	//Add Country
	var country = json_country;
	
	$.each(country, function(key, value) 
	{ 
		if(localStorage["country"] === value) 
		{
			$("#country").append('<option value="' + value + '" selected>' + value + '</option>');
		}
		else if(localStorage["country"] !== undefined && value === "United States") 
		{ 
			$("#country").append('<option value="' + value + '" selected>' + value + '</option>');
		}	
		else 
		{  
			$("#country").append('<option value="' + value + '">' + value + '</option>');
		}
	
	});
	
	/*
	//Add State
	var states = json_states;
	
	//Change State Upon Open
	$("#state").empty();
	
	$.each(states, function(key, value) 
	{ 
		//if(key == "initial")
		//{
			//$("#state").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
		//}
		
		if($("#country").val() != "")
		{
			if(key.indexOf($("#country").val()) != -1) 
			{
				$("#state").append('<option value="' + value + '">' + value + '</option>');
			}
		}	
	});
	
	//Change State Upon Select Change
	$("#country").change(function()
	{
		$("#state").empty();
		$.each(states, function(key, value) 
		{ 
			if(key.indexOf($("#country").val()) !== -1)
			{
				$("#state").append('<option value="' + value + '" >' + value + '</option>');
			}
		});
	});
	*/
	
	//Add Month
	var months = [ "Please select...", "January", "February",  "March",  "April",  "May", "June", 
				   "July", "August", "September", "October", "November", "December" ];
	$.each(months, function(key, value) 
	{ 	
		if(value == "Please select...")
		{
			$("#birthmonth").append('<option value="" disabled="disabled" selected="selected">' + value + '</option>');
			$("#educationstartmonth").append('<option value="" disabled="disabled" selected="selected">' + value + '</option>');
			$("#jobstartmonth").append('<option value="" disabled="disabled" selected="selected">' + value + '</option>');
			$("#educationendmonth").append('<option value="" disabled="disabled" selected="selected">' + value + '</option>');
			$("#jobendmonth").append('<option value="" disabled="disabled" selected="selected">' + value + '</option>');
		}
		else
		{
			$("#birthmonth").append('<option value="' + value + '">' + value + '</option>');
			$("#educationstartmonth").append('<option value="' + value + '">' + value + '</option>');
			$("#jobstartmonth").append('<option value="' + value + '">' + value + '</option>');
			$("#educationendmonth").append('<option value="' + value + '">' + value + '</option>');
			$("#jobendmonth").append('<option value="' + value + '">' + value + '</option>');
		}
	});
	
	//Add Year
	var startYear = (new Date).getFullYear() - 101;
	var curYear = (new Date).getFullYear(); 
	while(startYear <= curYear)
	{
		if(startYear == "1913")
		{
			$("#birthyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#educationstartyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#jobstartyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#educationendyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#jobendyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
		}
		else if(startYear == "1914")
		{
			$("#birthyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#educationstartyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#jobstartyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#educationendyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
			$("#jobendyear").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
		}
		
		$("#birthyear").append('<option value="' + startYear + '">' + startYear + '</option>');
		$("#educationstartyear").append('<option value="' + startYear + '">' + startYear + '</option>');
		$("#jobstartyear").append('<option value="' + startYear + '">' + startYear + '</option>');
		$("#educationendyear").append('<option value="' + startYear + '">' + startYear + '</option>');
		$("#jobendyear").append('<option value="' + startYear + '">' + startYear + '</option>');
		startYear++;
	}
	
	//Add Day
	$("#birthday").empty();
	var days = new Date(2012,months.indexOf($("#birthmonth").val()) + 1, 0).getDate();
	var i = 1;
	while(i <= days)
	{
		if(i == 1)
		{
			$("#birthday").append('<option value="" disabled="disabled" selected="selected">Please select...</option>');
		}
		
		$("#birthday").append('<option value="' + i + '">' + i + '</option>');
		i++;
	}
	
	
	$("#birthyear, #birthmonth").change(function()
	{
		$("#birthday").empty();
		var days = new Date(2012,months.indexOf($("#birthmonth").val()) + 1, 0).getDate();
		var i = 1;
		while(i <= days)
		{
			$("#birthday").append('<option value="' + i + '">' + i + '</option>');
			i++;
		}
	});
		
	//Add Degree
	var degs = { 1:"Please select...", 2:"PhD", 3:"Doctorate", 4:"Masters", 5:"PostGrad", 6:"Bachelors", 7:"Higher Diploma", 8:"Diploma", 9:"Certificate", 
				 10:"Member", 11:"Currently Studying", 12:"College Level", 13:"High School Education", 14:"Second Level" };
	$.each(degs, function(key, value) 
	{ 
		if(value == "Please select...")
		{
			$("#degree").append('<option value="" disabled="disabled" selected="selected">' + value + '</option>');
		}
		else
		{
			$("#degree").append('<option value="' + value + '">' + value + '</option>');
		}	
	});
	
	//Load Saved Data
	$("input[type='text'], select").each(function()
	{
		$(this).val(localStorage[$(this).attr("id")]);
		$("#" + localStorage["gender"]).prop("checked", true);
	});
	
	//Load Saved Data
	$("input[type='checkbox']").each(function()
	{
		var val = localStorage[$(this).attr("id")];
	
		if(val == 'true')
		{
			$(this).val($(this).prop('checked', true));
			
			if($(this).attr("id") == "presently_studied")
				checkstatusWhenPopupReopen("eduSlide");
			else if($(this).attr("id") == "presently_employed")
				checkstatusWhenPopupReopen("empSlide");
		}	
		else 
		{
			$(this).val($(this).prop('checked', false));
		}
		
	});
	//Save Data Always
	setInterval(function()
	{
	
		// First save values in LocalStorage
		$("input[type='text'], select").each(function()
		{
			localStorage[$(this).attr("id")] = $(this).val();
		});
			
		localStorage["gender"] = $("input[name='gender']:checked").attr("id");
		localStorage["fullname"] = localStorage["firstname"] + " " + (localStorage["middlename"] ? "" : localStorage["middlename"]) + " " + localStorage["lastname"];
		localStorage["citystate"] = localStorage["city"] + ", " + localStorage["state"];
		localStorage["education"] = localStorage["college"] + "\n" + localStorage["degree"] + " " + localStorage["major"];
		localStorage["job"] = localStorage["jobtitle"] + ", " + localStorage["employer"];
		localStorage["jobsummary"] = localStorage["employer"] + "\n" + localStorage["jobtitle"];
		localStorage["presently_studied"] = document.getElementById("presently_studied").checked;
		localStorage["presently_employed"] = document.getElementById("presently_employed").checked;
		
		var link1 = $("#link1_oLinkSet2").val();
		var link2 = $("#link2_oLinkSet2").val();
		var link3 = $("#link3_oLinkSet2").val();
		var link4 = $("#link4_oLinkSet2").val();
		
		var link5 = $("#link5_oLinkSet2").val();
		var link6 = $("#link6_oLinkSet2").val();
		var link7 = $("#link7_oLinkSet2").val();
		var link8 = $("#link8_oLinkSet2").val();
		var link9 = $("#link9_oLinkSet2").val();
		var link10 = $("#link10_oLinkSet2").val();
		
		if(link1.indexOf("http://") == -1 && link1)
		{
			if(link1.indexOf("https://") == -1)
			{
				localStorage["link1_oLinkSet2"] = "http://"+link1;
			}	
		}
		
		if(link2.indexOf("http://") == -1 && link2)
		{
			if(link2.indexOf("https://") == -1)
			{
				localStorage["link2_oLinkSet2"] = "http://"+link2;
			}	
		}
		
		if(link3.indexOf("http://") == -1 && link3)
		{
			if(link3.indexOf("https://") == -1)
			{
				localStorage["link3_oLinkSet2"] = "http://"+link3;
			}	
		}
		
		if(link4.indexOf("http://") == -1 && link4)
		{
			if(link4.indexOf("https://") == -1)
			{
				localStorage["link4_oLinkSet2"] = "http://"+link4;
			}	
		}
		
		if(link5.indexOf("http://") == -1 && link5)
		{
			if(link5.indexOf("https://") == -1)
			{
				localStorage["link5_oLinkSet2"] = "http://"+link5;
			}	
		}
		
		if(link6.indexOf("http://") == -1 && link6)
		{
			if(link6.indexOf("https://") == -1)
			{
				localStorage["link6_oLinkSet2"] = "http://"+link6;
			}	
		}
		
		if(link7.indexOf("http://") == -1 && link7)
		{
			if(link7.indexOf("https://") == -1)
			{
				localStorage["link7_oLinkSet2"] = "http://"+link7;
			}
		}
		
		if(link8.indexOf("http://") == -1 && link8)
		{
			if(link8.indexOf("https://") == -1)
			{
				localStorage["link8_oLinkSet2"] = "http://"+link8;
			}	
		}
		
		if(link9.indexOf("http://") == -1 && link9)
		{
			if(link9.indexOf("https://") == -1)
			{
				localStorage["link9_oLinkSet2"] = "http://"+link9;
			}	
		}
		
		if(link10.indexOf("http://") == -1 && link10)
		{
			if(link10.indexOf("https://") == -1)
			{
				localStorage["link10_oLinkSet2"] = "http://"+link10;
			}	
		}
		
		/*
		
		//Set's Links				
		//localStorage["aboutme_sLink"] = "http://about.me/" + localStorage["username"];
		localStorage["bigsight_sLink"] = "http://bigsight.org/" + localStorage["firstname"] + "_" + localStorage["lastname"];		
		
		localStorage["bizwiz_sLink"] = "http://www.bizwiz.com/networking/" 
									+ (!localStorage["useremail"] ? "" : (localStorage["useremail"]).split('@')[0]);
							
		localStorage["dooid_sLink"] = "http://dooid.me/" + localStorage["username"];
		localStorage["flavors_sLink"] = "http://flavors.me/" + localStorage["username"];
				
		//localStorage["lookuppage_sLink"] = "http://www.lookuppage.com/users/" + localStorage["username"];
		localStorage["listal_sLink"] = "http://" + localStorage["username"] + ".listal.com";
		localStorage["profileponds_sLink"] = "http://peoplepond.com/" + localStorage["username"];
		localStorage["revu_sLink"] = "http://re.vu/" + localStorage["username"];
		localStorage["seesmic_sLink"] = "http://seesmic.com/profile/";
		
		localStorage["skopem_sLink"] = "http://www.skopem.com/business-professionals/" 
				+ (!localStorage["firstname"] ? "" : (localStorage["firstname"]).toLowerCase()) 
				+ "-" + (!localStorage["lastname"] ? "" : (localStorage["lastname"]).toLowerCase()) + "-review/";
		
		//localStorage["weebly_sLink"] = "http://" + localStorage["username"] + ".weebly.com";*/
	}, 100);
	
	$("#go").click(function()
	{
		
		//Set 2
		chrome.extension.sendRequest({method: "openactivetab", url: "https://about.me/login/signup"}, function(response) {}); //DONE
		chrome.extension.sendRequest({method: "opentab", url: "https://www.follr.com/Registration"}, function(response) {}); //DONE
		chrome.extension.sendRequest({method: "opentab", url: "https://flavors.me/signup"}, function(response) {}); //DONE
		chrome.extension.sendRequest({method: "opentab", url: "http://www.lookuppage.com"}, function(response) {}); //DONE
		chrome.extension.sendRequest({method: "opentab", url: "http://re.vu/"}, function(response) {}); //DONE	 
		chrome.extension.sendRequest({method: "opentab", url: "https://secure.tagged.com/register.html?display=login"}, function(response) {});
		chrome.extension.sendRequest({method: "opentab", url: "http://www.visualcv.com/signup"}, function(response) {}); 
		chrome.extension.sendRequest({method: "opentab", url: "http://www.weebly.com/#signup"}, function(response) {});  //DONE  
		chrome.extension.sendRequest({method: "opentab", url: "https://www.resume.com/builder"}, function(response) {}); 
		//End of Set 2 
		window.close();
	});
});
