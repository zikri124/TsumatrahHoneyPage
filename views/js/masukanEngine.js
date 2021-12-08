function getForm() {
    var email = document.getElementById('validationDefault01')
    var response = document.getElementById('validationDefault02')

    var result = 1
    //var result = sendEmail(email, response)
    var cek = document.getElementById('cek')

    if (result == 1) {
        alert("Terima kasih atas masukan anda")
    }
}

function sendEmail(email, text) {
    var result = 0
    Email.send({
        Host: "smtp.gmail.com",
        Username: "gamexbiasa21@gmail.com",
        Password: "syzmvhtmvtwjovsc",
        To: 'tsumatrah@gmail.com',
        From: email,
        Subject: "Masukan pelanggan madu Tsumatrah",
        Body: text,
    }).then(
        console.log("Email send"),
        result = 1,
    );
    return result;
}
