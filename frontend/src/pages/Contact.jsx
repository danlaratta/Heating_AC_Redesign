import React, { useState } from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import LandingImg from '../images/services-landing.jpg'
import FormSchema from '../Data/FormSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


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
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
`

const Body = styled.div`
    width: 100%;
`

const Section = styled.div`
    width: 100%;
    padding-top: 3rem;
`

const InfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`

const InfoItems = styled.div`
    width: 50%;
    display: flex;
    padding: 1rem 0rem;
`

const InfoSections = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InfoTitle = styled.h2`
    font-size: 2.8rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-bottom: 1rem;
    
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const InfoText = styled.span`
    width: 100%;
    font-size: 1.8rem;
    font-family: 'Lato', sans-serif;
    padding-bottom: 0.5rem;
`

const Bold = styled.span`
    font-weight: 700;
    padding-right: 0.5rem;
`

const SmallerText = styled.div`
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
`

const Map = styled.div`
    width: 100%;
    padding-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0rem;
`

const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Inputs = styled.input`
    width: 50%;
    height: 4.5rem;
    font-size: 2rem;
    border: 0.2rem solid #e1e1e1;
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 1.5rem;
`

const ErrorMessage = styled.span`
    color: red;
`

const SubmitBtn = styled(motion.input)`
    width: 10%;
    margin-top: 1rem;
    padding: 1.2rem 0rem;
    background-color: var(--gold);
    color: var(--blue);
    border-radius: 0.5rem;
    border: none;
    font-size: 2rem;
    font-family: 'Lato', sans-serif;

    &:hover{
        cursor: pointer;
        background-color: var(--blue);
        color: var(--gold);
    }
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

const SubmitVariant = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.4,
            yoyo: Infinity
        }
    }
}




const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormSchema)
    })

    const submitForm = (data) => {
        console.log(data)
    }
    
    return (
        <Container>
            <OverlayContainer>
                <Overlay>
                    <Title
                        variants= {TitleVariant}
                        initial= 'hidden'
                        animate= 'show'
                    > Contact Us Today </Title>

                </Overlay>
            </OverlayContainer>

            <LandingImage> </LandingImage>

            <Body>
                <Section>
                    <InfoContainer>
                        <InfoItems>
                            <InfoSections>
                                <TextContainer>
                                    <InfoTitle> Service Hours </InfoTitle>
                                    <InfoText> <Bold> Mon - Fri </Bold> 7:00am - 4:00pm </InfoText>
                                    <InfoText> <Bold> Sat-Sun </Bold> Appointment Only
                                                <SmallerText> (Summer and Winter seasons for emergency services) </SmallerText>
                                    </InfoText>
                                </TextContainer>
                            </InfoSections>
                        </InfoItems>

                        <InfoItems>
                            <InfoSections>
                                <TextContainer>
                                    <InfoTitle> Office Hours </InfoTitle>
                                    <InfoText> <Bold> Mon - Fri </Bold> 8:00am - 4:30pm  </InfoText>
                                    <InfoText> <Bold> Sat-Sun </Bold> Appointment Only
                                                <SmallerText> (Summer and Winter seasons for emergency services) </SmallerText>
                                    </InfoText> 

                                </TextContainer>
                            </InfoSections>
                        </InfoItems>
                    </InfoContainer>

                    <Map> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4694095958985!2d-74.07417358461818!3d39.953256579421605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19a4a3d1e9267%3A0x5f646011d02ed3dd!2sMills%20Heating%20%26%20Air%20Conditioning!5e0!3m2!1sen!2sus!4v1657822333825!5m2!1sen!2sus"  
                        style={{border:0, width: "40%", height: "30rem"}} 
                        title="Map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    </Map>
                </Section>

                <Form>
                    <InputsContainer>
                        <Inputs 
                            type="text"
                            placeholder="First Name..."
                            { ...register('firstName')}
                        />
                        { errors.firstName && <ErrorMessage> {errors.firstName.message} </ErrorMessage> }

                        <Inputs 
                            type="text"
                            placeholder="Last Name..."
                            { ...register('lastName')}
                        />
                        { errors.lastName && <ErrorMessage> {errors.lastName.message} </ErrorMessage> }

                        <Inputs 
                            type="text"
                            placeholder="Email..."
                            { ...register('email')}
                        />
                        { errors.email && <ErrorMessage> {errors.email.message} </ErrorMessage> }

                        <Inputs 
                            type="text"
                            placeholder="Phone..."
                            { ...register('phone')}
                        />
                        { errors.phone && <ErrorMessage> {errors.phone.message} </ErrorMessage> }

                        <SubmitBtn type="submit" id="submit" value="Submit"
                              variants= {SubmitVariant}
                              whileHover= 'hover'
                        />

                    </InputsContainer>
                </Form>
            </Body>
        </Container>
    )
}

export default Contact


