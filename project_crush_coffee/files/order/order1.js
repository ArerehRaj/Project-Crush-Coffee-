var total ;
var sum = new Array(26);
sum[0] = sum[1] = sum[2] =sum[3] =sum[4] =sum[5] =sum[6] =sum[7] = sum[8] =sum[9] =sum[10] =sum[11] =sum[12] =sum[13] =sum[14] =sum[15] =sum[16] =sum[17] =sum[18] =sum[19] =sum[20] =sum[21] =sum[22] =sum[23] =sum[24] =sum[25] =0
var para = ['Espresso','Mocha','Latte', 'Capp' ,'Ameri','Mint','Vanila', 'Cara' , 'Egg', 'Ome', 'Ham', 'HamBurg', 'Cheese', 'Red', 'Maca', 'Cross', 'Cake' , 'Apple', 'Pecan' , 'Chocolate', 'MCup','Orange', 'AppJ','Iced', 'IcedM','IcedT'];
var cost = [100 , 150 , 120 , 120 , 125 , 120 ,125 , 140, 100 , 45 ,90 , 120, 150, 200, 220, 140,240,250,275,100,120,80,70,60,50,40];


var add = function(param)
{
    var i =0;
    for(i; i<26 ; i++)
    {
        if(param == para[i])
        {
            var value = parseInt(document.getElementById(para[i]).value,20);
            value = isNaN(value)?0 : value;
            value++;

            document.getElementById(para[i]).value = value;
            var item = value;
            sum[i] = (item)*cost[i];  
            break;
        } 
    }
}

var remove = function(param)
{
    var i = 0;
    for(i; i<26 ; i++)
    {
        if(param == para[i])
        {
            var value = parseInt(document.getElementById(para[i]).value,0);
            value = isNaN(value)?0 : value;
            value--;

            document.getElementById(para[i]).value = value;
            var item = value;
            sum[i] = (item)*cost[i];
            break;
        }
    }  
}

var totalcost = function()
{
    total = sum[0] + sum[1] + sum[2] + sum[3]+ sum[4]+ sum[5]+ sum[6]+ sum[7] + sum[8]+ sum[9]+ sum[10]+ sum[11]+ sum[12]+ sum[13]+ sum[14]+ sum[15]+ sum[16]+ sum[17]+ sum[18]+ sum[19]+ sum[20]+ sum[21]+ sum[22]+ sum[23]+ sum[24]+ sum[25] ;    
    document.getElementById("totalCost").innerHTML = "₹" + total;
}



$(document).ready(function(){

    $(".sec2").click(function(){
        $(".esspresso").fadeOut(2000,function(){
            $(".sandwich").fadeIn(3000);
        });
    });

    $(".sec3").click(function(){
        $(".esspresso").fadeOut(2000,function(){
            $(".sweets").fadeIn(3000);
        });
    });

    $(".sec4").click(function(){
        $(".esspresso").fadeOut(2000,function(){
            $(".cold").fadeIn(3000);
        });
    });

    $(".sec3").click(function(){
        $(".sandwich").fadeOut(2000,function(){
            $(".sweets").fadeIn(3000);
        });
    });

    $(".sec4").click(function(){
        $(".sweets").fadeOut(2000,function(){
            $(".cold").fadeIn(3000);
        });
    });

    $(".sec1").click(function(){
        $(".cold").fadeOut(2000,function(){
            $(".esspresso").fadeIn(3000);
        });
    });

    $(".sec1").click(function(){
        $(".sandwich").fadeOut(2000,function(){
            $(".esspresso").fadeIn(3000);
        });
    });

    $(".sec3").click(function(){
        $(".sandwich").fadeOut(2000,function(){
            $(".sweets").fadeIn(3000);
        });
    });

    $(".sec4").click(function(){
        $(".sandwich").fadeOut(2000,function(){
            $(".cold").fadeIn(3000);
        });
    });

    $(".sec1").click(function(){
        $(".sweets").fadeOut(2000,function(){
            $(".esspresso").fadeIn(3000);
        });
    });

    $(".sec2").click(function(){
        $(".sweets").fadeOut(2000,function(){
            $(".sandwich").fadeIn(3000);
        });
    });

    $(".sec4").click(function(){
        $(".sweets").fadeOut(2000,function(){
            $(".cold").fadeIn(3000);
        });
    });

    $(".sec1").click(function(){
        $(".cold").fadeOut(2000,function(){
            $(".esspresso").fadeIn(3000);
        });
    });

    $(".sec2").click(function(){
        $(".cold").fadeOut(2000,function(){
            $(".sandwich").fadeIn(3000);
        });
    });

    $(".sec3").click(function(){
        $(".cold").fadeOut(2000,function(){
            $(".sweets").fadeIn(3000);
        });
    });

});

/*
var total;
var sum1=sum2=sum3=sum4=sum5=sum6=sum7=sum8=0;

/*var add = function(param)
{
    if(param == 'Espresso')
    {
        var value = parseInt(document.getElementById("Espresso").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Espresso").value = value;
        var Espresso = value;
        sum1 = (Espresso)*100;
    }

    else if(param == 'Mocha')
    {
        var value = parseInt(document.getElementById("Mocha").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Mocha").value = value;
        var Mocha = value;
        sum2 = (Mocha)*150;
    }

    else if(param == 'Latte')
    {
        var value = parseInt(document.getElementById("Latte").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Latte").value = value;
        var Latte = value;
        sum3 = (Latte)*120;
    }

    else if(param == 'Capp')
    {
        var value = parseInt(document.getElementById("Capp").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Capp").value = value;
        var Capp = value;
        sum4 = (Capp)*120;
    }

    else if(param == 'Ameri')
    {
        var value = parseInt(document.getElementById("Ameri").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Ameri").value = value;
        var Ameri = value;
        sum5 = (Ameri)*125;
    }

    else if(param == 'Mint')
    {
        var value = parseInt(document.getElementById("Mint").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Mint").value = value;
        var Mint = value;
        sum6 = (Mint)*120;
    }

    else if(param == 'Vanila')
    {
        var value = parseInt(document.getElementById("Vanila").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Vanila").value = value;
        var Vanila = value;
        sum7 = (Vanila)*125;
    }

    else if(param == 'Cara')
    {
        var value = parseInt(document.getElementById("Cara").value,10);
        value = isNaN(value)?0 : value;
        value++;

        document.getElementById("Cara").value = value;
        var Cara = value;
        sum8 = (Cara)*140;
    }

    //total espresso

    total = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8;


    
}

var remove = function(param)
{
    if(param == 'Espresso')
    {
        var value = parseInt(document.getElementById("Espresso").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Espresso").value = value;
        var Espresso = value;
        sum1 = (Espresso)*100;
    }

    else if(param == 'Mocha')
    {
        var value = parseInt(document.getElementById("Mocha").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Mocha").value = value;
        var Mocha = value;
        sum2 = (Mocha)*150;
    }

    else if(param == 'Latte')
    {
        var value = parseInt(document.getElementById("Latte").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Latte").value = value;
        var Latte = value;
        sum3 = (Latte)*120;
    }

    else if(param == 'Capp')
    {
        var value = parseInt(document.getElementById("Capp").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Capp").value = value;
        var Capp = value;
        sum4 = (Capp)*120;
    }

    else if(param == 'Ameri')
    {
        var value = parseInt(document.getElementById("Ameri").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Ameri").value = value;
        var Ameri = value;
        sum5 = (Ameri)*125;
    }

    else if(param == 'Mint')
    {
        var value = parseInt(document.getElementById("Mint").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Mint").value = value;
        var Mint = value;
        sum6 = (Mint)*120;
    }

    else if(param == 'Vanila')
    {
        var value = parseInt(document.getElementById("Vanila").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Vanila").value = value;
        var Vanila = value;
        sum7 = (Vanila)*125;
    }

    else if(param == 'Cara')
    {
        var value = parseInt(document.getElementById("Cara").value,10);
        value = isNaN(value)?0 : value;
        value--;

        document.getElementById("Cara").value = value;
        var Cara = value;
        sum8 = (Cara)*140;
    }

    total = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8;
}

/*
$(document).ready(function(){
    $("#sand").click(function(){
        $(".espresso").fadeOut(function(){
            $(".sandwich").fadeIn();
        });
    });
});
*/
