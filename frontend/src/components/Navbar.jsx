import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// Styled Components
const NavContainer = styled.div`
    width: 100%;
    z-index: 3;
    position: fixed;
    padding: 2rem;
    background-color: ${props => props.bgColor ? 'var(--fadedBlue)' : 'rgba(0, 0, 0, 0)'};
    
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

const LogoContainer = styled.div`
    
`

const Logo = styled(Link)`
    color: #fff;
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

const NavLink = styled(motion.a)`
    color: #fff;
    font-size: 2.3rem;
    font-family: 'Lato', sans-serif;
    text-decoration: none;

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

const Navbar = () => {

    // State Variables
    const [ navBg, setNavBg] = useState(false)

    // Functions
    const changeNavBG = () => {
        if(window.scrollY >= 80){
            setNavBg(true)
        }
        else{
            setNavBg(false)
        }
    }

    // Event Listeners
    window.addEventListener('scroll', changeNavBG)

    return(
        <NavContainer bgColor={navBg}>
            <Nav
                variants= { NavVariant }
                initial= 'hidden'
                animate= 'show'
            >
                <NavSection
                    variants= { NavVariant }
                >
                    <LogoContainer>
                        <Logo to='/'> Mills Heating & AC </Logo>
                    </LogoContainer>
                </NavSection>

                <NavSection
                    variants= { NavVariant }
                >
                    <NavItems>
                        <NavLink to='/Heating'> Heating </NavLink>
                        <NavLink to='/Air_Conditioning'> Air Conditioning </NavLink>
                        <NavLink to='/Services'> Services </NavLink>
                        <NavLink to='/Contact'> Contact Us </NavLink>
                    </NavItems>
                </NavSection>
            </Nav>

            <MobileNav>

            </MobileNav>
        </NavContainer>
    )
}

export default Navbar