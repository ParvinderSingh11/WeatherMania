$(document).ready(function() {

    function validateForm() {
        // get from data
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const form = document.querySelector('form');
        const data = Object.fromEntries(new FormData(form).entries());
        // valdiating data
        if (data.firstname == "") {
            alert("Please Enter First name");
            return false;
        } else if (data.lastname == "") {
            alert("Please Enter Last name");
            return false;
        } else if (data.email == "") {
            alert("Please Enter email");
            return false;
        } else if (!emailReg.test(data.email)) {
            alert("Enter correct Email");
            return false;
        } else if (data.subject == "") {
            alert("Please Enter subject");
            return false;
        } else if (data.message == "") {
            alert("Please Enter Message");
            return false;
        } else {
            return true;

        }

    }
    $("button#btn").on("click", function() {
        // validating enteries
        if (validateForm()) {
            let mailSent = 0;
            // sending email
            const form = document.querySelector('form');
            const data = Object.fromEntries(new FormData(form).entries());
            //generating emails

            // Email.send({
            //         Host: "smtp.gmail.com",
            //         Username: "harmalkeet11@gmail.com",
            //         Password: "Enter your password",
            //         To: 'harmalkeet11@gmail.com',
            //         From: "harmalkeet11@gmail.com",
            //         Subject: data.subject,
            //         Body: `HI You got a message from ${data.firstname} ${data.lastname} <br>
            //             Email:${data.email}<br>
            //             Message:${data.message} `,
            //     })
            //     .then(function(message) {
            //         $("#data-box").css("display", "block");
            // mailSent = 1
            //      });
            // if (!mailSent) {
            //     alert("Mail is not sent");
            // }else{$("#data-box").css("display", "block");}
            $("#data-box").css("display", "block");


        }
    })
});