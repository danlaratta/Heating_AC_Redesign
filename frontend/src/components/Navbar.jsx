import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


// Styled Components
const NavContainer = styled.div`
    width: 100%;
    z-index: 3;
    position: fixed;
    padding: 2rem;
    background-color: var(--blue);
    
`

const Nav = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavSection = styled(motion.div)`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`

const LogoContainer = styled(motion.div)` `

const Logo = styled(NavLink)`
    color: var(--gold);
    font-size: 3rem;
    font-family: 'Lato', sans-serif;
    text-decoration: none;

    &:hover{
        cursor: pointer;
    }
`

const NavItems = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const LinkContainer = styled(motion.span)` `

const NavLinks = styled(NavLink)`
    /* color:  ${props => props.isActive ? 'var(--gold)' : '#fff'}; */
    color: #fff;
    font-size: 2.3rem;
    font-family: 'Lato', sans-serif;
    text-decoration: none;

    &.active {
        color: var(--gold);
    }

    &:hover{
        color: var(--gold);
        cursor: pointer;
        transform: scale(1.1);
    }
`


const MobileNav = styled.div`
    
`

// Variants

const NavVariant = {
    hidden: {
        y: -100,
        opacity: 0,
    },

    show: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 1,
            staggerChildren: .5,
        }
    }
}

const LinkVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.4,
            yoyo: Infinity
        }
    }
}

const Navbar = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    

    return(
        <NavContainer>
            <Nav
                variants= { NavVariant }
                initial= 'hidden'
                animate= 'show'
            >
                <NavSection
                    variants= { NavVariant }
                >
                    <LogoContainer variants= {LinkVariants} whileHover= 'hover'>
                        <Logo to='/'> Mills Heating & AC </Logo>
                    </LogoContainer>
                </NavSection>

                <NavSection
                    variants= { NavVariant }
                >
                    <NavItems>
                        <LinkContainer variants= {LinkVariants} whileHover= 'hover'> <NavLinks to='/Heating' onClick={scrollToTop}> Heating </NavLinks> </LinkContainer>
                        <LinkContainer variants= {LinkVariants} whileHover= 'hover'> <NavLinks to='/Air_Conditioning' onClick={scrollToTop}> Air Conditioning  </NavLinks> </LinkContainer>
                        <LinkContainer variants= {LinkVariants} whileHover= 'hover'> <NavLinks to='/Services' onClick={scrollToTop}> Services </NavLinks> </LinkContainer>
                        <LinkContainer variants= {LinkVariants} whileHover= 'hover'> <NavLinks to='/Contact' onClick={scrollToTop}> Contact Us  </NavLinks> </LinkContainer>
                    </NavItems>
                </NavSection>
            </Nav>

            <MobileNav>

            </MobileNav>
        </NavContainer>
    )
}

export default Navbar