 import React from 'react'
 import { 
  GridContainer,
  Featured,
  IMGMe,
  Title, 
  Verse, 
  Center, 
  Project, 
  Build, 
  Course,
  Nschool,
  Tschool,
  Lschool,
  Center1} 
  from './style/Projects.style.js';
 import IMG1 from './assets/IMG_0575.png' 
 import IMG2 from './assets/IMG_0588.png'
 import IMG3 from './assets/IMG_0589.png'
 import IMG4 from './assets/IMG_0590.png'
 import IMG5 from './assets/IMG_0591.png'
 import { Wrap, WrapItem } from '@chakra-ui/react'

 function Projects() {
   return (
    <>
    <Project></Project>
    <Featured>
         Projetos Feitos
    </Featured>
    <GridContainer>
     <Wrap spacing='30px'>
  <WrapItem>
    <Center w='100%' h='80px'>
    <a href='https://inglesqueconvence.com.br/'>
        <IMGMe src={IMG1}></IMGMe>
        <Title>Inglês que Convence</Title>
            <Verse>Feito para escola de inglês qual usa site para criação de leads. UX feita e pensada por mim com auxílio de um amigo da área. UI criada por uma designer</Verse>
            <Build>Wordpress | Elementor Page-Builder</Build>
    </a>
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='100%' h='80px'>
    <a href='https://github.com/anthonymanoel/portfolio-React'>
        <IMGMe src={IMG2}></IMGMe>
        <Title>Este Projeto</Title>
            <Verse>Portfolio para uso próprio</Verse>
            <Build>React | Styled-Components | Chakra UI</Build>
    </a>
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='100%' h='80px'>
    <a href='https://github.com/anthonymanoel/seletiveProcess'>
        <IMGMe src={IMG3}></IMGMe>
        <Title>Página de Login</Title>
            <Verse>Página de Login, com autenticação e encriptação de senha, novos usuários são enviado ao banco de Dados</Verse>
            <Build>React | NodeJS | Bcrypt | MYsql | SQLWorkbench</Build>
    </a>
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='100%' h='80px'>
    <a href='#'>
        <IMGMe src={IMG4}></IMGMe>
        <Title>Página ADM para adição, edição de produtos</Title>
            <Verse>EM BREVE.</Verse>
            <Build>React | NodeJS | Chakra UI | MYsql | SQLWorkbench | Styled-Components</Build>
    </a>
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='100%' h='80px'>
    <a href='#'>
        <IMGMe src={IMG5}></IMGMe>
        <Title>Idealização Página. 
            Faculdade de Teologia com Informações Eclesiásticas.
        </Title>
            <Verse>EM BREVE.</Verse>
            <Build>React | Styled-Components | NodeJS | Chakra UI | MYsql | SQLWorkbench</Build>
    </a>
    </Center>
  </WrapItem>
</Wrap>
    </GridContainer>

    <Featured>
      Education
    </Featured>
    <GridContainer>
     <Wrap spacing='30px'>
  <WrapItem>
    <Center1 w='100%' h='900px'>
      <Course>
        <Nschool>Universidade Estácio de Sá</Nschool>
        <Tschool>Julho 2022 - Dezembro 2024</Tschool>
      </Course>
      <Lschool>Brasil</Lschool>
      <Verse>Tecnólogo em Análise e Desenvolvimento de Sistemas</Verse>
    </Center1>
  </WrapItem>
  <WrapItem>
    <Center1 w='100%' h='900px'>
      <Course>
        <Nschool>COD3R Cursos</Nschool>
        <Tschool>100h</Tschool>
      </Course>
      <Lschool>Brasil</Lschool>
      <Verse>Certificado Desenvolvedor-Web com foco em aplicações Javascript | Bancos Relacionais e Não Relacionais</Verse>
    </Center1>
  </WrapItem>
  <WrapItem>
    <Center1 w='100%' h='900px'>
      <Course>
        <Nschool>SENAI Sorocaba</Nschool>
        <Tschool>Agosto 2021 - Dezembro 2021</Tschool>
      </Course>
      <Lschool>Brasil</Lschool>
      <Verse>Certificado Desenvolvedor-Web</Verse>
    </Center1>
  </WrapItem>
  </Wrap>
  </GridContainer>
    </>
   )
 }

 export default Projects