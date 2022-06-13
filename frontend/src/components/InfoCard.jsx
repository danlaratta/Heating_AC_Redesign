import React from 'react'
import styled  from 'styled-components'
import { NavLink } from 'react-router-dom'



const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;

    &:hover{
        /* border: .3rem solid #eaeaea; */
        box-shadow: -.5rem 1rem 1.4rem #bdbcbc;
        border-radius: 1rem;
    }
    
`

const CardItem = styled.div` 
    position: relative;
`

const ImageOverlay = styled(NavLink)`
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 99%;

    &:hover{
        opacity: 1;
        background-color: var(--blueOverlay);
        /* background-color: rgba(0, 0, 0, 0.7); */
        border-radius: 1rem 1rem 0rem 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

const OverlayText = styled.span`
    font-size: 3rem;
    color: #fff;
    font-family: 'Lato', sans-serif;
`

const InfoImage = styled.img`
    width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
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

const InfoCard = ({ infoImg, linkText, linkPath, infoTitle, infoDesc }) => {
    return (
        <Card>
            <CardItem>
                <InfoImage src={ infoImg } />

                <ImageOverlay to={linkPath} whileHover={'hover'}> 
                    <OverlayText> { linkText } </OverlayText>
                </ImageOverlay>
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