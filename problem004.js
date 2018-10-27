function getTotalNumberOfNewYaersEveSundays(a, b)
{
    var data = new Date();
    var result=0;
    for(a; a<=b; a++)
	{
        data.setFullYear(a);
        data.setDate(1);
        if(data.getDay()==6)
		{
            result++;
        }
    }
    return result;
}