import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../Section/Section';

// Stored data obj pulled from here, and mapped below...
import { projects } from '../../services/data';

// p is just projects like p => p.stuff  ...i is the index | t is the tags array which is a property of the data obj

console.log(process.env.PUBLIC_URL);



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      { projects.map((p, i) => {
        return (
          <BlogCard key={ i }>
            <img src={ `${ process.env.PUBLIC_URL }/images/${ p.image }` } style={ { width: '400px', objectFit: "contain" } } />
            <TitleContent>
              <HeaderThree title>{ p.title }</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{ p.description }</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                { p.tags.map((t, i) => {
                  return <Tag key={ i }>{ t }</Tag>;
                }) }
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={ p.visit }>Code</ExternalLinks>
              <ExternalLinks href={ p.source }>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      }) }
    </GridContainer>
  </Section>
);

export default Projects;