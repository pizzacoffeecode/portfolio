import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../Section/Section'
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
    return (
        <Section id='section4'>
            <SectionDivider />
            <SectionTitle main>Contact</SectionTitle>
            <div className='contact__container'>
                <a href="mailto:davidroberts.developer@gmail.com" className='icon__container'>
                    <AiFillMail size="5rem" />
                    { "E-Mail" }
                </a>
                <a href="tel:314-343-3432" className='icon__container'>
                    <AiFillPhone size="5rem" />
                    +1 267-428-9187
                </a>
                <a href="https://discord.gg/VNA7z9Fd3b" className='icon__container'>
                    <FaDiscord size="5rem" />
                    Discord
                </a>

            </div>
        </Section>
    )
}

export default Contact