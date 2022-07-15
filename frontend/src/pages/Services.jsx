import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LandingImg from '../images/services-landing.jpg'
import Service1 from '../images/service1.jpg'
import Service2 from '../images/service2.jpg'
import Service3 from '../images/service3.jpg'


// Styled Components
const Container = styled.div`
    width: 100%;
`

const OverlayContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--blueOverlay);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Overlay = styled.div` `

const Title = styled(motion.h1)`
    color: #fff;
    font-size: 5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    padding-bottom: 4rem;
`

const LandingImage = styled.div`
    width: 100%;
    height: 100vh;
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

const MessageContainer = styled(motion.div)`
    width: 100%;
    background-color: var(--gold);
    padding: 1.5rem 0rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MessageTitle = styled.span`
    font-size: 2.8rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: var(--blue);
    padding-bottom: 1rem;
`

const MessageText = styled.span`
    font-size: 1.8rem;
    font-family: 'Lato', sans-serif;
    color: var(--blue);
`

const Section = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    gap: 5%;
`

const BlueBackground = styled.div`
    width: 100%;
    background-color: var(--blue);
`


const SectionItem = styled.div`
    flex: 1 1 0;
    display: flex;
    margin: 8rem 0rem;
`

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SectionTitle = styled.h1`
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-bottom: 3rem;
    color: var(--blue);
`

const SectionText = styled.p`
    font-size: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 3rem;
    width: 85%;
`

const ServicesList = styled.ul`
    width: 85%;
`

const ServicesItem = styled.li`
    font-size: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #fff;
    line-height: 3rem;
    margin-bottom: 1rem;
`

const GoldTitle = styled.h1`
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-bottom: 3rem;
    color: var(--gold);
`

const SectionImage = styled.img`
    width: 75%;
    margin: 0 auto;
`

// Variants
const TitleVariant = {
    hidden: {
        y: -50,
        opacity: 0,
    },

    show: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5, 
            delay: 0.5,
        }
    }
}

const MessageVariant = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,
        transition: { 
            duration: 1, 
            delay: 2.5,
        }
    }
}



const Services = () => {
    const control1 = useAnimation()

    const [ref1, inView1] = useInView()
    
    useEffect(() => {
        if(inView1){
            control1.start('show')
        }

    }, [control1, inView1])

    return (
        <Container>
            <OverlayContainer>
                <Overlay>
                    <Title
                        variants= {TitleVariant}
                        initial= 'hidden'
                        animate= 'show'
                    > Services </Title>

                </Overlay>
            </OverlayContainer>

            <LandingImage> </LandingImage>

            <Body>
                <MessageContainer
                    variants= {MessageVariant}
                    initial= 'hidden'
                    animate= {control1}
                    ref= {ref1}
                >
                    <MessageTitle> Call Us for a FREE Estimate on AC Systems and Services. </MessageTitle>
                    <MessageText> Get a manufacturer's warranty on all our air conditioning units. Contact us for more information. We service all makes and models! </MessageText>
                </MessageContainer>

                <Section>
                    <SectionItem>
                        <ItemContainer>
                            <SectionTitle> Heating & Air Conditioning Systems </SectionTitle>

                            <SectionText>
                                Are you looking for reliable and affordable HVAC system repair services in Ocean County, NJ? If yes, get in touch with Mills Heating & Air Conditioning. We have been providing quality HVAC maintenance services for 30 years. 
                            </SectionText>
                        </ItemContainer>
                    </SectionItem>

                    <SectionItem>
                        <SectionImage src={Service1} /> 
                    </SectionItem>
                </Section>

                <BlueBackground>
                    <Section>
                        <SectionItem>
                            <SectionImage src={Service2} />
                        </SectionItem>

                        <SectionItem>
                            <ItemContainer>
                                <GoldTitle> Our Services </GoldTitle>

                                <ServicesList>
                                    <ServicesItem> Service and repair hot water boilers, air conditioners, air purification systems, humidifiers, and thermostats </ServicesItem>
                                    <ServicesItem> Repair all makes and models of heating and air conditioning system </ServicesItem>
                                    <ServicesItem> Start up and service summer/winterization </ServicesItem>
                                    <ServicesItem> Check HVAC systems for summer or winter operations </ServicesItem>
                                    <ServicesItem> Sheet Metal: full service fabrication shop </ServicesItem>
                                </ServicesList>
                            </ItemContainer>
                        </SectionItem>
                    </Section>
                </BlueBackground>

                <Section>
                    <SectionItem>
                        <ItemContainer>
                            <SectionTitle> Maintaining Your HVAC System  </SectionTitle>

                            <SectionText>
                                Regular service and maintenance will make your HVAC system more energy efficient, durable, and will also reduce constant expensive repairs. We can service all makes and models of heating and air conditioning units.
                            </SectionText>
                        </ItemContainer>
                    </SectionItem>

                    <SectionItem>
                        <SectionImage src={Service3} />
                    </SectionItem>
                </Section>
                
            </Body>

    </Container>
    )
}

export default Services