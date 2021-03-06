import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { NavLink } from 'react-router-dom'


// Styled Components
const Container = styled.div`
    width: 100%;
    background-color: var(--blue);
    padding: 4rem;
`

const FooterContainer = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`


const FooterInfo = styled(motion.div)`
    width: 85%;
    padding-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`

const FooterItem = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`

const Title = styled.h1`
    color: var(--gold);
    font-size: 2.6rem;
    font-family: 'Lato', sans-serif;
    padding-bottom: 2rem;
    text-align: left;
`

const FooterDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
`

const DetailItem = styled.div` `

const DetailText = styled.span`
    color: #fff;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
`

const ServiceLinks = styled(NavLink)`
    color: #fff;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    text-decoration: none;

    &:hover{
        color: var(--gold);
    }
`

// Variants
const FooterInfoVariant = {
    hidden: { 
        opacity: 0,
        y: -100, 
    },

    show:{
        opacity: 1,
        y: 0,
        transition: { duration: 1, staggerChildren: 0.5, delayChildren: .8}
    }
}


const Footer = () => {

    const controls = useAnimation()

    const [ref, inView] = useInView()
    
    useEffect(() => {
        if(inView){
            controls.start('show')
        }
    }, [controls, inView])

    return (
        <Container>
            <FooterContainer>
                <FooterInfo
                    variants= { FooterInfoVariant }
                    initial= 'hidden'
                    animate= {controls}
                    ref={ref}
                >
                    <FooterItem variants= { FooterInfoVariant }>
                        <ItemContainer>
                            <Title> Mills Heating & AC </Title>

                            <FooterDetail>
                                <DetailItem> <DetailText> (732) 854-0900 </DetailText> </DetailItem>
                                <DetailItem> <DetailText> info@millsheatandair.com </DetailText> </DetailItem>
                                <DetailItem> <DetailText> 1813 Route 35 North <br/> Ortley Beach, NJ 08751 </DetailText>  </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>

                    <FooterItem variants= { FooterInfoVariant }>
                        <ItemContainer>
                            <Title> Services </Title>

                            <FooterDetail>
                                <DetailItem> <ServiceLinks to='/Heating'> Heating  </ServiceLinks> </DetailItem>
                                <DetailItem> <ServiceLinks to='/Air_Conditioning'> Air Conditioning  </ServiceLinks> </DetailItem>
                                <DetailItem> <ServiceLinks to='/Services'> Services </ServiceLinks> </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>

                    <FooterItem variants= { FooterInfoVariant }>
                        <ItemContainer>
                        <Title> Service Hours </Title>


                            <FooterDetail>
                                <DetailItem> <DetailText> Mon-Fri: 7am - 4pm </DetailText>  </DetailItem>
                                <DetailItem> <DetailText> Sat-Sun: Appointment Only </DetailText> </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>

                    <FooterItem variants= { FooterInfoVariant }>
                        <ItemContainer>
                            <Title> Office Hours </Title>

                            <FooterDetail>
                                <DetailItem> <DetailText> Mon-Fri: 8am - 4:30pm </DetailText>  </DetailItem>
                                <DetailItem> <DetailText> Sat-Sun: Appointment Only </DetailText> </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>
                </FooterInfo>
            </FooterContainer>
        </Container>
    )
}

export default Footer