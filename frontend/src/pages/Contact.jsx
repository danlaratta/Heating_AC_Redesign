import React, { useEffect } from 'react'
import styled  from 'styled-components'
import { motion } from 'framer-motion'
import FormSchema from '../Data/FormSchema'


// Styled Components
const Container = styled.div`
    width: 100%;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-bottom: 3rem;
    color: var(--blue);
`

const Contact = () => {
    return (
        <Container>
            <FormContainer>
                <Title> Contact Us Today </Title>

                <Form>

                </Form>
            </FormContainer>
        </Container>
    )
}

export default Contact