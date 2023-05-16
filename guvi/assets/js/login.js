$(document).ready(function(){
    $("#logIn").click(function(e){
        e.preventDefault();
        var email = $("#email").val();
        var en_password = btoa($("#password").val());
        var password = en_password;

        $.ajax({
            type: "POST",
            url: "./assets/php/login_script.php",
            data: {
                'email': email, 
                'password': password },
            success: function(response){
                var data = JSON.parse(response);
                if(data==email){
                    sessionStorage.setItem('email', data);
                    window.location.href = "./pages/profile.html";
                }else if(data=='false'){
                    $("#error1, #error2").show();
                    $('#error1').html('Invalid EmailId');
                    $('#error2').html('Invalid Password');
                    $("#email").val("");
                    $("#password").val("");
                }
            }
        });
    });
});