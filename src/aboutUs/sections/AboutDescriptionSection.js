import React from 'react';
import aboutVideo from "../../assets/video/about-video-cut.mp4";


function AboutDescriptionSection() {
    
    return (
        <>
            <div id="about-us-section-content">
                <div id="about-us-section-video" >
                    <video id="about-us-section-video-main" autoPlay loop muted playsInline src={aboutVideo}/>
                </div>
                <div id="about-us-section-description">
                    <h1 id="about-us-section-page-header">Jazda konna dla dzieci i młodzieży</h1>
                    <p>Nasza stajnia oferuje naukę jazdy konnej dla dzieci, młodzieży oraz dorosłych.
                        Spokojna i cicha okolica stwarza warunki idealne do aktywnego wypoczynku, a przede wszystkim zabawy na końskim grzbiecie.
                        Staramy się, aby pobyt u nas był przyjemny i relaksujący, a także pozwolił zdobyć nowe umięjetności.
                        Miłośnicy spacerów i rowerów mogą zostawić swoje pociechy u nas, a sami udać się na
                        wspaniałą ścieżkę na wale przeciwpowodziowym, która znajduje się 150m od stajni.
                        Zapraszamy wszystkich, którzy marzą o spędzaniu czasu wśród koni i poznaniu ich wspaniałego świata.
                        Żadna minuta Pod Wiślanym Wałem nie będzie nudna!</p>
                </div>
            </div>
        </>
    );
}

export default AboutDescriptionSection;