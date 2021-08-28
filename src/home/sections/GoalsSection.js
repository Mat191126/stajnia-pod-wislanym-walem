import React from 'react';
import rider from "../../assets/images/rider.png";
import earth from "../../assets/images/earth.png";
import star from "../../assets/images/star.png";


function GoalsSection() {


    return (
        <>
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
        </>
    );
}

export default GoalsSection;