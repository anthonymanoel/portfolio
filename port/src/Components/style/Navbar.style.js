import { Link } from "react-router-dom";
import styled from "styled-components"

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 100%;
    background-color: #000;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    padding-top:30px;
`;
export const Logo = styled(Link)`
    font-family:'poppins';
    font-size:2.5rem;
    font-weight: 700;
    color: #ECA72C;
    text-decoration:none;
    padding-right: 5rem;
    &:hover{
        color:#ECB74C
    }
`;
export const RightContent = styled.div`
    width:100%;
    height:100%;
`;
export const Links = styled(Link)`
    margin:0.85em;
    font-family:'Montserrat';
    font-size:1em;
    font-weight: 600;
    font-style:inherit;
    color: #F3F3F4;
    text-decoration:none;
    &:hover,
    &:focus{
        color: #c4c4c4 ;
    }
    @media (max-width:768px){
        display:none
    }
`;
export const LinksExtended = styled(Link)`
    margin:15px;
    font-family:'poppins';
    font-size:1em;
    font-weight: 500;
    font-style:italic;
    color: #F3F3F4;
    text-decoration:none;
`;
export const OpenLinksBtn = styled.button`
    width: 12vw;
    height: 8vh;
    background:none;
    border:none;
    color: #F3F3F4;
    font-size: 2.5em;
    cursor:pointer;
    @media (min-width:768px){
        display:none;
    }
`;
export const NavConstBtn = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items: center;
    @media (min-width:768px){
        display:none;
    }
`