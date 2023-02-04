import React, { useEffect } from 'react';
import AboutDescriptionSection from './sections/AboutDescriptionSection';
import AboutUsSection from './sections/AboutUsSection';
import {Box, Tabs, Tab, Typography, AppBar, StyledEngineProvider} from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import aboutUsContent from '../../assets/data/aboutUsContent';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={"div"}>
                        {children}
                    </Typography>
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function AboutUs() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView({ behavior: 'smooth' });
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
                    <StyledEngineProvider injectFirst>
                        <Box>
                            <AppBar position="static"
                            sx={{
                                backgroundColor: "#19371c"
                            }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                    scrollButtons={true} allowScrollButtonsMobile
                                    centered
                                    wrapped="true"
                                    TabIndicatorProps={{
                                        style: {
                                          backgroundColor: "#FFFFFF"
                                        }
                                      }}
                                >
                                    <Tab label="O nas" {...a11yProps(0)} />
                                    <Tab label="Instruktorzy" {...a11yProps(1)} />
                                    <Tab label="Konie" {...a11yProps(2)} />
                                    <Tab label="Inne zwierzęta" {...a11yProps(3)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0}>
                                    <AboutDescriptionSection />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <AboutUsSection
                                        sectionKey={"INSTRUCTORS"}
                                        aboutUsContent={aboutUsContent}
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <AboutUsSection
                                        sectionKey={"HORSES"}
                                        aboutUsContent={aboutUsContent}
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <AboutUsSection
                                        sectionKey={"ANIMALS"}
                                        aboutUsContent={aboutUsContent}
                                    />
                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </StyledEngineProvider>
                </div>
                <div id="regular-content">
                    <p id="scroll-to-about-description-element"></p>
                    <AboutDescriptionSection />
                    <p id="scroll-to-instructors-element"></p>
                    <AboutUsSection
                        sectionKey={"INSTRUCTORS"}
                        aboutUsContent={aboutUsContent}
                    />
                    <p id="scroll-to-horses-element"></p>
                    <AboutUsSection
                        sectionKey={"HORSES"}
                        aboutUsContent={aboutUsContent}
                    />
                    <p id="scroll-to-animals-element"></p>
                    <AboutUsSection
                        sectionKey={"ANIMALS"}
                        aboutUsContent={aboutUsContent}
                    />
                </div>
            </div>
        </>
    );
}

export default AboutUs;