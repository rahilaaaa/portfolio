function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value, // Corrected parameter
    };

    emailjs.send("service_l84t6k8", "template_qde9tar", params)
        .then(() => {
            alert("Email sent!!");
        })
        .catch((error) => {
            console.error("Email sending failed: ", error);
        });
}
