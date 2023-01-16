import React, { useEffect } from 'react';
import AboutDescriptionSection from './sections/AboutDescriptionSection';
import OtherAnimalsSection from './sections/OtherAnimalsSection';
import OurHorsesSection from './sections/OurHorsesSection';
import OurInstructorsSection from './sections/OurInstructorsSection';
import {Box, Tabs, Tab, Typography} from '@mui/material';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function AboutUs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });
    
    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="section-menu-buttons">
                    <a id='about-us-button' className='link-to-section' href='#scroll-to-about-description-element'> O nas </a>
                    <a id='instructors-button' className='link-to-section' href='#scroll-to-instructors-element'>Instruktorzy </a>
                    <a id='horses-button' className='link-to-section' href='#scroll-to-horses-element'> Konie </a>
                    <a id='animals-button' className='link-to-section' href='#scroll-to-animals-element'> Inne Zwierzęta </a>
                </div>
                <div id="section-menu-mobile-buttons">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="O nas" {...a11yProps(0)} />
                            <Tab label="Instruktorzy" {...a11yProps(1)} />
                            <Tab label="Konie" {...a11yProps(2)} />
                            <Tab label="Inne zwierzęta" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <AboutDescriptionSection />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <OurInstructorsSection />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <OurHorsesSection />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <OtherAnimalsSection />
                    </TabPanel>
                </div>
                <div id="regular-content">
                    <p id="scroll-to-about-description-element"></p>
                    <AboutDescriptionSection />
                    <p id="scroll-to-instructors-element"></p>
                    <OurInstructorsSection />
                    <p id="scroll-to-horses-element"></p>
                    <OurHorsesSection />
                    <p id="scroll-to-animals-element"></p>
                    <OtherAnimalsSection />
                </div>
            </div>
        </>
    );
}

export default AboutUs;