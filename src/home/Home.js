import React from 'react';
import rider from "../assets/images/rider.png";
import earth from "../assets/images/earth.png";
import star from "../assets/images/star.png";

function Home() {
    return (
        <>
            <div id="content">
                <div id="about_section">
                    <h3 id="about_header">Poznaj naszą stajnię!</h3>
                    <p id="about_description">Nasza stajnia oferuje naukę jazdy konnej dla dzieci, młodzieży oraz dorosłych.
                        Spokojna i cicha okolica stwarza warunki idealne do aktywnego wypoczynku, a przede wszystkim
                        zabawy na końskim grzbiecie.
                        <br/>
                        Staramy się, aby pobyt u nas był przyjemny i relaksujący, a także pozwolił zdobyć nowe umięjetności.
                        Miłośnicy spacerów i rowerów mogą zostawić swoje pociechy u nas, a sami udać się na
                        wspaniałą ścieżkę na wale przeciwpowodziowym, która znajduje się 150m od stajni.
                        <br/>
                        Zapraszamy wszystkich, którzy marzą o spędzaniu czasu wśród koni i poznaniu ich wspaniałego świata.
                        Żadna minuta Pod Wiślanym Wałem nie będzie nudna!</p>
                </div>
                <div id="goals_section">
                    <div className="goal">
                        <img className="goal_image" src={rider}/>
                        <p className="goal_description">
                            Trenuj pod okiem doświadczonej instruktorki jazdy konnej
                        </p>
                    </div>
                    <div className="goal">
                        <img className="goal_image" src={earth}/>
                        <p className="goal_description">
                            Czuj się bezpiecznie na jedynej w Polsce ujeżdżalni ze specjalnym podkładem wykonanym z opon
                        </p>
                    </div>
                    <div className="goal">
                        <img className="goal_image" src={star}/>
                        <p className="goal_description">
                            Rozwijaj swoje umiejętności świetnie się przy tym bawiąc
                        </p>
                    </div>
                </div>
                <div id="animals_section">
                    <h3 id="animal_header">Nasze zwierzęta</h3>
                    <p id="animal_description">W naszej stajni oczywiście mieszkają konie. Jednak prócz nich są
                        także koty i psy. <br/>Zobacz galerię oraz opisy naszych małych i dużych przyjaciół tutaj[LINK]</p>
                </div>
                <div id="contact_section">
                    <h3 id="contact_header">Kontakt</h3>
                    <p id="contact_description">
                        Stajnia pod wiślanym wałem<br/>
                        ul.Wiślana 34<br/>
                        32-051 Jaśkowice<br/>
                        Tel: 665 246 359<br/>
                        Mail: stajnia@podwislanymwalem.pl</p>
                </div>
            </div>
        </>
    );
}

export default Home;