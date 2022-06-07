import React from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import LandingImg from '../images/landing-img.jpg'

// Styled Components
const Container = styled.div`
    width: 100%;
`
const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
`

const Overlay = styled(motion.div)`
    
`

const SubTitle = styled(motion.h2)`
    color: #fff;
    font-size: 2.1rem;
    margin-left: 15%;
    margin-top: 15%;
    padding-bottom: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
`

const Title = styled(motion.h1)`
    color: #fff;
    font-size: 4.5rem;
    margin-left: 15%;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    padding-bottom: 4rem;
`

const ServicesLink = styled(motion.span)`
    color: #000;
    font-size: 2.1rem;
    background-color: var(--gold);
    padding: 1.5rem;
    border-radius: 1rem;
    margin-left: 15%;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
`

const LandingImage = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    background-image: url(${LandingImg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

// Variants
const OverlayVariant = {
    hidden: {
        x: -100,
        opacity: 0,
    },

    show: {
        opacity: 1,
        x: 0,
        transition: { 
            duration: 1.5, 
            delay: 1.5,
        }
    }
}

const Home = () => {
    return(
        <Container>
            <OverlayContainer>
                <Overlay
                    variants= { OverlayVariant }
                    initial= 'hidden'
                    animate= 'show'
                >
                    <SubTitle variants= { OverlayVariant }> Keeping you cool in the summer and warm in the winter!  </SubTitle>

                    <Title variants= { OverlayVariant }> 
                        Efficient and Reliable HVAC Installation <br/> and Maintenance Services
                    </Title>

                    <ServicesLink variants= { OverlayVariant }> Get Serviced </ServicesLink>
                </Overlay>
            </OverlayContainer>

            <LandingImage> </LandingImage>
        </Container>
    )
}

export default Home