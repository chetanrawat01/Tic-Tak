function f()
{

    //variables by Id's

    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    

//---Player x win--
    if((b1==x || b1==x) || (b2==x || b2==x) && (b3==x || b3==x) ) //condition-1

    {
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        alert("Player x won");
    }
    else if((b1==x || b1==x) || (b4==x || b4==x) &&(b7==x || b7==x) ) //condition-2

    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        alert("Player x won");
    }
    else if((b4==x || b4==x) || (b5==x || b5==x) &&(b6==x || b6==x) ) //condition-3

    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b7").disabled=true;
        alert("Player x won");
    }
    else if((b7==x || b7==x) || (b8==x || b8==x) &&(b9==x || b9==x) ) //condition-4

    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        alert("Player x won");
    }
    else if((b2==x || b2==x)|| (b5==x || b5==x) && (b8==x || b8==x)) //condition-5

    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b9").disabled=true;
        alert("Player x won");
    }
    else if((b3==x || b3==x)|| (b6==x || b6==x) && (b9==x || b9==x)) //condition-6

    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        alert("Player x won");
    }
    else if((b1==x || b1==x)|| (b5==x || b5==x) && (b9==x || b9==x)) //condition-7

    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        alert("Player x won");
    }
    else if((b3==x || b3==x)|| (b5==x || b5==x) && (b7==x || b7==x)) //condition-8

    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        alert("Player x won");
    }

//--player o win-- 

else if((b1==o || b1==o) || (b2==o || b2==o) && (b3==o || b3==o) ) //condition-9


{
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    alert("Player 0 won");
}
else if((b1==o || b1==o) || (b4==o || b4==o) &&(b7==o || b7==o) ) //condition-10

{
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    alert("Player 0 won");
}
else if((b4==o || b4==o) || (b5==o || b5==o) &&(b6==o || b6==o) ) //condition-11

{
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b7").disabled=true;
    alert("Player 0 won");
}
else if((b7==o || b7==o) || (b8==o || b8==o) &&(b9==o || b9==o) ) //condition-12

{
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b6").disabled=true;
    alert("Player 0 won");
}
else if((b2==o || b2==o)|| (b5==o || b5==o) && (b8==o || b8==o)) //condition-13

{
    document.getElementById("b1").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b9").disabled=true;
    alert("Player 0 won");
}
else if((b3==o || b3==o)|| (b6==o || b6==o) && (b9==o || b9==o)) //condition-14

{
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    alert("Player 0 won");
}
else if((b1==o || b1==o)|| (b5==o || b5==o) && (b9==o || b9==o)) //condition-15

{
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    alert("Player 0 won");
}
else if((b3==o || b3==o)|| (b5==o || b5==o) && (b7==o || b7==o)) //condition-16

{
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    alert("Player 0 won");
}

//---Draw condition---

else if ((b1 == x || b1 == o) && (b2 == x || b2 == o) && (b3 == x || b3 == o) && (b4 == x || b4 == o) && (b5 == x || b5 == o) && (b6 == x || b6 == o) && (b7 == x || b7 == o) && (b8 == x || b8 == o)&& (b9 == x || b9 == o)) 
    {
             document.getElementById('print').innerHTML = "Match Tie";
    }
}

