function sendEmail(e) {
    console.log(e);
    e.preventDefault();
    emailjs.sendForm('service_62zm63h', 'template_k82uu9j', e.target, '2aqrXlbsDCrI_ERzk')
        .then((result) => {
            console.log("sent");
            alert('Mail sent successfully');
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
}