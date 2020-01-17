var inputShowing = true;
var x;
document.addEventListener('keydown', (e) =>{
    let currentY = 0;
    const body = document.getElementById('body');
    switch(e.keyCode) {
        // Movement
        case 37:
            e.preventDefault();
            if (!inputShowing){
                document.getElementById('inputDiv').classList.remove('d-none');
                document.getElementById('resultDiv').classList.add('d-none');
                inputShowing = true;
            }
            break;
        case 39:
            e.preventDefault();
            if (inputShowing){
                document.getElementById('inputDiv').classList.add('d-none');
                document.getElementById('resultDiv').classList.remove('d-none');
                inputShowing = false;
            }
            break;
        case 38:
            e.preventDefault();
            currentY = parseInt(window.getComputedStyle(body,null).backgroundPosition.trim().split(/\s+/)[1]);
            body.style.backgroundPosition = `0px ${currentY-50}px`;
            break;
        case 40:
            e.preventDefault();
            currentY = parseInt(window.getComputedStyle(body,null).backgroundPosition.trim().split(/\s+/)[1]);
            body.style.backgroundPosition = `0px ${currentY+50}px`;
            break;
    }
});

document.getElementById('textStroke').onchange = (e) => {
    const div = document.getElementById('resultDiv');
    const body = document.getElementById('body');
    if(e.target.checked){
        if(body.style.color === "#FFFFFF"){
            div.classList.remove('whiteStroke');
            div.classList.add('blackStroke');
        } else {
            div.classList.remove('blackStroke');
            div.classList.add('whiteStroke');
        } 
    } else{
        div.classList.remove('whiteStroke');
        div.classList.remove('blackStroke');
    }
}

document.getElementById('strechBox').onchange = (e) => {
    if(e.target.checked){
        document.getElementById('body').style.backgroundSize = "100vw 100vh";
    } else{
        document.getElementById('body').style.backgroundSize = "cover";
    }
};

function makeResult(){
    setGif();
    startTimer();
    setText();
    setDinner();
}

function startTimer(){
    clearInterval(x);
    // Set the date we're counting down to
    const time = document.getElementById('startTime').value;
    const d = new Date();
    // Parse time input and get time
    d.setHours(time.split(":")[0], time.split(":")[1]);
    const countDownDate = d.getTime();
    // Update the count down every 1 second
    x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for minutes and seconds
        const minutes = Math.floor(distance / 60000);
        const seconds = ((distance % 60000) / 1000).toFixed(0);

        // Display the result in the element with id="demo"
        document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function setGif(){
    const link = document.getElementById('gifLink').value;
    document.body.style.backgroundImage = `url('${link}')`;
    document.body.classList.add('bg');
}

function setDinner(){
    // Text content
    const dinner = document.getElementById('dinnerInput').value;
    document.getElementById('dinnerText').innerHTML = dinner;

    // Color
    const e = document.getElementById('dinnerColor');
    const color = e.options[e.selectedIndex].value;
    document.getElementById('dinnerText').style.color = color;
}

function setText(){
    // Text font
    const e = document.getElementById('textFont');
    const font = e.options[e.selectedIndex].text;
    document.getElementById('body').style.fontFamily = font;

    // Text color
    const f = document.getElementById('textColor');
    const color = f.options[f.selectedIndex].value;
    document.getElementById('body').style.color = color;
}