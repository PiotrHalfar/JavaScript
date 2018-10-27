function triangleArea(a, b, c)
{
    if(a+b<c|| a + c < b || c + b < a)
      {
        return -1;
      }  
	else
     {
		var p=(a+b+c)/2;    
		var wynik = Math.sqrt((p*(p-a)*(p-b)*(p-c) ));
		var zakres = Math.pow(10,2)
		var wynikZaokr =  (Math.round(wynik*zakres)/zakres);
		return wynikZaokr;
     }
}