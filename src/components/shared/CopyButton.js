import React from 'react';
import CopyIcon from '../../assets/images/icons/copy-icon.png';


function CopyButton() {

    const copyToClipboard = event => {
        // set account number to clipboard
        event.preventDefault();
        let copiedInfo = document.getElementById("copy-info");
        try {
            navigator.clipboard.writeText("50249000050000453047830561");
            copiedInfo.innerText = "Skopiowano!";
        } catch (error) {
            copiedInfo.innerText = "Spróbuj ponownie :("
        }
        copiedInfo.style.display = "flex";

        setTimeout(function() {
            copiedInfo.style.display = "none";
        }, 3000);
    }

    return (
        <>
            <button className="copy-button" onClick={copyToClipboard}>
                <img className="copy-icon" src={CopyIcon} alt="copy-icon"/>
                <p id="copy-info"></p>
            </button>
        </>
    );
}

export default CopyButton;