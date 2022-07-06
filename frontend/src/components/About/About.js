import { useEffect } from 'react';
import { Section, SectionTextFull, SectionTitle, SectionDivider } from '../Section/Section';
import "./About.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
// import { HeaderThree } from './../Unity2/UnityPlayerStyles2';
gsap.registerPlugin(ScrollToPlugin);



const About = () => {
    //GSAP
    useEffect(() => {
        const skillsLink = document.getElementById('skills__link');
        const projectsLink = document.getElementById('projects__link');
        const contactsLink = document.getElementById('contacts__link');

        skillsLink.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section2", offsetY: 90 } });
        });

        projectsLink.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section3", offsetY: 90 } });
        });
        contactsLink.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section4", offsetY: 90 } });
        });
    }, [])
    return (
        <Section nopadding id='section1'>
            <SectionDivider />
            <SectionTitle >
                About Me
            </SectionTitle>
            <SectionTextFull>
                I'm a <i>proudly</i> self-taught, web and mobile application developer.
            </SectionTextFull>
            <SectionTextFull>
                In 2020 I decided to take the leap and leave my former profession to
                turn my love of coding into a full-time career. Although my previous experience is not as a developer, I have a documented track-record of success, and bring
                a skill-set that will benefit any professional team environment.
            </SectionTextFull>
            <SectionTextFull>
                My primary languages are C#, JavaScript, and TypeScript, in addition to various frameworks such as React / React Native, NodeJS runtime, and Unity.
            </SectionTextFull>
            <SectionTextFull>
                I mainly work with the MERN stack, but if your project requires something else, I love to learn new languages and technologies,
                and can get up to speed quickly. I'm proficient at pixel-perfect frontend development, love to create my own components, and know how to write efficient code.
                Additionally, I can also implement the backend requirements such as REST APIs or databases.
            </SectionTextFull>
            <SectionTextFull>
                I'm currently freelancing, but would really like to collaborate in a professional environment as an entry level developer or intern.
                If you think I might make a good fit for your next project or would like to learn more about me please feel free to <span type="button" id="contacts__link"> reach out </span>
                or check out my <span type="button" id="skills__link">skills</span> and <span type="button" id="projects__link">projects</span> sections below...
            </SectionTextFull>
            <SectionTextFull>

            </SectionTextFull>
        </Section >
    )
}

export default About



