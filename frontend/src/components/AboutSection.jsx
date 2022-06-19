import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AboutImage from '../images/about-img.jpg'

// Styled Components
const AboutContainer = styled(motion.div)`
    width: 70%;
    display: flex;
`

const AboutItems = styled(motion.div)`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AboutTitle = styled.h1`
    font-size: 5rem;
    font-family: 'Lato', sans-serif;
    padding-bottom: 2rem;
`

const AboutText = styled.p`
    font-size: 2.2rem;
    line-height: 4.5rem;
    width: 85%;
    font-family: 'Lato', sans-serif;
`

const AboutImg = styled.img`
    width: 85%;
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
            animate= {controls}
            ref={ref}
        >
            <AboutItems variants={ AboutVariants }>
                <AboutTitle> Why Choose Us? </AboutTitle>

                <AboutText>
                    Mills Heating & Air Conditioning is a family owned and operated business with 30 years of experience. We specialize in HVAC products and services. Contact us for complete heating and air conditioning services.
                </AboutText>
            </AboutItems>

            <AboutItems variants={ AboutVariants }>
                <AboutImg src={AboutImage} />
            </AboutItems>
        </AboutContainer>
    )
}

export default AboutSection