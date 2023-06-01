
var username = document.getElementById("username")

username.addEventListener("focusout",function()
{
    var username1 = document.getElementById("username").value

    var display1=document.getElementById("span1")
    if(username1.length<=10 && username1!="")
    {
        
        display1.style.visibility="visible"
        display1.textContent="valid user name "
        display1.style.color="green"
        display1.style.fontSize="13px"

    }
    else{
        display1.style.visibility="visible"
        display1.textContent="please  enter valid range"
        display1.style.color="red"
        display1.style.fontSize="13px"
    }
}
)
//********************************* */
// var email =document.getElementById("email")
// email.addEventListener("focusout",function(){

// var email1=document.getElementById("email").value
// var display2=document.getElementById("span2")


    
// if(email1)
//     {
//         display2.style.visibility="visible"
//         display2.textContent="enter valid email"
//         display2.style.color="green"
//         display2.style.fontSize="13px"

//     }

// else{
//     display2.style.visibility="visible"
//     display2.textContent="enter vaild email format"
//     display2.style.color="red"
//     display2.style.fontSize="13px"
// }




// })
//*********************************************** */
var password =document.getElementById("password")

password.addEventListener("focusout",function(){

var password1=document.getElementById("password").value

var display3=document.getElementById("span3")

if(password1.length==8)
{
    display3.style.visibility="visible"
    display3.textContent="password is valid"
    display3.style.color="green"
    display3.style.fontSize="13px"
}
else
{
display3.style.visibility="visible"
display3.textContent="please enter valid range "
display3.style.color="red"
display3.style.fontSize="13px"
}

})
//************************************** */

var cnfmpass=document.getElementById("confirmpassword")

var pass=document.getElementById("password")

cnfmpass.addEventListener("focusout",function()
{
    var display4=document.getElementById("span4")
    var cnfmpass1=document.getElementById("confirmpassword").value
    var pass1=document.getElementById("password").value


    if(pass1==cnfmpass1)
{
    display4.style.visibility="visible"
    display4.textContent="password is matched"
    display4.style.color="green"
    display4.style.fontSize="13px"
}
else
{
display4.style.visibility="visible"
display4.textContent="password is not matched "
display4.style.color="red"
display4.style.fontSize="13px"
}
    

})
//************************* */


var eyeicon =document.getAnimations("eye")
var conpass = document.getElementById("confirmpassword")
eyeicon.addEventListener("click",function(){

    if(conpass.type==="password")
    {
        conpass.type="password";

    }
    else
    {
        conpass.type=""
    }

})