
function check() {

    const contra = document.getElementById('password').value
    const email = document.getElementById('email').value

    if (!email || !contra){

        if(!email) {
            document.getElementById("email").classList.add("is-invalid");
        }

        else {
            document.getElementById("email").classList.add("is-valid") ;
        }

        if (!contra){

            document.getElementById("password").classList.add("is-invalid"); 
        }

        else {
            document.getElementById("password").classList.add("is-valid");
        }

    }

    else {

        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("email").classList.remove("is-invalid");
    
        document.getElementById("email").classList.add("is-valid") ;
        document.getElementById("password").classList.add("is-valid");

        setTimeout(ir, 1000);

    }
}

function ir() {
    window.location.href = "index.html"
}