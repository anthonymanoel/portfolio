 import styled from "styled-components";
 import { Link } from "react-router-dom";

 export const GridContainer = styled.section`
     width:100%;
     height:auto;
     display:flex;
     justify-content:center;
 `
 export const Center = styled.div`
    margin:50px;
    width:400px;
    @media (max-width:768px){
        margin:20px
    }
 `
 export const Center1 = styled.div`
    margin:50px;
    width:100%;
    @media (max-width:768px){
        margin:20px
    }
 `
 export const Featured = styled.span`
     font-size:1.5rem;
     font-weight:600;
     font-family:'lexend';
     color: #f3f3f4;
     padding:3%;
 `
 export const IMGMe = styled.img`
     width: auto;
     height:auto;
    display:inline;

    &.grow {
        transition: all .2s ease-in-out;
    }
        &:hover {
          transform: scale(1.13);
        }
 `
export const Project = styled.span`
width: auto;
height:auto;
`
 export const Title = styled.h2`
     font-size:1.5em;
     font-family:'montserrat';
     font-weight: 700;
     color: #f3f3f4;
     padding-left:3%;
     &:hover{
        color: #eca72c;
     }
 `

 export const Verse = styled.p`
     font-size:1em;
     font-family:'montserrat';
     font-weight: 500;
     color: #f3f3f4;
     padding-left:3%;
     width:100%;
     &.grow {
        transition: all .2s ease-in-out;
    }
        &:hover {
          transform: scale(1.13);
        }
     &:hover{
        color: #eca72c;
     }
 `
 export const Build = styled.span`
    font-size:1em;
    font-family:'montserrat';
    font-weight: 400;
    color: #3994ee;
    padding-left:3%;
    &:hover{
       color: #3772ff;
    }
 `
export const Course = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    height:auto;
`
export const Nschool = styled.h2`
    font-size:2em;
    font-family:'montserrat';
    font-weight: 600;
    color: #eca72c;
    padding-left:3%;
    width:80%;
`
export const Tschool = styled.h5`
    font-size:0.8em;
    font-family:'montserrat';
    font-weight: 500;
    color: #f3f3f4;
    width:20%;
    margin-top:30px;
`
export const Lschool = styled.p`
    font-size:1em;
    font-family:'montserrat';
    font-weight: 400;
    color: #3994ee;
    padding-left:3%;
    &:hover{
       color: #3772ff;
    }
`
