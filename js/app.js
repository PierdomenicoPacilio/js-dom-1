document.getElementById("interruttore").addEventListener ("click", function () {
    // DICHIARAZIONE DELLE VARIABILI COLLEGATE CON L'HTML
    let img = document.getElementById("lampadina");
    let element = document.getElementById("sfondo"); 
    let btn = document.getElementById("interruttore");

    // CAMBIO DELL'IMMAGINE

    // operatore ternario:
    // img.src = img.src.includes("img/white_lamp_360.png") ? "img/yellow_lamp_360.png" : "img/white_lamp_360.png";

    // istruzione condizionale normale:
    if (img.src.includes("img/white_lamp_360.png")) {
        img.src = "img/yellow_lamp_360.png";
    } else {
        img.src = "img/white_lamp_360.png";
    };
  
    // CAMBIO DELLO SFONDO
    
    // operatore ternario:
    // element.classList.contains("bg-black") ? element.classList.replace("bg-black", "bg-light") : element.classList.replace("bg-light", "bg-black");

    // istruzione condizionale normale:
    if (element.classList.contains("bg-black")) {
        element.classList.replace("bg-black", "bg-light");
    } else {
        element.classList.replace("bg-light", "bg-black");
    };

    // CAMBIO DEL BOTTONE
    
    // operatore ternario:
    // btn.innerText === "Accendi" ? btn.innerText = "Spegni" : btn.innerText = "Accendi";

    // istruzione condizionale normale:
    if (btn.innerText === "Accendi") {
        btn.innerText = "Spegni";
    } else {
        btn.innerText = "Accendi";
    };
});