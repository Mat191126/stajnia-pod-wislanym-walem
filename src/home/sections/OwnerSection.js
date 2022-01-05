import React from 'react';
import OwnerImage from "../../assets/images/owner.jpg";
import CircleIcon from "../../assets/images/icons/check_circle.png";

function OwnerSection() {


    return (
        <>
            <div id="owner_section">
                <div id="owner-description-part">
                    <h2 id="owner-description-title">Katarzyna Legień</h2>
                    <div className="description-point">
                        <img className="description-icon" src={CircleIcon} />
                        <p className="description-point-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="description-point">
                        <img className="description-icon" src={CircleIcon} />
                        <p className="description-point-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="description-point">
                        <img className="description-icon" src={CircleIcon} />
                        <p className="description-point-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div id="owner-photo-part">
                    <img id="owner-image" src={OwnerImage} alt="Owner image"/>
                </div>
            </div>
        </>
    );
}

export default OwnerSection;