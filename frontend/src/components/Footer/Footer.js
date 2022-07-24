import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIcons, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432" style={ { textDecoration: "none", letterSpacing: "3px" } }>+1 267-428-9187</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:davidroberts.developer@gmail.com">
            davidroberts.developer@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Innovating one project at a time</Slogan> */ }
          <Slogan>Website Created in React JS by me</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/pizzacoffeecode">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/david-roberts-720a95240">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.gg/VNA7z9Fd3b">
            <FaDiscord size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;