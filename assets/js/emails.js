function sendMail(contactForm) {
    emailjs.send("service_xh06r2y", "discovertanzania", {
        "from_name": contactForm.inputName.value,
        "to_email": contactForm.inputEmail4.value,
        "information_request": contactForm.inputQuery.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  
}
