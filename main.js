document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('calcForm').addEventListener('submit', function (event) {
        event.preventDefault();
    });

    document.getElementById("form-select").addEventListener("change", toggleForm);
});

function toggleForm() {
    const selectedValue = document.getElementById("form-select").value;
    document.getElementById("side-form").style.display = selectedValue ? "block" : "none";
}

const strana1 = document.getElementById('strana1');
const strana2 = document.getElementById('strana2');
const missingSide = document.getElementById('form-select');
const btnStrana = document.getElementById('btnStrana');
const outputStrana = document.getElementById('vysledekStrana');

btnStrana.addEventListener('click', function (event) {
    event.preventDefault();

    const s1 = parseFloat(strana1.value);
    const s2 = parseFloat(strana2.value);
    const missing = missingSide.value;
    let result;

    if (isNaN(s1) || isNaN(s2)) {
        outputStrana.innerHTML = "Chyba: Zadejte platné hodnoty.";
        return;
    }

    switch (missing) {
        case "a":
            result = Math.sqrt(s2 ** 2 - s1 ** 2);
            break;
        case "b":
            result = Math.sqrt(s2 ** 2 - s1 ** 2);
            break;
        case "c":
            result = Math.sqrt(s1 ** 2 + s2 ** 2);
            break;
        default:
            outputStrana.innerHTML = "Chyba: Vyberte stranu.";
            return;
    }

    if (isNaN(result)) {
        outputStrana.innerHTML = "Chyba: Zadejte platné délky stran, které tvoří pravoúhlý trojúhelník.";
    } else {
        outputStrana.innerHTML = `${result.toFixed(2)} cm`;
    }
});
