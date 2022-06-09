import React from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import LandingImg from '../images/landing-img.jpg'
import InfoCard from '../components/InfoCard'
import Info1 from '../images/info1.jpg'
import Info2 from '../images/info2.jpg'
import Info3 from '../images/info3.webp'

// Styled Components
const Container = styled.div`
    width: 100%;
`
const OverlayContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.55);
`

const Overlay = styled(motion.div)`
    padding-top: 15%;
`


const SubTitle = styled(motion.h2)`
    color: #fff;
    font-size: 2.3rem;
    margin-left: 15%;
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
    font-size: 1.8rem;
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
    z-index: -1;
    background-image: url(${LandingImg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

const InfoContainer = styled.div`
    height: 100vh;
    width: 100%;
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
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

    const carData = [
        {
            infoImg: {Info1},
            infoTitle: 'HVAC Services and Products',
            infoDesc: 'Whether you want to get your existing HVAC system repaired or a new one installed, contact Mills Heating & Air Conditioning. We have all the products and services to keep your home comfortable.'
        },
        {
            infoImg: {Info2},
            infoTitle: 'HVAC Services and Products',
            infoDesc: 'Whether you want to get your existing HVAC system repaired or a new one installed, contact Mills Heating & Air Conditioning. We have all the products and services to keep your home comfortable.'
        },
        {
            infoImg: {Info3},
            infoTitle: 'HVAC Services and Products',
            infoDesc: 'Whether you want to get your existing HVAC system repaired or a new one installed, contact Mills Heating & Air Conditioning. We have all the products and services to keep your home comfortable.'
        }
    ]

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

            <InfoContainer>
                <Cards>
                    <InfoCard infoImg={''} infoTitle={''} infoDesc={''} />
                    <InfoCard />
                    <InfoCard />
                </Cards>
            </InfoContainer>
        </Container>
    )
}

export default Home

