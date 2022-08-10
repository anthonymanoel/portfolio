import React from 'react'
import {
    MainContainer, 
    Container,
    A1,
    Name,
    Me,
    Preview,
 } from "./style/MainContent.style";
import IMGme from './assets/IMG_0584.png'


function MainContent() {
  return (
    <MainContainer>
    <Container>
        <A1>
            Olá, Eu sou o
        </A1>
            <Name>
                Anthony Manoel
            </Name>
        <Preview>
        Sou desenvolvedor residente de Sorocaba - São Paulo, Brasil. E também estudante de Análise e Desenvolvimento de Sistemas. Fui freelancer e contruibuinte de projetos Open-Source durante um ano, juntando experiência e conhecimento para os próximos projetos e desafios que virão.
        </Preview>
    </Container>
    <div>
        <Me src={IMGme}>
        </Me>
    </div>
    </MainContainer>
  )
}

export default MainContent