import { Section, SectionTextFull, SectionTitle, SectionDivider } from '../Section/Section';

const About = () => {
    return (
        <Section nopadding id='section2'>
            <SectionDivider />
            <SectionTitle >
                About Me
            </SectionTitle>
            <SectionTextFull>
                I'm self taught, extremely motivated aspiring developer, who gave up my lucrative former profession to pursue my true love. Code.
                <br />
                ...oh, and I really like pizza, coffee, and coding into the early hours of the morning.
            </SectionTextFull>
            <SectionTextFull>
                My primary languages are C# and javascript in addition to various frameworks for mobile, web, and game development.
                I'm at the stage now where I understand the full architecture of an application and can research the required stack to deliver the frontend,
                backend, and database.
            </SectionTextFull>
            <SectionTextFull>
                I'm currently freelancing, but would really like to collaborate in a professional environment as a junior developer.
                If you think I might make a good fit for your next project or would like to learn more about me please feel free to <a href="https://google.com">reach out</a> or check out my <a href="https://google.com">projects</a> section below...
            </SectionTextFull>
        </Section >
    )
}

export default About



