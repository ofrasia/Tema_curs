function faOrice(valoareInitiala) {
    // Adună valoarea inițială cu ea însăși și o stochează în variabila "rezultat".
    rezultat = valoareInitiala + valoareInitiala;

    // Afișează valoarea rezultatului în consolă.
    console.log(rezultat);

    // Adaugă un timestamp în consolă pentru a înregistra momentul actual al apelului funcției.
    // console.timeStamp();
}


function faAltceva() {
    // Inițializăm un obiect nou numit "person".
    let person = new Object();

    // Cerem utilizatorului să introducă o proprietate și o stocăm în variabila "props".
    let props = prompt("Spune-mi o proprietate");

    // Cerem utilizatorului să introducă o valoare pentru proprietatea "props" și o stocăm în variabila "value".
    let value = prompt("Da-mi valoare pentru " + props);

    // Adăugăm o nouă pereche cheie-valoare în obiectul "person". Cheia este "props", iar valoarea este "value".
    person[props] = value;

    // Afișăm obiectul "person" în consolă pentru a vedea ce conține.
    console.log("faAltceva", person);
}

function maiMareSauEgal() {
    // Inițializăm două variabile num1 și num2 cu valorile 7 și 3.
    let num1 = 7;
    let num2 = 3;

    // Verificăm dacă num1 este mai mare decât num2 folosind o declarație "if".
    if (num1 > num2) {
        // Dacă condiția este adevărată (num1 > num2), afișăm un mesaj în consolă.
        console.log(num1 + " is greater than " + num2);
    } else {
        // Dacă condiția este falsă, afișăm un alt mesaj în consolă.
        console.log(num2 + " is greater than " + num1);
    }

    // Afișăm valorile variabilelor num1 și num2 în consolă, indiferent de rezultatul condiției.
    console.log(num1, num2);
}

// Apelăm funcția maiMareSauEgal() pentru a o executa.
window.maiMareSauEgal();

