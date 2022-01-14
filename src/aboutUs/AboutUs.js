import React, { useEffect } from 'react';
import aboutVideo from "../assets/video/about-video-cut.mp4";


function AboutUs() {

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });
    
    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="about-us-content">
                    <div id="about-page-video" >
                        <video id="about-page-video-main" autoPlay loop muted playsInline src={aboutVideo}/>
                    </div>
                    <div id="about-page-description">
                        <h1 id="about-page-header">Poznaj naszą stajnię!</h1>
                        <p>Nasza stajnia oferuje naukę jazdy konnej dla dzieci, młodzieży oraz dorosłych.
                            Spokojna i cicha okolica stwarza warunki idealne do aktywnego wypoczynku, a przede wszystkim zabawy na końskim grzbiecie.
                            Staramy się, aby pobyt u nas był przyjemny i relaksujący, a także pozwolił zdobyć nowe umięjetności.
                            Miłośnicy spacerów i rowerów mogą zostawić swoje pociechy u nas, a sami udać się na
                            wspaniałą ścieżkę na wale przeciwpowodziowym, która znajduje się 150m od stajni.
                            Zapraszamy wszystkich, którzy marzą o spędzaniu czasu wśród koni i poznaniu ich wspaniałego świata.
                            Żadna minuta Pod Wiślanym Wałem nie będzie nudna!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;