import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Styled Components
const NavContainer = styled.div`
    width: 100%;
    padding: 5rem;
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

const Logo = styled.span`
    color: #fff;
    font-size: 3rem;
    font-family: 'Lato', sans-serif;
`

const NavItems = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const NavLink = styled.li`
    color: #fff;
    font-size: 2.3rem;
    font-family: 'Lato', sans-serif;
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
                    <LogoContainer>
                        <Logo> Mills Heating & AC </Logo>
                    </LogoContainer>
                </NavSection>

                <NavSection
                    variants= { NavVariant }
                >
                    <NavItems>
                        <NavLink> Heating </NavLink>
                        <NavLink> Air Conditioning </NavLink>
                        <NavLink> Services </NavLink>
                        <NavLink> Contact Us </NavLink>
                    </NavItems>
                </NavSection>
            </Nav>

            <MobileNav>

            </MobileNav>
        </NavContainer>
    )
}

export default Navbar