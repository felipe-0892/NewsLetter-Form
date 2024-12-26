emailjs.init("PUBLIC KEY_"); //criar conta no Emailjs e colocar sua public key :


const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    
    emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
        to_email: to,
        subject: subject,
        message: message
    })

        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
}