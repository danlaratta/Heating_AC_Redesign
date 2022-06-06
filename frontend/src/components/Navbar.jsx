import React from 'react'
import styled from 'styled-components'


const NavContainer = styled.div`
    width: 100%;
    padding: 5rem;
`

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const NavSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`

const LogoContainer = styled.div`
    
`

const Logo = styled.span`
    color: var(--blue);
    font-size: 3rem;

`

const NavItems = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const NavLink = styled.li`
    color: var(--blue);
    font-size: 2.3rem;
`

const MobileNav = styled.div`
    
`



const Navbar = () => {
    return(
        <NavContainer>
            <Nav>
                <NavSection>
                    <LogoContainer>
                        <Logo> Mills Heating & AC </Logo>
                    </LogoContainer>
                </NavSection>

                <NavSection>
                    <NavItems>
                        <NavLink> Heating </NavLink>
                        <NavLink> Air Conditioning </NavLink>
                        <NavLink> Service </NavLink>
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