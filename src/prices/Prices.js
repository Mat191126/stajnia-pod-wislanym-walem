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
                    <p>Ceny:</p>
                </div>
            </div>
        </>
    );
}

export default Prices;