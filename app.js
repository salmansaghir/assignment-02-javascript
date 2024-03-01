//----------Chapter -04 -------------
//Q1:
var userName="salman", id="1200", age="19";
document.write(userName,id,age);
//Q2:
//legal variable:
//-------------
var userName="salman";
var father_name="saghir";
var time="9:30";
var up2=999;
var go4it=888;

//illegal variable:
//--------------
//var 36aa="hello";
//var *abc="world";
//var true="hi";
//var abc#="abc";
//var user@="saleem";
//var user name="ali";

var javaRules="Rules for naming JS variables";
document.write("<h1>"+javaRules+"</h1>");
var number="abc123";
var my_Variable="my_Variable";
var variable1="variable1";
document.write("<p> Variable names can only contain " +number+my_Variable+ " and " +variable1+ "For example $my_1stVariable</p>");
document.write("Variables must begin with a letter,$ or _.For example $name, _name or name ");

document.write("<br> Variable names are case-sensitive");
document.write("<br> Variable names should not be JS Keywords");

//-----------Chapter -05----------
//Q1
var a=2+5;
document.write("<br> The sum of 2 and 5 is ="+a);
//Q2
var b=9-4;
document.write("<br> The Subtraction of 9 and 4 is ="+b);
var b=9*4;
document.write("<br> The Multiplication of 9 and 4 is ="+b);
var b=10/4;
document.write("<br> The division of 10 and 4 is ="+b);
var b=9%3;
document.write("<br> The modulus of 9 and 3 is ="+b);
//Q3
var a=2;
document.write("<br>Value after variable declaration is:"+a);
var abc=5;
document.write("<br> Initial value is:"+abc);
abc++;
document.write("<br>Value after increment is:"+abc);
abc=abc+7;
document.write("<br>Value after addition is:"+abc);
abc--;
document.write("<br>Value after decrement is:"+abc);
a=abc%3;
document.write("<br>The reminder is:"+a);
//Q4:
var tickets=5;
var amount=600;
var total=tickets*amount;
document.write("<br>Total cost to buy 5 tickets to a movie is:"+total+"PKR");
//Q5:
document.write("<br>Table of 4");
var table=4;
var num=1;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=2;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=3;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=4;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=5;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=6;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=7;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=8;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=9;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
var table=4;
var num=10;
total=num*table;
document.write("<br>"+table+"x"+num+"="+total);
//Q6:
var f=10
var celsiusTemperature=((f-32)*5/9);
var c=10
var fahrenheitTemperature=((c*9/5)+32);
document.write("<br>"+celsiusTemperature+"<sup>o</sup>C");
document.write("<br>"+fahrenheitTemperature+"<sup>o</sup>F");
//Q7:
var price=700;
var qty=3;
var price_item=500;
var qty=3;
var shipping_charges= 100;
var total=((price*qty)+(price_item*qty)+shipping_charges);
document.write("<br>Total cost of your order is:"+total);
//Q8:
var totalMarks=980;
var obtainedMarks=804;
var precentage=(obtainedMarks/totalMarks*100);
document.write("<br>Total Marks="+totalMarks);
document.write("<br>Obtaindes Marks="+obtainedMarks);
document.write("<br>Precentage="+precentage);
//Q9:
var doller=104.80;
var riyal=28;
var total=((10*doller)+(25*riyal));
document.write("<br> <h1> Currency in PKR</h1>");
document.write("<br> Total Currency in PKR:"+total);
//Q10:
var num=10;
num=((num+5)*10/2);
document.write("<br>Total="+num);
//Q11:
var dateOfBitrth=1988;
var currentYear=2024;
var age=(currentYear-dateOfBitrth);
document.write("<br>Current Year:"+currentYear+"<br> Date of Birth:"+dateOfBitrth+"<br>Age:"+age );
//Q12:
document.write("<h1>The Geometrizer</h1>")
var radius=20;
document.write("<br>The Radius of a circle is:"+radius);
var circumference=((2*3.142)*radius);
document.write("<br>The circumference is:"+circumference);
var area=((3.142)*((radius)*(radius)));
document.write("<br>The Area is :"+area);
//Q13:
var fav_snack="chocolate Chip";
var age=35;
var maxAge=70;
var estimatedAmount=5;
var n=(maxAge-age)*estimatedAmount;
document.write("<br><h1>THE LIFETIME SUPPLY CALCULATOR</h1>");
document.write("<br>Favourite Snack:"+fav_snack);
document.write("<br>Current age:"+age);
document.write("<br>Estimated Maximum Age:"+maxAge);
document.write("<br>Amount of Sncak per Day:"+estimatedAmount);
document.write("<br>You will need "+ n + fav_snack+" to last you until the ripe old age of "+maxAge);

//..........chapter-06.........
//Q1
var value=10;

document.write("<br><h1>Result:</h1><br>The value is:"+value);
document.write("<br>---------------------");
++value;
document.write("<br>The value of ++a is:"+value);
document.write("<br>Now the value is:"+value);
document.write("<br>---------------------");
document.write("<br>The value of a++ is:"+value);
value++;
document.write("<br>Now The value is:"+value);
document.write("<br>---------------------");
--value;
document.write("<br>The value of --a is:"+value);
document.write("<br>Now The value is:"+value);
document.write("<br>---------------------");

document.write("<br>The value of a-- is:"+value);
value--;
document.write("<br>Now The value is: "+value);
//Q2:
var a=2;
var b=1;
var Result=(--a - --b + ++b + b--);
document.write("<br>Result "+Result);
