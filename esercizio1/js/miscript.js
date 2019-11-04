function tabelline()
{
	for(j=1;j<=10;j++){
		document.write("<ul>");
		for (i=1;i<=10;i++){
			document.write("<li>"+j+"*"+i+"="+(i*j)+"</li>");
 }
 document.write("</ul>");
 }
	
}

function tabellina5()
{
		document.write("<ul>");
		for (i=1;i<=10;i++){
			document.write("<li>5*"+i+"="+(5*i)+"</li>");
 }
 document.write("</ul>");
}



function listany()
{
	document.write("<select name='any'>");
 for (i=1950;i<=2019;i++){
	document.write("<option value='"+i+"'>"+i+"</option>");
 }
 document.write("</select>");
}
 
function listmes()
{ document.write("<select name='mes'>");
 for (e=01;e<=12;e++){
	document.write("<option value='"+e+"'>"+e+"</option>");
 }
 document.write("</select>");
}

function listdia()
{
	document.write("<select name='dia'>");
 for (a=01;a<=31;a++){
	document.write("<option value='"+a+"'>"+a+"</option>");
 }
 document.write("</select>");
}

