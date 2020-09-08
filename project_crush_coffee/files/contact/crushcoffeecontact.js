function toggle()
{
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var phn = document.getElementById("number").value
    var mess = document.getElementById("message").value;

    var regxPhn = /^[7-9]\d{9}$/;

    if(name.trim() == "")
    {
        alert("Please Enter your Name to Proceed.");
    }

    else if(mail.trim() == "")
    {
        alert("Please enter Your Email ID to proceed.");
    }

    else if(phn.trim() == "")
    {
        alert("please enter your phone number to proceed.");
    }

    else if(regxPhn.test(phn)!= true)
    {
        alert("Invalid Phone Number!!!.");
    }

    else
    {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');

        var popup = document.getElementById("popup");
        popup.classList.toggle("active");

        document.getElementById("fullName").innerHTML = name;
        document.getElementById("phn").innerHTML = phn;
        document.getElementById("EMAIL").innerHTML = mail;
        if(mess.trim() == "")
        {
            document.getElementById("mes").innerHTML = "No Messages";
        }

        else document.getElementById("mes").innerHTML = mess ;

    }
    
}

function toggle1()
{
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var size = document.getElementById("size").value;

    if(date.trim() == "")
    {
        alert("Please fill in Date.");
    }

    else if(time.trim() == "")
    {
        alert("Please fill in Time.");
    }

    else
    {
        document.getElementById("DATE").innerHTML = date ;
        document.getElementById("TIME").innerHTML = time ;
        document.getElementById("SIZE").innerHTML = size ;

        var blur = document.getElementById("blur1");
        blur.classList.toggle('active');

        var popup = document.getElementById("popup1");
        popup.classList.toggle("active");
    }

    
}