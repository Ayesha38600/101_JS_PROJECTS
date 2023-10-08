
function sendEmail(params) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "uayesha731@gmail.com",
        Password : "rizwakawish38",
        To : '20b-038-ce@students.uit.edu',
        From : document.getElementById("email").value,  //ye user jo email dalega usy lera
        Subject : "New Contact Form Enquiry",
        Body : "Name" + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Phone no: " + document.getElementById("phone").value 
        + "<br> Message: " + document.getElementById("message").value 
    }).then(
      message => alert("Message Sent Successfully")
    );
 //above code https://smtpjs.com/ sy copy kia h    
}