import styled from "styled-components";


export const MainContainer = styled.section`
    width:100%;
    min-height: 500px;
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin-top:3rem;
`
export const Container = styled.div`
    width:100%;
    min-height: 500px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding-top:40px;
`
 export const A1 = styled.h5`
    display:flex;
    justify-items:start;
    width: 100%;
    height:0;
    color:#F3F3F4;
    font-size:1em;
    font-family:'lexend';
    font-weight:500;
    padding-left:5%;
    margin:10px;
 `

 export const Name = styled.h1`
    @media (max-width:768px){
        overflow-x:hidden;
    }
    width:100%;
    height:auto;
    padding-left: 5%;
    font-size: 6em;
    font-weight: 600;
    font-family:'lexend';

    background-image: linear-gradient(89.81deg, #ECA72C -1.72%, #3772ff 64.05%, #F3F3F4 80.78%);
    -webkit-background-clip: text;
    color: transparent;
    overflow: hidden;
    border-right: .15em solid white;
    white-space: nowrap;
    margin: 0 auto;
    animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

    @keyframes typing{
    from { width: 0 }
        to { width: 100% }
    }
    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent; }
}
`
 export const Me = styled.img`
    width:auto;
    height:auto;
    @media (max-width:768px){
        display:none;
    }
 `

 export const Preview = styled.p`
    width: 100%;
    padding-left:5%;
    @media (max-width:768px){
     width:70%;
     padding-left:10%;
    }
    height: auto;
    font-size: 1.125em;
    font-weight: 400;
    font-family:'montserrat';
    line-height: 1.5rem;
    color: #f3f3f4;
    text-align: justify;
 `