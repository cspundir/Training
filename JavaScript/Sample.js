/**
 * 
 */

function dosomething()
{
	alert("hello");
}

function dosomethingelse()
{
alert("hello again");	

//document.write("testing...its working");

var x=5;
var y=10;
var cars=['maruti','vm','hyundai', 'ford'];

document.write(x+y+"<br/>");
document.write(cars.indexOf("ford")+"<br/>");
document.write(cars[3]+"<br/>");
document.write(add1()+"<br/>");
document.write(add2(1,2)+"<br/>");
document.write(add2('chandan ','singh')+"<br/>");
document.write(add2(1)+"<br/>");
document.write(add2('chandan')+"<br/>");

document.write(add3('chandan ')+"<br/>");
document.write(add3(1)+"<br/>");
dayy=new Date().getDay();
document.write(day1()+"<br/>");
document.write("Today is "+case1()+"<br/>");

}

function otherthings()
{
	
dosomething();
dosomethingelse();

}


function add1()
{
sum=1+1;
return sum
}


function add2(num1, num2)
{
num2= num2 || 2;
sum=num1+num2;
return sum
}


function add3(num1, num2='singh')
{
sum=num1+num2;
return sum
}


function day1()
{
var day11=new Date().getDay();
return day11;
}

function case1()
{

switch(day1())
{
case 0:
	weekday="Sunday....last day of holiday...get ready for Monday....";
	break;
case 1:
	weekday="Monday";
		break;
case 2:
	weekday="Tuesday";
		break;
case 3:
	weekday="Wednesday";
		break;
case 4:
	weekday="Thursday";
	break;
case 0:
	weekday="Friday";
		break;
case 0:
	weekday="Saturday....its holiday";
		break;

}
return weekday;
}


function loading()
{
	alert("loading....");
}
