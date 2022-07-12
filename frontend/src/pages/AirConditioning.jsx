import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LandingImg from '../images/ac_landing.webp'
import AC1 from '../images/ac1.webp'
import AC2 from '../images/ac2.jpg'
import AC3 from '../images/ac3.jpg'


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
    background-position: center;
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
            duration: 0.5, 
            delay: 1.5,
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



const AirConditioning = () => {

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
                    > Air Conditioning </Title>

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
                            <SectionTitle> Air Conditioning Systems </SectionTitle>

                            <SectionText>
                                Keep your home cool and comfortable with top-quality air conditioning units from Mills Heating & Air Conditioning. From air conditioners to air cleaners, we have everything to improve your home's indoor air quality. 
                            </SectionText>
                        </ItemContainer>
                    </SectionItem>

                    <SectionItem>
                        <SectionImage src={AC1} />
                    </SectionItem>
                </Section>

                <BlueBackground>
                    <Section>
                        <SectionItem>
                            <SectionImage src={AC2} />
                        </SectionItem>

                        <SectionItem>
                            <ItemContainer>
                                <GoldTitle> High-Quality Services </GoldTitle>

                                <WhiteText>
                                    Whether you need air conditioners for your new construction or want to improve your home's indoor air quality, our team will travel to your home or office and provide you with the necessary services
                                </WhiteText>
                            </ItemContainer>
                        </SectionItem>
                    </Section>
                </BlueBackground>

                <Section>
                    <SectionItem>
                        <ItemContainer>
                            <SectionTitle> Top-Quality Air Conditioning Products </SectionTitle>

                            <SectionText>
                                Our air conditioning units are energy efficient, and affordable. Your satisfaction is our priority. You can always rely on us for the highest quality cooling products and installation services.
                            </SectionText>
                        </ItemContainer>
                    </SectionItem>

                    <SectionItem>
                        <SectionImage src={AC3} />
                    </SectionItem>
                </Section>
                
            </Body>

    </Container>
    )
}

export default AirConditioning