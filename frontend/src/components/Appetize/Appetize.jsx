import React from 'react'
import { Link } from 'react-router-dom';
import { Section } from '../Section/Section';
import { BlogCardBG, BlogCardFG, TitleContent, HeaderThree, Hr, UtilityList, ExternalLinks, GridContainer } from '../Projects/ProjectsStyles';
import './Appetize.css';

const Appetize = ({ iframe, title }) => {
    return (
        <Section id="uber_app" style={ { marginBottom: "10rem" } }>
            {/* <SectionDivider divider /> */ }
            {/* <SectionTitle main>Projects</SectionTitle> */ }
            <GridContainer >
                <BlogCardBG style={ { minHeight: "610px", width: "350px" } }>
                    <BlogCardFG >
                        <div className="appetize__container" >
                            <iframe title="appetizeFrame" className="appetize__frame"
                                src={ iframe }
                                width="auto" height="625px" frameborder="0" scrolling="no">
                            </iframe>
                        </div>
                        <TitleContent>
                            <HeaderThree title>{ title }</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <UtilityList style={ { justifyContent: "center" } }>
                            <Link to="/"><ExternalLinks style={ { margin: "0 0.8rem" } }>Back</ExternalLinks></Link>
                            <a href="https://github.com" target="_blank" rel="noreferrer"><ExternalLinks style={ { margin: "0 0.8rem" } }>Code</ExternalLinks></a>
                        </UtilityList>
                    </BlogCardFG>
                </BlogCardBG>
            </GridContainer>
        </Section >
    )
}

export default Appetize


