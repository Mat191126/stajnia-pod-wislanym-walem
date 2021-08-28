import React from 'react';
import aboutVideo from "../../assets/video/about-video-cut.mp4";


function AboutSection() {


    return (
        <>
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
        </>
    );
}

export default AboutSection;