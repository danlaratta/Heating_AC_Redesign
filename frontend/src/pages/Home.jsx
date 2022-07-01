import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LandingImg from '../images/landing-img.jpg'
import InfoCard from '../components/InfoCard'
import Info1 from '../images/info1.jpg'
import Info2 from '../images/info2.jpg'
import Info3 from '../images/info3.jpg'
import AboutSection from '../components/AboutSection'
import ReviewsCard from '../components/ReviewsCard'


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

const Body = styled.div`
    width: 100%;
    padding: 6rem 0rem;
`

const InfoContainer = styled.div`
    width: 100%;
`

const CardSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15rem 0rem;
`

const CardsContainer = styled(motion.div)`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    padding-bottom: 5rem;
`

const Cards = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const About = styled.div`
    width: 100%;
    padding: 15rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: var(--blue);
    /* background-color: #f0f0f0; */
`

const ReviewsContainer = styled(motion.div)`
    width: 100%;
    padding: 15rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ReviewItems = styled(motion.div)` `

const ReviewTitle = styled.h1`
    font-size: 4.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    padding-bottom: 7rem;
`

const Reviews = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
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

const CardsContainerVariants = {
    hidden: { opacity: 0 },

    show: {
        opacity: 1,
        transition: { staggerChildren: 0.8 }
    } 
}

const CardsVariants = {
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

const ReviewContainerVariants = {
    hidden: { opacity: 0 },

    show: {
        opacity: 1,
        transition: { staggerChildren: 0.8 }
    } 
}

const ReviewItemsVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },

    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, staggerChildren: 0.8 }
    } 
}

const ReviewCardsVariants = {
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



const Home = () => {

    const cardData = [
        {
            infoImg: Info1,
            linkText: 'Heating',
            linkPath: '/Heating',
            infoTitle: 'HVAC Services and Products',
            infoDesc: 'Whether you want to get your existing HVAC system repaired or a new one installed, contact Mills Heating & Air Conditioning. We have all the products and services to keep your home comfortable.'
        },
        {
            infoImg: Info2,
            linkText: 'Air Conditioning',
            linkPath: '/Air_Conditioning',
            infoTitle: 'Heating and Air Services',
            infoDesc: "Mills Heating & Air Conditioning is a privately owned and operated business with 30 years of experience. We're fully licensed and insured. Rely on us for the highest quality HVAC products and services."
        },
        {
            infoImg: Info3,
            linkText: 'Services',
            linkPath: '/Services',
            infoTitle: 'Meeting All Your HVAC Needs',
            infoDesc: "Your satisfaction is our priority. Not only do we install heating or air conditioning unit but also fix any problem that might arise with it. We're an authorized Carrier and Arcoaire HVAC product dealer."
        }
    ]

    const controls = useAnimation()
    const reviewControls = useAnimation()

    const [ref, inView] = useInView()
    const [reviewRef, reviewInView] = useInView()
    
    useEffect(() => {
        if(inView){
            controls.start('show')
        }

        if(reviewInView){
            reviewControls.start('show')
        }

    }, [controls, inView, reviewControls, reviewInView])

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

                    <ServicesLink to='/Services' > Get Serviced </ServicesLink>
                    {/* <ServicesLink to='/Services' variants= { OverlayVariant }> Get Serviced </ServicesLink> */}
                </Overlay>
            </OverlayContainer>

            <LandingImage> </LandingImage>

            <Body>
                <InfoContainer>
                    <CardSection>
                        <CardsContainer
                            variants={ CardsContainerVariants }
                            initial= 'hidden'
                            animate= {controls}
                            ref={ref}
                        >
                            {cardData.map((data, key) => 
                                <Cards variants={ CardsVariants }>
                                    <InfoCard infoImg={data.infoImg} linkText={data.linkText} linkPath={data.linkPath} infoTitle={data.infoTitle} infoDesc={data.infoDesc} />
                                </Cards>
                            )}
                        </CardsContainer>
                    </CardSection>

                    <About>
                        <AboutSection />
                    </About>
                    
                    <ReviewsContainer
                        variants={ ReviewContainerVariants }
                        initial= 'hidden'
                        animate= {reviewControls}
                        ref={reviewRef}
                    >
                        <ReviewItems variants={ ReviewItemsVariants }>
                            <ReviewTitle> Recent Reviews </ReviewTitle>
                        </ReviewItems>

                        <ReviewItems variants={ ReviewItemsVariants }>
                            <Reviews variants={ ReviewCardsVariants }> <ReviewsCard /> </Reviews>
                        </ReviewItems>
                    </ReviewsContainer>

                </InfoContainer>
            </Body>
        </Container>
    )
}

export default Home

