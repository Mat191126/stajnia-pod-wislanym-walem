import React from 'react';
import rider from "../assets/images/rider.png";
import earth from "../assets/images/earth.png";
import star from "../assets/images/star.png";
import aboutVideo from "../assets/video/about-video-cut.mp4";

function Home() {

    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('video').playbackRate = 0.5;
    });

    return (
        <>
            <div id="content">
                <div id="about_section">
                    <h2 id="about_header">Poznaj naszą stajnię!</h2>
                    <div id="about_content">
                        <div id="about-video" >
                            <video autoPlay loop muted playsInline src={aboutVideo}/>
                        </div>
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
                            Jedyna w Polsce ujeżdżalnia ze specjalnym podkładem wykonanym z opon
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
                    <h2 id="animal_header">Nasze zwierzęta</h2>
                    <p id="animal_description">W naszej stajni oczywiście mieszkają konie. Jednak prócz nich są
                        także koty i psy. <br/>Zobacz galerię oraz opisy naszych małych i dużych przyjaciół tutaj[LINK]</p>
                </div>
                <div id="contact_section">
                    <h2 id="contact_header">Kontakt</h2>
                    <p>W razie jakichkolwiek pytań prosimy o telefon lub maila.
                        Postaramy się odpowiedzieć jak najszybciej na Wasze wiadomości!</p>
                    <address>
                        <p><a href="mailto:stajnia@podwislanymwalem.pl">stajnia@podwislanymwalem.pl</a> </p>
                        <a href="tel:+48-665-246-359">665 246 359</a>
                        <p>ul.Wiślana 34, 32-051 Jaśkowice</p>
                    </address>
                </div>
            </div>
        </>
    );
}

export default Home;