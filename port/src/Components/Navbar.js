import React, {useState} from "react"
import { NavbarContainer,
        RightContent,
        Logo,
        Links,
        OpenLinksBtn,
        NavConstBtn,
        LinksExtended,
} from "./style/Navbar.style";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);


  return (
    <Router>
    <NavbarContainer extendNavbar={extendNavbar}>
        <div className='logoContent'>
        <Logo to="/">AM</Logo>
        </div>
        <div className='liStyle'>
        <RightContent>
            <Links to="Project">Projects</Links>
            <Links to="/Resume">Resume</Links>
            <Links to="/Contact">Contact</Links>
            <OpenLinksBtn
                onClick={() => {
                    setExtendNavbar((curr) => !curr);
                }}
            > {extendNavbar ? <>&#10005;</> : <> &#8801;</>} </OpenLinksBtn>
        </RightContent>
        {extendNavbar && (
        <NavConstBtn>
            <LinksExtended to="Project">Projects</LinksExtended>
            <LinksExtended to="/Resume">Resume</LinksExtended>
            <LinksExtended to="/Contact">Contact</LinksExtended>
        </NavConstBtn>
        )}
        </div>
    </NavbarContainer>
        <Routes>
        <Route path='/'/>
        <Route path='#Contact' />
        <Route path='#Resume' />
        </Routes>
    </Router>
  )
}

export default Navbar