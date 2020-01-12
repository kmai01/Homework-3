
    function generate() 
    
    {

        var char=""
        var upper_Char="ABCDEFGHIJKLMNOPQRSTUVWZYZ";
        var lower_Char="abcdefghijklmnopqrstuvwxyz";
        var number="1234567890";
        var special_char="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

        var password_L= prompt("Please enter the length of password, lenght must be between 8 and 128 characters)");

        

        console.log(password_L)


        var confirm_Uppercase= confirm("Will the password include upper case?");

       
      
        var confirm_lowercase= confirm("Will the password include lower case?");
      

        var confirm_number= confirm("Will the password include number?");

        var confirm_special_char= confirm("Will the password include special character");

        var password="";
        

        if (confirm_Uppercase) {
            char=char + upper_Char;
            console.log(char);
        
        }
        
        if (confirm_lowercase) {
            char = char + lower_Char;
            console.log(char);

        }

        if (confirm_number) {

            char= char + number;
            console.log(char);
        }

        if (confirm_special_char) {

            char = char + special_char;
            console.log(char);
        }
        
        if (confirm_Uppercase == false && confirm_lowercase == false && confirm_number == false && confirm_special_char == false)
        
        {
            alert( " Did not select any character");
            console.log(char);
        }
 
        for (var i = 0; i <password_L; i++) {
            
            password = password + char.charAt(Math.floor(Math.random() * Math.floor(char.length-1)));
            console.log(password);

        }

        document.getElementById("password-screen").value=password;
    }
