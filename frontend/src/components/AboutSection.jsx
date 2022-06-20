import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AboutImage from '../images/about-img.jpg'

// Styled Components
const AboutContainer = styled(motion.div)`
    width: 70%;
    display: flex;
    padding: 2rem 0rem;
`

const AboutItems = styled(motion.div)`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const AboutTitle = styled.h1`
    font-size: 5rem;
    font-family: 'Lato', sans-serif;
    padding-bottom: 2rem;
    color: var(--gold);
`

const AboutText = styled.p`
    width: 90%;
    font-size: 2rem;
    font-weight: 400;
    line-height: 4.5rem;
    font-family: 'Lato', sans-serif;
`

const AboutImg = styled.img`
    width: 90%;
`


// Variants
const ContainerVariants = {
    hidden: { opacity: 0 },

    show: {
        opacity: 1,
        transition: { staggerChildren: 0.8 }
    } 
}

const AboutVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },

    show: {
        opacity: 1,
        y: 0,
        transition: {  duration: 1}
    } 
}


const AboutSection = () => {

    const controls = useAnimation()

    const [ref, inView] = useInView()
    
    useEffect(() => {
        if(inView){
            controls.start('show')
        }
    }, [controls, inView])

    return (
        <AboutContainer
            variants={ ContainerVariants }
            initial= 'hidden'
            animate={controls}
            ref={ref}
        >
            <AboutItems variants={ AboutVariants }>
                <TextContainer>
                    <AboutTitle> Why Choose Us? </AboutTitle>

                    <AboutText>
                        Mills Heating & Air Conditioning is a family owned and operated business with 30 years of experience. We specialize in HVAC products and services. Contact us for complete heating and air conditioning services.
                    </AboutText>
                </TextContainer>
            </AboutItems>

            <AboutItems variants={ AboutVariants }>
                <AboutImg src={AboutImage} />
            </AboutItems>
        </AboutContainer>
    )
}

export default AboutSection