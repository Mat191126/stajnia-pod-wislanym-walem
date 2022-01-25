import React from 'react';
import HorseImage from "../../assets/images/horse.jpg";


function AboutDescriptionSection() {
    
    return (
        <>
            <div id="about-us-section-content">
                <div id="about-us-section-description">
                    <h1 id="about-us-section-page-header">Jazda konna dla dzieci i młodzieży</h1>
                    <div id="about-us-section-image-div">
                        <img id="about-us-section-image" src={HorseImage} alt="" />
                    </div>
                    <p>Stajnia pod Wiślanym Wałem to miejsce, które powstało z naszych marzeń.
                    Najpierw spełniło się marzenie o Elidzie, potem o Elsorze, a następnie w 2013 roku o małej, ale własnej stajni.
                    Od 2016 stajnia stopniowo się rozwijała i obecnie mieszkają w niej 4 duże konie oraz 3 kuce.</p>

                    <p>Nasza stajnia oferuje naukę jazdy konnej dla dzieci, młodzieży oraz dorosłych. Spokojna i cicha okolica stwarza warunki idealne do nauki oraz aktywnego wypoczynku. Staramy się, aby pobyt u nas był przyjemny i relaksujący, ale także pozwolił zdobyć nowe umiejętności. Miłośnicy spacerów i rowerów mogą zostawić swoje pociechy u nas, a sami udać się na wspaniałą ścieżkę spacerowo-rowerową na wale przeciwpowodziowym, która znajduje się nieopodal stajni.</p>

                    <p>Prowadzimy zajęcia w systemie 1+2, czyli instruktor i dwóch jeźdźców oraz całkowicie indywidualne.
                    Jazdy odbywają się na ogrodzonej ujeżdżalni z całorocznym, bezpiecznym podłożem Rei-Tex oraz dla bardziej zaawansowanych w terenie. Wraz z naszymi jeźdźcami uczestniczymy w szkoleniach oraz zawodach jeździeckich.
                    Zapraszamy wszystkich, którzy marzą o spędzaniu czasu wśród koni i poznaniu ich wspaniałego świata. Żadna minuta Pod Wiślanym Wałem nie będzie nudna!</p>
                </div>
            </div>
        </>
    );
}

export default AboutDescriptionSection;