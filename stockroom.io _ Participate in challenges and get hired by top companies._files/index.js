function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
function userlogin()
{
    sessionStorage.setItem('redirect_url',window.location.pathname);
    var csrftoken = getCookie('csrftoken');
    emailid = document.getElementById('uemail').value
    password = document.getElementById('upassword').value
    if(emailid == "" && password == "")
    {
        $('#p1').empty();
        $('#p1').append('EmailId and password fields should not be left blank!');
    }
    else if(emailid == "")
    {
        $('#p1').empty();
        $('#p1').append('Email field should not be left blank!');
    }
    else if(password == "")
    {
        $('#p1').empty();
        $('#p1').append('Please enter password!');
    }
    else{
        var atpos = emailid.indexOf("@");
        var dotpos = emailid.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailid.length) {
            $('#p1').empty();
            $('#p1').append('Not a valid email address!');
        }else {
            $.ajax({
                url: '/userlogin/',
                type: 'POST',
                data: {
                    email: emailid,
                    password: password
                },
            }).done(function (response) {
                var useremail = emailid;
                var imgfordp = (useremail)?(useremail):"default";
                localStorage.setItem("userdp", "https://robohash.org/" + imgfordp);
                if (response == 'Success' && !sessionStorage.redirect_url) {
                    window.location = '/userprofile/';
                }else if(response == 'Success' && sessionStorage.redirect_url){
                    window.location = sessionStorage.redirect_url;
                }
                if (response == 'Not Match') {
                    $('#p1').empty();
                    $('#p1').append('EmailId and password do not match!');
                }
                if (response == 'Need Update') {
                    window.location = '/usersignup/';
                }
            });
        }
    }
}

function usersignup()
{
    var csrftoken = getCookie('csrftoken');
    emailid = document.getElementById('nuemail').value
    password = document.getElementById('nupassword').value
    fullname = document.getElementById('nufullname').value
    if(emailid == "" && password == "" && fullname == "")
    {
        $('#p2').empty();
        $('#p2').append('All fields are Required!');
    }
    else if(emailid == "" && password == "")
    {
        $('#p2').empty();
        $('#p2').append('Email and password field should not be left blank!');
    }
    else if(emailid == "" && fullname == "")
    {
        $('#p2').empty();
        $('#p2').append('EmailId and Fullname field should not be left blank!');
    }
    else if(password == "" && fullname == "")
    {
        $('#p2').empty();
        $('#p2').append('Password and Fullname field should not be left blank!');
    }
    else if(emailid == "")
    {
        $('#p2').empty();
        $('#p2').append('Email field should not be left blank!');
    }
    else if(password == "")
    {
        $('#p2').empty();
        $('#p2').append('Please enter password!');
    }
    else if(fullname == "")
    {
        $('#p2').empty();
        $('#p2').append('Please enter Fullname!');
    }
    else{
        var atpos = emailid.indexOf("@");
        var dotpos = emailid.lastIndexOf(".");
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailid.length) {
            $('#p2').empty();
            $('#p2').append('Not a valid email address!');
        }else if(!password.match(passw)){
            $('#p2').empty();
            $('#p2').append('Password should be 6-20 chars with one(digit, uppercase & lowercase)!');
        }else {
            $.ajax({
                url: '/usersignup/',
                type: 'POST',
                data: {
                    CSRF: csrftoken,
                    email: emailid,
                    password: password,
                    fullname: fullname
                },
            }).done(function (response) {
                if (response == "Already Exist") {
                    $('#p2').empty();
                    $('#p2').append('EmailId already exists!');
                }
                if (response == 'Success') {
                    window.location = '/usersignup/';
                }
            });
        }
    }
}

function companylogin()
{
    var csrftoken = getCookie('csrftoken');
    emailid = document.getElementById('cemail').value
    password = document.getElementById('cpassword').value

    if(emailid == "" && password == "")
    {
        $('#p3').empty();
        $('#p3').append('EmailId and password fields should not be left blank!');
    }
    else if(emailid == "")
    {
        $('#p3').empty();
        $('#p3').append('Email field should not be left blank!');
    }
    else if(password == "")
    {
        $('#p3').empty();
        $('#p3').append('Please enter password!');
    }
    else{
        var atpos = emailid.indexOf("@");
        var dotpos = emailid.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailid.length) {
            $('#p3').empty();
            $('#p3').append('Not a valid email address!');
        }else {
            $.ajax({
                url: '/companylogin/',
                type: 'POST',
                data: {
                    CSRF: csrftoken,
                    email: emailid,
                    password: password
                },
            }).done(function (response) {
                if (response == 'Success') {
                    window.location = '/companyprofile/';
                }
                if (response == 'Not Match') {
                    $('#p3').empty();
                    $('#p3').append('EmailId and password do not match!');
                }
                if (response == 'Need Update') {
                    window.location = '/companysignup/';
                }
            });
        }
    }
}

function companysignup()
{
    var csrftoken = getCookie('csrftoken');
    officialemail = document.getElementById('ncemail').value
    password = document.getElementById('ncpassword').value
    companyname = document.getElementById('nccompanyname').value
    contactnumber = document.getElementById('nccontact').value.replace(/[_()-]/g,'');
    if(officialemail == "" || password == "" || companyname == "")
    {
        $('#p4').empty();
        $('#p4').append('All fields Required!');
    }
    // else if(emailid == "" && password == "")
    // {
    //     $('#p2').empty();
    //     $('#p2').append('Email and password field should not be left blank');
    // }
    // else if(emailid == "" && fullname == "")
    // {
    //     $('#p2').empty();
    //     $('#p2').append('EmailId and Fullname field should not be left blank');
    // }
    // else if(password == "" && fullname == "")
    // {
    //     $('#p2').empty();
    //     $('#p2').append('Password and Fullname field should not be left blank');
    // }
    //  else if(emailid == "")
    // {
    //     $('#p2').empty();
    //     $('#p2').append('Email field should not be left blank');
    // }
    // else if(password == "")
    // {
    //     $('#p2').empty();
    //     $('#p2').append('Please enter password');
    // }
    // else if(fullname == "")
    // {
    //     $('#p2').empty();
    //     $('#p2').append('Please enter Fullname');
    // }
    else{
        var atpos = officialemail.indexOf("@");
        var dotpos = officialemail.lastIndexOf(".");
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=officialemail.length) {
            $('#p4').empty();
            $('#p4').append('Not a valid email address!');
        }else if(!password.match(passw)){
            $('#p4').empty();
            $('#p4').append('Password should be 6-20 chars with one(digit, uppercase & lowercase)!');
        }else if(contactnumber.length!=13){
            $('#p4').empty();
            $('#p4').append('Not a valid contact number!');
        }
        else {
            $.ajax({
                url: '/companysignup/',
                type: 'POST',
                data: {
                    CSRF: csrftoken,
                    officialemail: officialemail,
                    password: password,
                    contactnumber: contactnumber,
                    companyname: companyname
                },
            }).done(function (response) {
                if (response == "Already Exist") {
                    $('#p4').empty();
                    $('#p4').append('EmailId already exists!');
                }
                if (response == 'Success') {
                    window.location = '/companysignup/';
                }
            });
        }
    }
}




function submit(e,buttonId) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
        // alert('enter press');
        $("#"+buttonId).click();
    }
}

$(document).ready(function () {
    $('.validatePhone').inputmask({"mask": "+99(999)999[-]9999"});
});