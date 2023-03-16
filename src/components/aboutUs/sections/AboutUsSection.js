import React from 'react';

function AboutUsSection({ sectionKey, aboutUsContent }) {

    let componentData = aboutUsContent[sectionKey];
    let componentClassList = componentData.CLASS_INFO;
    let componentElements = componentData.ELEMENTS_INFO;

    return (
        <>
            <div id={componentData.mainContentDivClassname}>
                <h1 id={componentData.headerClassname}>{componentData.headerText}</h1>
                {componentElements.map((element, index) => (
                    <div key={index} className={componentClassList.singleElementMainDiv}>
                        <div className={componentClassList.singleElementImageDiv}>
                            <img className={componentClassList.singleElementImage} src={element.image_url} alt="" />
                        </div>
                        <div className={componentClassList.singleElementDescriptionDiv}>
                            <h1 className={componentClassList.singleElementDescriptionData}>{element.name}</h1>
                            <p className={componentClassList.singleElementDescriptionText}>{element.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AboutUsSection;