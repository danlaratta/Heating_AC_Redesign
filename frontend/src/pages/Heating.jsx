import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LandingImg from '../images/heat-landing.jpg'
import Heat1 from '../images/heat1.jpeg'
import Heat2 from '../images/heat2.webp'
import Heat3 from '../images/heat3.jpg'

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
    margin-top: 5rem;
`

const Section = styled(motion.div)`
    width: 70%;
    margin: 0 auto;
    display: flex;
    gap: 5%;
`

const BlueBackground = styled.div`
    width: 100%;
    background-color: var(--blue);
`


const SectionItem = styled(motion.div)`
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

const GoldTitle = styled.h1`
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-bottom: 3rem;
    color: var(--gold);
`

const WhiteText = styled.p`
    font-size: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 3rem;
    width: 85%;
    color: #fff;
`

const SectionImage = styled.img`
    width: 75%;
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
            duration: 1, 
            delay: 1.5,
        }
    }
}

const SectionVariants = {
    hidden: { opacity: 0 },

    show: {
        opacity: 1,
        transition: { duration: 1.3, staggerChildren: 1 }
    } 
}

const SectionItemVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },

    show: {
        opacity: 1,
        y: 0,
        transition: {  duration: 1.3}
    } 
}


const Heating = () => {

    const control1 = useAnimation()
    const control2 = useAnimation()
    const control3 = useAnimation()

    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()
    
    useEffect(() => {
        if(inView1){
            control1.start('show')
        }

        if(inView2){
            control2.start('show')
        }

        if(inView3){
            control3.start('show')
        }

    }, [control1, inView1, control2, inView2, control3, inView3, ])

    return (
        <Container>
            <OverlayContainer>
                <Overlay>
                    <Title
                        variants= {TitleVariant}
                        initial= 'hidden'
                        animate= 'show'
                    > Heating </Title>

                </Overlay>
            </OverlayContainer>

            <LandingImage> </LandingImage>

            <Body>
                <Section
                    variants= {SectionVariants}
                    initial= 'hidden'
                    animate= {control1}
                    ref= {ref1}
                >
                    <SectionItem variants={SectionItemVariants}>
                        <ItemContainer>
                            <SectionTitle> Affordable Heating Units </SectionTitle>

                            <SectionText>
                                We provide top-quality heating units at affordable prices. They have been designed to last long and provide you with maximum comfort. We also offer a manufacturer's warranty on all our products. 
                            </SectionText>
                        </ItemContainer>
                    </SectionItem>

                    <SectionItem variants={SectionItemVariants}>
                        <SectionImage src={Heat1} />
                    </SectionItem>
                </Section>

                <BlueBackground>
                    <Section
                        ref= {ref2}
                        variants= {SectionVariants}
                        initial= 'hidden'
                        animate= {control2}
                    >
                        <SectionItem variants={SectionItemVariants}>
                            <SectionImage src={Heat2} />
                        </SectionItem>

                        <SectionItem variants={SectionItemVariants}>
                            <ItemContainer>
                                <GoldTitle> Keep Your Home Warm </GoldTitle>

                                <WhiteText>
                                    Stay warm and comfortable throughout winter with a high-quality heating system from Mills Heating & Air Conditioning. We provide geothermal heating units, boilers, furnaces, and many other HVAC products.
                                </WhiteText>
                            </ItemContainer>
                        </SectionItem>
                    </Section>
                </BlueBackground>

                <Section
                    ref= {ref3}
                    variants= {SectionVariants}
                    initial= 'hidden'
                    animate= {control3}
                >
                    <SectionItem variants={SectionItemVariants}>
                        <ItemContainer>
                            <SectionTitle> Durable Heating Units </SectionTitle>

                            <SectionText>
                                Get in touch with us for top-quality heating products and installation services. Our team will visit your home or office and provide you with all the HVAC services you need.
                            </SectionText>
                        </ItemContainer>
                    </SectionItem>

                    <SectionItem variants={SectionItemVariants}>
                        <SectionImage src={Heat3} />
                    </SectionItem>
                </Section>
                
            </Body>

    </Container>
    )
}

export default Heating
