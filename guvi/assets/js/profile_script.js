$(document).ready(function(){
    var email = sessionStorage.getItem('email');
    displayData(email);
function displayData(email) {
    $.ajax({
        type: 'POST',
        url: '../assets/php/profile.php',
        data: { 'email': email },
        success: function(response){
            var data = JSON.parse(response);
            $("#name").text(data['f_name']+" "+data['l_name']);
            $("#email").text(data['r_email']);
            $("#dob").text(data['dob']);
            $("#gender").text(data['gender']);
            $("#phone_no").text(data['phone_no']);
        }
    });   
}

    $('#update').click(function(e){
        e.preventDefault();

        var u_email = $('#email').text();
        
        $.ajax({
            type: 'POST',
            url: '../assets/php/profile.php',
            data: { 'email': u_email },
            success: function(response){
                var data = JSON.parse(response);
                var in_fname = data['f_name'];
                var in_lname = data['l_name'];
                var in_email = data['r_email'];
                var in_dob = data['dob'];
                var in_gender = data['gender'];
                var in_phone = data['phone_no'];
                var password = atob(data['password'])

                $("h5[id='name'").html("<input id='in-fname' type='text' class='form-control w-50' value="+in_fname+"><input id='in-lname' type='text' class='form-control w-50' value="+in_lname+">");
                $("i[id='email'").html("<input id='in-email' type='email' class='form-control w-75 ml-2' value="+in_email+">");
                $("i[id='dob'").html("<input id='in-dob' type='date' class='form-control w-50 ml-2' value="+in_dob+">");
                $("i[id='gender'").html("<select id='in-gender' class='form-control w-50 ml-2'><option value='Male'>Male</option><option value='Female'>Female</option><option value='Others'>Others</option></select>");
                $("i[id='phone_no'").html("<input id='in-phone' type='tel' class='form-control w-50 ml-2' value="+in_phone+">");
                $("h6[id='pass'").html("<h6>Password: <input id='in-pass' type='password' class='form-control w-50 ml-2' value="+password+"></h6>");
                $("#update").html("<a href='' id='save' class='buttn mr-3'>Save</a><a href='' id='cancle' class='buttn'>Cancle</a>");
                $('#logout').hide();

                $('#save').click(function(e){
                    e.preventDefault();
                    var passw = btoa($('#in-pass').val());
                    var u_email = $('#in-email').val();
                    $.ajax({
                        type: 'POST',
                        url: '../assets/php/profile_update.php',
                        data: {
                            'sup_email': email,
                            'fname': $('#in-fname').val(),
                            'lname': $('#in-lname').val(),
                            'email': u_email,
                            'dob': $('#in-dob').val(),
                            'gender': $('#in-gender').val(),
                            'phone': $('#in-phone').val(),
                            'password': passw
                        },
                        success: function(response){
                            console.log(response);
                            var data = JSON.parse(response);
                            if(data == 'true'){
                                sessionStorage.removeItem('email');
                                sessionStorage.setItem('email', u_email);
                                window.location.reload();
                                $('#logout').show();
                            }
                        }
                    });
                });

                $('#cancle').click(function(e){
                    e.preventDefault();
                    window.location.reload();

                });

            }
        });
    });

    $('#logout').click(function(e){
        e.preventDefault();
        sessionStorage.removeItem('email');
        window.location.replace("../index.html"); 
    });

});

