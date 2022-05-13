import React from "react";
import { Link } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import { Section, SectionText, SectionTitle } from "../Section/Section";
import { BlogCardBG, BlogCardFG, TitleContent, HeaderThree, Hr, UtilityList, ExternalLinks, GridContainer } from '../Projects/ProjectsStyles';
// import { UtilityList, ExternalLinks, HeaderThree } from './UnityPlayerStyles';
import './unityPlayer.css';

const unityContext = new UnityContext({
    loaderUrl: "Build/Observer.loader.js",
    dataUrl: "Build/Observer.data",
    frameworkUrl: "Build/Observer.framework.js",
    codeUrl: "Build/Observer.wasm",
});

export function UnityPlayer() {

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Mobile device style: fill the whole browser client area with the game canvas:
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[ 0 ].appendChild(meta);
    }

    return (
        <Section id="unity_app" style={ { marginBottom: "10rem" } }>
            {/* <SectionDivider divider /> */ }
            {/* <SectionTitle main>Projects</SectionTitle> */ }
            <GridContainer>
                <BlogCardBG style={ { minHeight: "500px" } }>
                    <BlogCardFG styles={ { justifyContent: "center", alignItems: "center" } }>
                        <div className="unity__container">

                            <Unity unityContext={ unityContext } className={ "gameCanvas" } />
                        </div>
                        <TitleContent>
                            <HeaderThree title>{ "Observer Pattern" }</HeaderThree>
                            <Hr />
                            {/* <SectionText>i really want to talk about stuff</SectionText> */ }
                        </TitleContent>
                        <UtilityList style={ { justifyContent: "center", marginBottom: "3rem" } }>
                            <Link to="/"><ExternalLinks style={ { margin: "0 0.8rem" } }>Back</ExternalLinks></Link>
                            <a href="https://github.com" target="_blank"><ExternalLinks style={ { margin: "0 0.8rem" } }>Code</ExternalLinks></a>
                        </UtilityList>
                    </BlogCardFG>
                </BlogCardBG>
            </GridContainer>
        </Section >
    );
}