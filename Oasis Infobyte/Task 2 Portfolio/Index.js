// Three line menu icon 
const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

icon.onclick = function(){
    icon.classList.toggle('active');
    menu.classList.toggle('active');
}

document.onclick = function(clickEvent){
    if(clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'icon'){
        icon.classList.remove('active');
        menu.classList.remove('active');
    }
}

// Home section styling font changer

var typingText = document.querySelector('.second');
var myArray = 
["Web Developer.","Python Developer.","Coder."];
var arrayIndex = 1;
function textReplace(){
    setInterval(timer,2500);
    function timer(){
        if(arrayIndex < myArray.length){
            typingText.innerHTML = myArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
        else{
            arrayIndex = 0;
            typingText.innerHTML = myArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
    }
}
textReplace();


// toggle color theme button

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = ()=>{
    themeToggler.classList.toggle('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn=>{
    btn.onclick =()=>{
        let color = btn.style.background;
        document.querySelector('header').style.setProperty('background-color',color);
        themeToggler.classList.remove('active');
    }
})

// Adding sound on click

const audio = new Audio()
audio.src = "sci-fi-click.wav";


// Form section data send to the Email
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vivekrajbipin5@gmail.com",
        Password : "password",
        To : 'vivekrajbipin5@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email; " + document.getElementById("email").value
            + "<br> Massage; " + document.getElementById("massage").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrolly > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     })
// });
