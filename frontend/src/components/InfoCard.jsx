import React from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import Info1 from '../images/info1.jpg'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: red;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    border: .2rem solid black;
`

const CardItem = styled.div`
    
`

const ImageOverlay = styled.div`
    
`

const InfoImage = styled.img`
    width: 100%;
`

const InfoText = styled.div`
    
`

const Title = styled.h1`
    
`

const Desc = styled.p`
    
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