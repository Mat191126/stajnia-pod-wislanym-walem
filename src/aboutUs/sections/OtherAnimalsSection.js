import React from 'react';
import ExampleHorse from "../../assets/images/owner.jpg";


function OtherAnimalsSection() {
    
    return (
        <>
            <div id="other-animals-section-content">
                <div className="single-animal">
                    <div className="animal-image-part" >
                        <img className="animal-image" src={ExampleHorse} alt="" />
                    </div>
                    <div className="animal-description-part">
                        <h1 className="animal-data">Mania</h1>
                        <p className="animal-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="single-animal">
                    <div className="animal-image-part" >
                        <img className="animal-image" src={ExampleHorse} alt="" />
                    </div>
                    <div className="animal-description-part">
                        <h1 className="animal-data">Toffi</h1>
                        <p className="animal-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="single-animal">
                    <div className="animal-image-part" >
                        <img className="animal-image" src={ExampleHorse} alt="" />
                    </div>
                    <div className="animal-description-part">
                        <h1 className="animal-data">Milord</h1>
                        <p className="animal-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="single-animal">
                    <div className="animal-image-part" >
                        <img className="animal-image" src={ExampleHorse} alt="" />
                    </div>
                    <div className="animal-description-part">
                        <h1 className="animal-data">Misia i Maniek</h1>
                        <p className="animal-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OtherAnimalsSection;