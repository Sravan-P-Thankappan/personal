function validation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("ph").value;
    

    if(name.length<2||!isNaN(name)||name=="")
    {
        alert("please enter valid name")
        return false;
    }

    if(email.indexOf("@")==-1||email.length<=10)
    {
        alert("please enter valid email")
        return false;
    }

    if(isNaN(phone)||phone.length!=10)
    {
        alert("please enter valid phone number")
        return false;
    }

    alert("form submitted successfully")
    return true;
}