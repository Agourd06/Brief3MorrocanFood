function showSidebar() {
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
}
function hideSideBar() {
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
}



// -----------------------contact validation---------------





document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Basic validation example
            const name = document.getElementById("name");
            const email = document.getElementById("mail");
            const phone = document.getElementById("PHONE");

            
            name.style.border = "1px solid #ccc";
            email.style.border = "1px solid #ccc";
            phone.style.border = "1px solid #ccc";

            if (!name.value) {
              
                name.style.border = "1px solid red";

                return;
            }

            if (!email.value) {
                
                email.style.border = "1px solid red";
                return;
            }

            if (!phone.value) {
              
                phone.style.border = "1px solid red";
                return;
            }

           
            
        });
    }
});


   

// }
function rejectbehind() {
    // Get user inputs
    var username = document.getElementById('name').value;
    var emailId = document.getElementById("mail").value;
    var mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    var numId = document.getElementById("PHONE").value;
    var numRegex = /^[A-Za-z]{0,2}\d+$/; 


    document.getElementById('rejectmessag').style.display = 'none';
    document.getElementById('rejectemail').style.display = 'none';
    document.getElementById('rejectnumber').style.display = 'none';


    if (!isNaN(username)) {
        document.getElementById('rejectmessag').style.display = 'block';
        return;
    }


    if (!emailId.match(mailRegex)) {
        document.getElementById('rejectemail').style.display = 'block';
        return;
    }


    if (!numId.match(numRegex) && ) {
        document.getElementById('rejectnumber').style.display = 'block';
        return;
    }

  
    
}

/////////////////////


// ------------FaQ--------------------
const questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


