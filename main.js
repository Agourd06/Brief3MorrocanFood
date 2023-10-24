
// ------burgermenu-----

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

            
        
            var username = document.getElementById('name').value;
            var emailId = document.getElementById("mail").value;
            var mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
            var numId = document.getElementById("PHONE").value;
            var numRegex = /^[0-9]{10}$/; 
        
        
            document.getElementById('rejectmessag').style.display = 'none';
            document.getElementById('rejectemail').style.display = 'none';
            document.getElementById('rejectnumber').style.display = 'none';
            document.getElementById('mail').style.border = "1px solid gray";
            document.getElementById('name').style.border = "1px solid gray";
            document.getElementById('PHONE').style.border = "1px solid gray";

            
           

            if ( !isNaN(username)) {
              
                
                document.getElementById('rejectmessag').style.display = 'block';
                document.getElementById('name').style.border = "1px solid red";

                return;
            }

            if (!emailId.match(mailRegex)) {
                
                
                document.getElementById('rejectemail').style.display = 'block';
                document.getElementById('mail').style.border = "1px solid red";
                return;
            }

            if (!numId.match(numRegex) ) {
              
              
                document.getElementById('rejectnumber').style.display = 'block';
                document.getElementById('PHONE').style.border = "1px solid red";
                return;
            }
           
   
          
    
            
        });
    }
});


   




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


// ---------responsivejs----------------

const menutop = document.querySelector('.menutop');
const menu = document.querySelector('.menu');
const menuh1 = document.querySelector('.menutitle h1');

const cartespos = document.querySelector('.cartespos');
const cartespos1 = document.querySelector('.cartespos1');
const cartessize = document.querySelector('.cartes');

const mediascreen = window.matchMedia("(max-width: 767px)");
const mediascreen1 = window.matchMedia("(min-width: 767px)");

window.onload = function () {
    window.addEventListener('resize', function () {
        if (mediascreen.matches) {
            menutop.style.height = "30vh";
            menu.style.minHeight = "347vh";
            menuh1.style.fontSize = "50px";
            cartespos.style.justifyContent = "center";
            cartespos.style.alignItems = "center";
            cartespos.style.flexDirection = "column";
            cartespos1.style.justifyContent = "center";
            cartespos1.style.alignItems = "center";
            cartespos1.style.flexDirection = "column";
         
            cartessize.style.marginTop = "15px";
        }
        else if (mediascreen1.matches) {
            menutop.style.height = "30%";
            menu.style.height = "170vh";
            menuh1.style.fontSize = "70px";
            cartespos.style.justifyContent = "space-between";
            cartespos.style.justifyContent = "space-between";
          
        
           
        }
    });
}


