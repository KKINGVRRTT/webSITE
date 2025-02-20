var isPlaying = true;
toggleMusic();

function toggleMusic() {
    var audio = document.getElementById('backgroundMusic');
    if (isPlaying) {
        audio.pause();
        console.log("Music paused");
    } else {
        audio.play();
        console.log("Music playing");
    }
    isPlaying = !isPlaying;
}

window.addEventListener('load', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
    console.log("Music playing");
});

function switchIframe() {
    var iframe = document.querySelector('iframe');
    var button = document.getElementById('iframeswitch')
    if (iframe) {
        iframe.style.animation = 'iframeAni1 1.5s forwards ease-in-out'
        button.style.animation = 'iframeAni1 1.5s forwards ease-in-out'
        setTimeout(function() {
            if (iframe.src.includes('discord')) {
                iframe.src = 'https://widgets.sociablekit.com/tiktok-feed/iframe/25523276';
                iframe.style.width = '320px'
                button.style.left = '570px'

            } else {
                iframe.src = 'https://discord.com/widget?id=1271750694382342276&theme=dark';
                iframe.style.width = '275px'
                button.style.left = '525 px'
            }
            iframe.style.animation = 'iframeAni2 2s forwards ease-in-out'
            button.style.animation = 'iframeAni2 2s forwards ease-in-out'
        }, 1500);

    }
}

function logoutAdmin(){
    var adminPanel = document.getElementById("adminPanel");
    adminPanel.style.animation = "fadeOutScale 0.1s forwards";
    setTimeout(function() {
        adminPanel.style.display = "none";
    }, 100); // Match the duration of the animation
    console.log("Logged out");
    var adminPanel = document.getElementById("adminPanel");
    adminPanel.style.animation = "fadeOutScale 0.1s forwards";
    setTimeout(function() {
        adminPanel.style.display = "none";
    }, 100);
}

function showLogin() {
    var adminLogin = document.getElementById("adminLogin");
    adminLogin.style.display = "block"; 
    adminLogin.style.animation = "fadeInScale 0.1s forwards";
}

function hideLogin() {
    var adminLogin = document.getElementById("adminLogin");
    adminLogin.style.animation = "fadeOutScale 0.1s forwards";
    setTimeout(function() {
        adminLogin.style.display = "none";
    }, 100); // Match the duration of the animation
}

function checkAdmin() {
    var password = document.getElementById("adminPassword").value;
    if (password === "101112" || password === "912" || password === "69420") {
        document.getElementById("adminLogin").style.display = "none"; // Hide login box
        var adminPanel = document.getElementById("adminPanel");
        adminPanel.style.display = "block"; // Show admin panel
        adminPanel.style.animation = "fadeInScale 0.1s forwards"; // Add animation
        setTimeout(function() {
            document.getElementById("adminTitle").style.animation = "rainbowColors 2s infinite";
        }, 100);

        // Scroll to the admin panel
        setTimeout(function() {
            adminPanel.scrollIntoView({ behavior: 'smooth' });
        }, 200); // Delay to ensure the panel is fully visible before scrolling
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password!";
    }
}



function sendToDiscord() {
    var message = document.getElementById("discordMessage").value;
    var webhookURL = "https://discord.com/api/webhooks/1341534696508620861/lw1ew4V_NpiYm_dfFutSHAvOPByqsIFQjs1yeZrOGzqimTH2Nhmi0S8kKAw3ikB_Y1uO";

    if (message.trim() === "") {
        document.getElementById("webhookStatus").innerText = "Message cannot be empty!";
        return;
    }

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("webhookStatus").innerText = "Message sent!";
            document.getElementById("discordMessage").value = ""; // Clear input
        } else {
            document.getElementById("webhookStatus").innerText = "Failed to send message.";
        }
    })
    .catch(error => {
        document.getElementById("webhookStatus").innerText = "Error: " + error;
    });
}

function sendToDiscord2() {
    var message = document.getElementById("discordMessage2").value;
    var webhookURL = "https://discord.com/api/webhooks/1339490436657451080/giJ9UbrXkeksbMmRiM9Hgi1agDOJxTpZq8tAYjquH53tFZA_p9AYg3YqruGiHwVxRtRq";

    if (message.trim() === "") {
        document.getElementById("webhookStatus2").innerText = "Message cannot be empty!";
        return;
    }

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("webhookStatus2").innerText = "Message sent!";
            document.getElementById("discordMessage2").value = ""; // Clear input
        } else {
            document.getElementById("webhookStatus2").innerText = "Failed to send message.";
        }
    })
    .catch(error => {
        document.getElementById("webhookStatus2").innerText = "Error: " + error;
    });
}