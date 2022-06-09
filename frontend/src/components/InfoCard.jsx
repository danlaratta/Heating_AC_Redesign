import React from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import Info1 from '../images/info1.jpg'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    /* border: .3rem solid #eaeaea; */
    /* box-shadow: -.5rem 1rem 1rem #bdbcbc;
    border-radius: 1rem; */
`

const CardItem = styled.div`
    
`

const ImageOverlay = styled.div`
    
`

const InfoImage = styled.img`
    width: 100%;
`

const InfoText = styled.div`
    padding: 1.8rem;
`

const Title = styled.h1`
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 2.6rem;
    font-weight: 800;
    padding-bottom: 1rem;
`

const Desc = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
`

const InfoCard = () => {
    return (
        <Container>
            <Card>
                <CardItem>
                    <ImageOverlay> 

                    </ImageOverlay>

                    <InfoImage src={Info1} /> 
                </CardItem>

                <CardItem>
                    <InfoText>
                        <Title> HVAC Services and Products </Title>

                        <Desc> Whether you want to get your existing HVAC system repaired or a new one installed, contact Mills Heating & Air Conditioning. We have all the products and services to keep your home comfortable. </Desc>
                    </InfoText>
                </CardItem>
            </Card>
        </Container>
    )
}

export default InfoCard