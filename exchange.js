const EGP_PER_USD = 30.9;

function exchangeEgyPound(pounds) {
    return Math.round((pounds / EGP_PER_USD) * 10) / 10;
}

const money = Number(prompt("Enter money in EGP:"));

if (money <= 0) {
    alert("Please ENTER THE NUMEBR");
} else {
    alert(money + " EGP = " + exchangeEgyPound(money) + " USD");
}
