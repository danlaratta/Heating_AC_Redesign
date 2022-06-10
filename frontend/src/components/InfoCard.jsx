import React from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'



const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    /* border: .3rem solid #eaeaea;
    box-shadow: -.5rem 1rem 1.4rem #bdbcbc;
    border-radius: 1rem; */
`

const CardItem = styled.div` `

const ImageOverlay = styled.div`
    border-radius: 1rem;
`

const InfoImage = styled.img`
    width: 100%;
    /* border-radius: 1rem 1rem 0rem 0rem; */
`

const InfoText = styled.div`
    padding: 2.5rem 2rem;
`

const Title = styled.h1`
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 2.6rem;
    font-weight: 800;
    color: var(--blue);
    padding-bottom: 1rem;
`

const Desc = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    line-height: 2.5rem;
`

const InfoCard = ({ infoImg, infoTitle, infoDesc }) => {
    return (
        <Card>
            <CardItem>
                <ImageOverlay> 

                </ImageOverlay>

                <InfoImage src={ infoImg } /> 
            </CardItem>

            <CardItem>
                <InfoText>
                    <Title> { infoTitle } </Title>

                    <Desc> { infoDesc } </Desc>
                </InfoText>
            </CardItem>
        </Card>
    )
}

export default InfoCard