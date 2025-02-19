function checkEmail() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirm-email');
    const submitButton = document.getElementById("submit-button");

    const email = emailInput.value;
    const confirmEmail = confirmEmailInput.value;
    const getErrorContainer = document.getElementById("error-message");

    if (confirmEmail != email) {        
        getErrorContainer.style.display ="block";        
        submitButton.disabled = true;
        /*submitButton.style.display='none'   ;*/
        return false;

    } else {
        getErrorContainer.style.display = "none";
        submitButton.style.display = 'block';
        submitButton.disabled = false;
    }
}

function prepareEmailEvent(event){
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

        let emailBody = "Contact Form Submission\n\n";
        emailBody += "Name: " + formData.get('user-name') + " " + formData.get('lastname') + "\n";
        emailBody += "Email: " + formData.get('email') + "\n";        

        let question = document.getElementById("question").value;
        emailBody += "Question: " + question + "\n";
       
        // Create the mailto link with subject and body
        const subject = "Contact, App StateVista";
        const mailtoLink = `mailto:tfrancis@engineer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
        // Open the user's email client
        window.location.href = mailtoLink;
        return false; // Prevent further default behavior
}

function hideErrorMsg(){
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById("submit-button");

    errorMessage.style.display = 'none';
    submitButton.style.display = 'block';
}


