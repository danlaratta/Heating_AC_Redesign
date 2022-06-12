import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaGooglePlus } from "react-icons/fa"

const Container = styled.div`
    width: 100%;
    background-color: var(--blue);
    padding: 4rem;
`

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`

const FooterSocial = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const Logo = styled(NavLink)`
    color: #fff;
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    padding-bottom: 2rem;

    &:hover{
        cursor: pointer;
    }
`

const SocialContainer = styled.span`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const SocialItem = styled.span`
    color: #fff;
    font-size: 3.2rem;

    &:hover{
        transform: scale(1.3);
        cursor: pointer;
        color: var(--gold);
    }
`

const TwitterIcon = styled(AiFillTwitterCircle)`
    font-size: 3.8rem;
`

const SocialLink = styled.span`
    
`

const FooterInfo = styled.span`
    width: 85%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`

const FooterItem = styled.div`
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

const DetailMsg = styled.span`
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    display: inline-block;
`

const ServiceLinks = styled(NavLink)`
    color: #fff;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
`




const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <FooterSocial>
                    <Logo to='/'> Mills Heating & AC </Logo>

                    <SocialContainer>
                        <SocialItem> <SocialLink to='/'> <FaFacebook /> </SocialLink>  </SocialItem>
                        <SocialItem> <SocialLink to='/'> <TwitterIcon /> </SocialLink> </SocialItem>
                        <SocialItem> <SocialLink to='/'> <FaGooglePlus /> </SocialLink> </SocialItem>
                    </SocialContainer>
                </FooterSocial>

                <FooterInfo>
                    <FooterItem>
                        <ItemContainer>
                            <Title> Contact </Title>

                            <FooterDetail>
                                <DetailItem> <DetailText> (732) 854-0900 </DetailText> </DetailItem>
                                <DetailItem> <DetailText> info@millsheatandair.com </DetailText> </DetailItem>
                                <DetailItem> <DetailText> 1813 Route 35 North <br/> Ortley Beach, NJ 08751 </DetailText>  </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>

                    <FooterItem>
                        <ItemContainer>
                            <Title> Services </Title>

                            <FooterDetail>
                                <DetailItem> <ServiceLinks to='/Heating'> Heating  </ServiceLinks> </DetailItem>
                                <DetailItem> <ServiceLinks to='/Air_Conditioning'> Air Conditioning  </ServiceLinks> </DetailItem>
                                <DetailItem> <ServiceLinks to='/Services'> Services </ServiceLinks> </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>

                    <FooterItem>
                        <ItemContainer>
                        <Title> Service Hours </Title>


                            <FooterDetail>
                                <DetailItem> <DetailText> Mon-Fri: 7am - 4pm </DetailText>  </DetailItem>
                                <DetailItem> <DetailText> Sat-Sun: Appointment Only </DetailText> </DetailItem>
                            </FooterDetail>
                        </ItemContainer>
                    </FooterItem>

                    <FooterItem>
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