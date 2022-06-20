import React from 'react'
import styled  from 'styled-components'
import { BsStarFill } from "react-icons/bs"
import ReviewData from '../Data/ReviewsArray'

const CardContainer = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    border: 0.3rem solid black;
    padding: 2rem;
    background-color: var(--blue);
`

const CardItem = styled.div` `

const TopCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    margin-bottom: 2rem;
    border-bottom: 0.05rem solid #fff;
`

const Name = styled.h2`
    font-size: 2.3rem;
    font-family: 'Lato', sans-serif;
    color: #fff;
`

const Stars = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
`

const StarsItem = styled.div`
    font-size: 1.5rem;
    color: var(--gold);
`

const Review = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2.3rem;
    font-family: 'Lato', sans-serif;
    color: #fff;

`

const ReviewsCard = () => {
        const starCount = 5
        


    return (
        <CardContainer>
            <CardItem>
                <TopCard>
                    <Name> John Martin </Name>

                    <Stars>
                        {[...Array(starCount)].map((elem, index) => 
                            <StarsItem> <BsStarFill /> </StarsItem>
                        )}
                    </Stars>
                </TopCard>
            </CardItem>

            <CardItem>
                <Review>
                    Harry and Robin run the office with extreme professionalism and efficiency. I have been dealing with this organization for the past 4+ years. Their technicians in the field are Top-Notch and Mike is knowledgeable courteous prompt and a pleasure to deal with. I would highly recommend for all of your HVAC needs.
                </Review>
            </CardItem>
        </CardContainer>
    )
}

export default ReviewsCard