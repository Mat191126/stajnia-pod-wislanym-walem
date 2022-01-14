import React, { useEffect } from 'react';

function Prices() {

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });
    
    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="prices-content">
                    <h2 id="prices-header">Cennik</h2>
                    <h3>Jazdy Pojedyncze</h3>
                    <p>Jazda dla początkujących (lonża) 30 min - 65zł</p>
                    <p>Jazda indywidualna: jeżdziec i instruktor 60 min - 120zł</p>
                    <p>Jazda indywidualna w parze: 2 jeźdźców i instruktor 60 min - 90zł /osoba</p>
                    <p>Teren 60 min - 90zł</p>
                    <p>Oprowadzanie na kucyku 10 min - 35zł</p>
                    <p>Oprowadzanie + zajęcia z kucykiem dla maluchów ok 30 min - 65zł</p>
                    <h3>Karnety</h3>
                    <p>Karnet 8x 30min (ważny 8 tygodni) - 440zł</p>
                    <p>Karnet 8x 30min (ważny 4 tygodnie) - 400zł</p>
                    <p>Karnet 8x 60min w parze (ważny 8 tygodni) - 650zł</p>
                    <p>Karnet 8x 60min w parze (ważny 4 tygodnie) - 620zł</p>
                    <p>Karnet 12x 60min w parze (ważny 8 tygodni) - 880zł</p>
                    <p></p>
                    <p>*Grafik jazd jest stały. Dodatkowe zapisy na jazdy odbywają się poprzez SMS z kilkudniowym wyprzedzeniem.</p>
                    <p>**Odwołanie jazdy przez klienta później niż 24 h przed jej planowanym termin skutkuje koniecznością wpłaty 50 % jej wartości lub skreśleniem z karnetu. Bez względu na przyczynę odwołania.</p>
                </div>
            </div>
        </>
    );
}

export default Prices;