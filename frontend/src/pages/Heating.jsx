import React from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import LandingImg from '../images/heat-landing.jpg'


// Styled Components
const Container = styled.div`
    width: 100%;
`

const OverlayContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 75vh;
    background-color: var(--blueOverlay);
`

const Overlay = styled.div`
    padding-top: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #fff;
    font-size: 5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    padding-bottom: 4rem;
`

const LandingImage = styled.div`
    width: 100%;
    height: 75vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${LandingImg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
`

const Body = styled.div`
    width: 100%;
`

const SectionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

const Section1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 15rem 0rem;
`

const Section1Title = styled.h1`
    font-size: 4rem;
    color: var(--blue);
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    padding-bottom: 2.5rem;
`

const Section1Text = styled.p`
    font-size: 2rem;
    width: 50%;
    line-height: 3rem;
    font-family: 'Lato', sans-serif;
`


const Section2 = styled.div`
    
`

const Section2Container = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center; */
`

const SubTitle = styled.h2`
    
`

const SubTextContainer = styled.div`
    
`

const SubTextItem = styled.div`
    
`

const SubText = styled.span`
    
`

const SectionItem = styled.div`
    
`

const Section3 = styled.div`
    
`

// Variants



const Heating = () => {
    return (
        <Container>
            <OverlayContainer>
                <Overlay>
                    <Title> Heating </Title>

                </Overlay>
            </OverlayContainer>

            <LandingImage> </LandingImage>

            <Body>
                <SectionsContainer>
                    <Section1>
                        <Section1Title> Durable and Affordable Heating Units </Section1Title>

                        <Section1Text>
                            We provide top-quality heating units at affordable prices. They have been designed to last long and provide you with maximum comfort. We also offer a <strong> manufacturer's warranty </strong> on all our products. Get in touch with us for top-quality heating products and installation services. Our team will visit your home or office and provide you with all the HVAC services you need.
                        </Section1Text>
                    </Section1>

                    <Section2>
                        <SectionItem>
                            <Section2Container>
                                <SubTitle> Heating Products and Servic </SubTitle>

                                <SubTextContainer>
                                    <SubTextItem>
                                        <SubText> • Geothermal </SubText>
                                        <SubText> • Radiant Heat </SubText>
                                        <SubText> • Furnaces </SubText>
                                        <SubText> • Humidifiers </SubText>
                                    </SubTextItem>

                                    <SubTextItem>
                                        <SubText> • New Construction Installations </SubText>
                                        <SubText> • Change-outs Heating Units </SubText>
                                        <SubText> • House Renovations </SubText>
                                        <SubText> • Boiler Systems </SubText>
                                    </SubTextItem>
                                </SubTextContainer>
                            </Section2Container>
                        </SectionItem>

                        <SectionItem>

                        </SectionItem>
                    </Section2>

                    <Section3>
                        
                    </Section3>
                </SectionsContainer>
            </Body>

    </Container>
    )
}

export default Heating