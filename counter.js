
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

let count = parseFloat(getCookie("count"));

if (isNaN(count)) {
    count = 0;
    setCookie("count", count);
}

// Optional: display the count somewhere
function updateDisplay() {
    const el = document.getElementById("count");
    if (el) el.value = count;
    updateNutrition();
}
updateDisplay();

function updateNutrition() {
    const singleKj = 1907;
    const singleKcal = 454;
    const singleFat = 27;
    const singleSaturates = 14;
    const singleCarbohydrates = 38;
    const singleSugars = 4.3;
    const singleProtein = 13;
    const singleSalt = 1.7;

    const count = parseFloat(document.getElementById("count").value);

    document.getElementById("energykj").innerHTML = (singleKj * count).toFixed(2).replace(/[.,]00$/, "") + 'kJ';
    document.getElementById("energykcal").innerHTML = (singleKcal * count).toFixed(2).replace(/[.,]00$/, "") + 'kcal';
    document.getElementById("fat").innerHTML = (singleFat * count).toFixed(2).replace(/[.,]00$/, "") + 'g';
    document.getElementById("saturates").innerHTML = (singleSaturates * count).toFixed(2).replace(/[.,]00$/, "") + 'g';
    document.getElementById("carbohydrates").innerHTML = (singleCarbohydrates * count).toFixed(2).replace(/[.,]00$/, "") + 'g';
    document.getElementById("sugars").innerHTML = (singleSugars * count).toFixed(2).replace(/[.,]00$/, "") + 'g';
    document.getElementById("protein").innerHTML = (singleProtein * count).toFixed(2).replace(/[.,]00$/, "") + 'g';
    document.getElementById("salt").innerHTML = (singleSalt * count).toFixed(2).replace(/[.,]00$/, "") + 'g';
}

// --- Button listeners ---
document.getElementById("minus").addEventListener("click", () => {
    count -= 1;
    setCookie("count", count);
    updateDisplay();
});

document.getElementById("plus").addEventListener("click", () => {
    count += 1;
    setCookie("count", count);
    updateDisplay();
});

let countTimeout;

document.getElementById("count").addEventListener("input", () => {
    clearTimeout(countTimeout);

    countTimeout = setTimeout(() => {
        count = parseFloat(document.getElementById("count").value);
        setCookie("count", count);
        updateDisplay();
    }, 500);
});