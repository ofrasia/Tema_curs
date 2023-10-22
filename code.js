let selectOptiune = document.getElementById("selectOptiune");
let buttons = document.getElementById("buttons");

// Function pentru a afisa data curenta si ora, intr-un mesaj alerta
function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    alert("Current Date and Time: " + formattedDateTime);
}

selectOptiune.addEventListener("change", function () {
    let optiune = selectOptiune.value;

    // Ascunde toate butoanele
    document.getElementById("Identitate").style.display = "none";
    document.getElementById("Comunicare").style.display = "none";
    document.getElementById("Experienta").style.display = "none";
    document.getElementById("Hobby").style.display = "none";
    document.getElementById("Current_Date").style.display = "inline";

    if (optiune === "minim") {
        buttons.style.display = "block";
        document.getElementById("Identitate").style.display = "inline";
        document.getElementById("Comunicare").style.display = "inline";
        document.getElementById("Current_Date").style.display = "inline";
    } else if (optiune === "maxim") {
        buttons.style.display = "block";
        document.getElementById("Identitate").style.display = "inline";
        document.getElementById("Comunicare").style.display = "inline";
        document.getElementById("Experienta").style.display = "inline";
        document.getElementById("Hobby").style.display = "inline";
        document.getElementById("Current_Date").style.display = "inline";
    } else {
        buttons.style.display = "Current_date"; // Ascunde butonul daca nicio optiune nu este selectata
    }
});

// Add click event listeners pe fiecare buton
document.getElementById("Identitate").addEventListener("click", function () {
    alert("Nume: \nPrenume: \nNr. carte identitate: \nVarsta:");
});
document.getElementById("Comunicare").addEventListener("click", function () {
    alert("Lista app - conturi existente pe social media:");
});
document.getElementById("Experienta").addEventListener("click", function () {
    alert("Proiecte la care ai participa: \nDurata lor: \nData curenta:");
});
document.getElementById("Hobby").addEventListener("click", function () {
    alert("Lista hobby-uri: \nData curenta:");
});

// Add click event listener pentru butonul "Current_Date"
document.getElementById("Current_Date").addEventListener("click", displayCurrentDateTime);