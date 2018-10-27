function stringRotate(a, b)
{
 var empty ='';
 
  if(b<0 || isNaN(b))
  { 
    return empty;
  }
  else
  {
	return a.substr(b) + a.substr(0, b);
  }
}

