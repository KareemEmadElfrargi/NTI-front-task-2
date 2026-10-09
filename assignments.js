// 1- show current date and time in local format
function showDate() {
    let now = new Date();
    document.getElementById("dateText").innerHTML = now.toLocaleString();
}

// 2- open advertising window after 3 seconds, and close it
let adWindow = null;

function openAd() {
    setTimeout(function () {
        adWindow = window.open("", "ad", "width=400,height=300");
        if (adWindow == null) {
            alert("Popup blocked, please allow popups for this page");
            return;
        }
        let text = "<h1>Big Sale!</h1>";
        for (let i = 0; i < 5; i++) {
            text += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
        }
        adWindow.document.write(text);
    }, 3000);
}

function closeAd() {
    if (adWindow != null) {
        adWindow.close();
    }
}

// 3- regular expression that matches only even numbers (strings)
let evenRegex = /^\d*[02468]$/;

function checkEven() {
    let num = prompt("Enter a number:");
    alert('"' + num + '" -> ' + evenRegex.test(num));
}

// 4- read user info, validate, and show welcome message with today's date
function getUserInfo() {
    let name = prompt("Enter your name:");
    let phone = prompt("Enter your phone number (8 digits):");
    let mobile = prompt("Enter your mobile number (11 digits, starts with 010, 011 or 012):");
    let email = prompt("Enter your email:");
    let color = prompt("Choose a color: red, green or blue");

    let nameRegex = /^[A-Za-z\s]+$/;
    let phoneRegex = /^\d{8}$/;
    let mobileRegex = /^(010|011|012)\d{8}$/;
    let emailRegex = /^[\w.-]+@[\w-]+\.[A-Za-z]{2,}$/;

    if (!nameRegex.test(name)) {
        alert("Name must be characters, not numbers");
    } else if (!phoneRegex.test(phone)) {
        alert("Phone number must be 8 digits");
    } else if (!mobileRegex.test(mobile)) {
        alert("Mobile must be 11 digits and start with 010, 011 or 012");
    } else if (!emailRegex.test(email)) {
        alert("Email is not valid, example: abc@123.com");
    } else if (color != "red" && color != "green" && color != "blue") {
        alert("Color must be red, green or blue");
    } else {
        document.getElementById("info").innerHTML =
            "<h3 style='color:" + color + "'>Welcome " + name + "</h3>" +
            "<p style='color:" + color + "'>Phone: " + phone + "<br>Mobile: " + mobile +
            "<br>Email: " + email + "<br>Today: " + new Date().toDateString() + "</p>";
    }
}
