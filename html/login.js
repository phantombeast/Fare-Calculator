var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {

        alert('Please Enter your deatils');
    }

    else {
        if (username == "rajpalpulkit21@gmail.com" && password == "pulkit123") {
            alert("Login successfully");
            window.location = "main.html";
            return false;
        }
        else if (username == "rajpalpulkit12@gmail.com" && password == "pulkit123") {
            alert("Login successfully");
            window.location = "main.html";
            return false;
        }
        else {
            attempt--;
            alert("You have left " + attempt + " attempt;");
// Disabling fields after 3 attempts.
            if (attempt == 0) {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    }
}