        function myFunction1(){
            document.getElementById("img1").src="photo.jpg";
        }
        function mySubmitForm(){
            var Name=document.form.name;
            var Lname=document.form.lname;
            var Uname=document.form.username;
            var Email=document.form.email;
            var Tnumber=document.form.tnumber;
            var Password=document.form.password;
            var Cpassword=document.form.cpassword;
            if(Name.value=="")
            {
                window.alert("Please enter your first name");
            }
            if(Lname.value=="")
            {
                window.alert("Please enter your last name");
            }
            if(Uname.value=="")
            {
                window.alert("Please enter user name");
            }
            if(Email.value=="")
            {
                window.alert("Please enter email name");
            }
            if(Password.value=="")
            {
                window.alert("Please enter password name");
            }
            if(Cpassword.value==""!=Password.value)
            {
                window.alert("Please enter conform password");
            }
        }