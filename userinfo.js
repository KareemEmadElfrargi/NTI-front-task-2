const COLORS = ["red", "green", "blue"];

function askValid(message, isValid, errorMessage) {
    let value = prompt(message);
    while (value === null || !isValid(value.trim())) {
        if (value === null) {
            return null;
        }
        alert(errorMessage);
        value = prompt(message);
    }
    return value.trim();
}

const firstName = askValid(
    "Enter your first name:",
    (v) => /^[A-Za-z؀-ۿ]+$/.test(v),
    "First name must contain letters only, not numbers."
);

const birthYear = firstName === null ? null : askValid(
    "Enter your birth year:",
    (v) => /^\d{4}$/.test(v) && Number(v) > 1900,
    "Birth year must be a number greater than 1900."
);

const mobile = birthYear === null ? null : askValid(
    "Enter your mobile number:",
    (v) => /^\d{11}$/.test(v),
    "Mobile number must be numbers only, with exactly 11 digits."
);

const color = mobile === null ? null : askValid(
    "Enter a color (red, green or blue):",
    (v) => COLORS.includes(v.toLowerCase()),
    "Color must be red, green or blue."
);

if (color === null) {
    alert("Cancelled.");
} else {
    alert(
        "Name: " + firstName +
        "\nBirth year: " + birthYear +
        "\nMobile: " + mobile +
        "\nColor: " + color.toLowerCase()
    );
    document.body.style.backgroundColor = color.toLowerCase();
}
