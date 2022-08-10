import React from 'react'
 import {  
    FaLinkedinIn,
    FaGithub,
    FaInstagramSquare,
    FaMailBulk,
 } from "react-icons/fa";
import {
    BtnContainer,
    BtnUl,
    BtnLi
  } from "./style/contact.style.js";
import "./style/Contact.css"

function Contact() {
 return (
<>
    <BtnContainer>
        <BtnUl>
            <BtnLi>
                <a href='https://github.com/anthonymanoel' aria-label='Github'>
                    <FaGithub className='FA'></FaGithub>
                </a>
            </BtnLi>
            <BtnLi>
                <a href='https://www.linkedin.com/in/anthonymanoel/' aria-label='Linkedin'>
                    <FaLinkedinIn className='FA'></FaLinkedinIn>
                </a>
            </BtnLi>
            <BtnLi>
                <a href='https://www.instagram.com/_anthonymanoel__/' aria-label='Instagram'>
                    <FaInstagramSquare className='FA'></FaInstagramSquare>
                </a>
            </BtnLi>
            <BtnLi>
                <a href='mailto:anthonymanoel12@gmail.com' aria-label='Email'>
                    <FaMailBulk className='FA'></FaMailBulk>
                </a>
            </BtnLi>
        </BtnUl>
    </BtnContainer>
</>
  )
}

export default Contact