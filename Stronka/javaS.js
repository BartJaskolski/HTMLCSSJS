//alert("Hello");
	var timer1 =0;
	var timer2 =0;
	var n=Math.floor(Math.random()*5)+1;
	var n=1
	
	
	
	function schowaj()
	{//  JQUERY
		$("#slajder").fadeOut(500);
	}
	
	
	
	
	function fun()
	{
		n++;if(n>5)n=1;
		var plik ="<img src=\"img/slajd/slajd" + n + ".png\"/>";
		document.getElementById("slajder").innerHTML=plik;
		$("#slajder").fadeIn(500);	
		timer1=setTimeout("fun()",5000);
		timer2=setTimeout("schowaj()",4500);
	}
	
	
	
	function obliczanie()
	{
	 var dzis = new Date();
	 var zera="0";
	 var god = dzis.getHours();
	 if(god<10) {}
	 var min=  dzis.getMinutes();
 	 var sek = dzis.getSeconds();
	 var dupka = god+":"+min+":"+sek;
	 document.getElementById("zegar").innerHTML=dupka;
	setTimeout("obliczanie()",1000);
	}
	
	
	function sprawdz()
	{
		var liczba = document.getElementById("pole").value;
		if(liczba>0) document.getElementById("wynik").innerHTML="dodania";
		else if(liczba<0) document.getElementById("wynik").innerHTML="ujemna";
		else if(liczba==0) document.getElementById("wynik").innerHTML="zero";
		else document.getElementById("wynik").innerHTML="To nie jest liczba";
	}

	
	
	function wypisz()
	{
		var p11 =document.getElementById("p1").value;
		var p22 =document.getElementById("p2").value;
		var nap= "";
		if(p11<p22)
		{	
			for (i=p11;i<=p22;i++)
			{
				nap= nap+i+" ";
			}
			document.getElementById("wypisane").innerHTML =nap;
		}else if(p22<p11)
		{
			for (i=p22;i<=p11;i++)
			{
				nap= nap+i+" ";
			}
			document.getElementById("wypisane").innerHTML =nap;
		}else if(p22=p11)
		{
			document.getElementById("wypisane").innerHTML=p22;
		}
	}	
	function ustawslajd(nSlajd)
	{
		clearTimeout(timer1);
		clearTimeout(timer2);
		n=nSlajd-1;
		schowaj();
		setTimeout("fun()",500);
	}	