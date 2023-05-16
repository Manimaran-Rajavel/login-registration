$(document).ready(function() {
   $('#register').click(function(e){
        e.preventDefault();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var dob = $('#dob').val();
        var gender = $("input[id='gender']:checked").val();
        var email = $('#email').val();
        var phoneNumber = $('#phoneNumber').val();
        var en_password = $('#password').val();
        var password = btoa(en_password);

        if(firstName && lastName && dob && gender && email && phoneNumber && password){
            $.ajax({
                type: "POST",
                url: "../assets/php/register.php",
                data: { 
                    'firstName': firstName,
                    'lastName': lastName,
                    'dob':dob,
                    'gender': gender,
                    'email': email,
                    'phoneNumber': phoneNumber,
                    'password': password
                },
                success: function(response){
                    var data = JSON.parse(response);
                    if(data=='true'){
                            window.location.reload();
                            window.location.href = '../';
                    } else if(data=='false'){
                        alert('Data was Not Inserted');
                    }
                }
            });
        }else{
            alert("Fill all the details")
        }

   }); 

});