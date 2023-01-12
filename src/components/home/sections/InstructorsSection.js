import React from 'react';
import InstructorImage1 from "../../../assets/images/owner.jpg";

function InstructorsSection() {


    return (
        <>
            <div id="instructor-section">
                <h2 id="instructors-section-title">Nasi Instruktorzy</h2>
                <div id="all-instructors">
                    <div className="instructor">
                        <div className="instructor-decor"/>
                        <div className="instructor-photo">
                            <img className="instructor-image" src={InstructorImage1} alt=""/>
                        </div>
                        <div className="instructor-description">
                            <h2 className="instructor-name">Kasia</h2>
                            <h3 className="instructor-role">Instruktor jazdy konnej</h3>
                        </div>
                    </div>
                    <div className="instructor">
                        <div className="instructor-decor"/>
                        <div className="instructor-photo">
                            <img className="instructor-image" src={InstructorImage1} alt=""/>
                        </div>
                        <div className="instructor-description">
                            <h2 className="instructor-name">Emilka</h2>
                            <h3 className="instructor-role">Instruktor jazdy konnej</h3>
                        </div>
                    </div>
                    <div className="instructor">
                        <div className="instructor-decor"/>
                        <div className="instructor-photo">
                            <img className="instructor-image" src={InstructorImage1} alt=""/>
                        </div>
                        <div className="instructor-description">
                            <h2 className="instructor-name">Gosia</h2>
                            <h3 className="instructor-role">Instruktor jazdy konnej</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InstructorsSection;