var toggle = function()
{
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var add = document.getElementById("address").value;
    var mail = document.getElementById("emailID").value;
    var num = document.getElementById("phone").value;
    var cash = document.getElementById("COD");
    var Debit = document.getElementById("DEBIT");
    var Credit = document.getElementById("CREDIT");

    var regxPhn = /^[7-9]\d{9}$/;
   
    
    if(firstName.trim() == "")
    {
      alert("Please fill in your First Name to Proceed.");
      return false;
    }

    else if(lastName.trim() == "")
    {
      alert("Please fill in your Last Name to Proceed.");
      return false;
    }

    else if(add.trim() == "")
    {
      alert("Please fill in your Address to Proceed.");
      return false;
    }

    else if(mail.trim() == "")
    {
      alert("Please fill in your Email ID to Proceed.");
      return false;
    }

    else if(num.trim() == "")
    {
      alert("Please fill in your Phone number to Proceed.");
      return false;
    }

    else if(cash.checked == false && Debit.checked == false && Credit.checked == false)
    {
      alert("Please Choose one payment to Proceed.");
    }

    else if(regxPhn.test(num)!= true)
    {
      alert("Invalid Phone Number!!!.")
    }
    
  
    
    else 
    {

      var blur = document.getElementById("blur");
      blur.classList.toggle('active');

      var popup = document.getElementById("popup");
      popup.classList.toggle("active");

      document.getElementById('fullName').innerHTML =  firstName + " "+ lastName;
      document.getElementById("add").innerHTML = add ;
      document.getElementById("phn").innerHTML = num;
      document.getElementById("EMAIL").innerHTML = mail;

      if(cash.checked == true)
      document.getElementById("pay").innerHTML = cash.value;
      else if(Debit.checked == true)
      document.getElementById("pay").innerHTML = Debit.value;    
      else if(Credit.checked == true)
      document.getElementById("pay").innerHTML = Credit.value;

        


        /*$(document).ready(function(){
            $("#submitBtn").dblclick(function(){
                $(".dets").fadeIn(3000);
            });
        });
        */

        
       
    }


    /*document.getElementById('fullName').innerHTML =  firstName + " "+ lastName;
    document.getElementById("add").innerHTML = add ;

    if(cash.checked == true)
        document.getElementById("pay").innerHTML = cash.value;
    else if(Debit.checked == true)
        document.getElementById("pay").innerHTML = Debit.value;    
    else if(Credit.checked == true)
        document.getElementById("pay").innerHTML = Credit.value;
        */
}



