import React from 'react'
import styled  from 'styled-components'
import { BsStarFill } from "react-icons/bs"
import ReviewData from '../Data/ReviewsArray'


// Styled Components
const CardContainer = styled.div`
    width: 15%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    border: 0.3rem solid black;
    padding: 2rem;
    background-color: var(--blue);
    border-radius: 1.5rem;

    &:hover{
        border: 0.4rem solid var(--gold);
        box-shadow: -.5rem 1rem 1rem #999999;
        border-radius: 1.5rem;
    }
`

const CardItem = styled.div` `

const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    margin-bottom: 2rem;
    border-bottom: 0.05rem solid #fff;
`

const Name = styled.h2`
    font-size: 2.5rem;
    font-family: 'Lato', sans-serif;
    color: #fff;
    padding-bottom: 1rem;
`

const Stars = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-evenly;
`

const StarsItem = styled.div`
    font-size: 1.6rem;
    color: var(--gold);
`

const BottomCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
`

const Review = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 2.4rem;
    font-family: 'Lato', sans-serif;
    color: #fff;

`

const ReviewsCard = () => {
    const starCount = 5

    return (
        <>
            {ReviewData.map((data, key) => 
                <CardContainer>
                    <CardItem>
                        <TopCard>
                            <Name> {data.name} </Name>

                            <Stars>
                                {[...Array(starCount)].map(() => 
                                    <StarsItem> <BsStarFill /> </StarsItem>
                                )}
                            </Stars>
                        </TopCard>
                    </CardItem>

                    <CardItem>
                        <BottomCard>
                            <Review> {data.review} </Review>
                        </BottomCard>
                    </CardItem>
                </CardContainer>
            )}
            
        </>
    )
}

export default ReviewsCard