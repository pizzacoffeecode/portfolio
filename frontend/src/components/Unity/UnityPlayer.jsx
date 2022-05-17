import React from "react";
import { Link } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import { SectionText } from '../../components/Section/Section'
import { BlogCardFG, TitleContent, HeaderThree, Hr, UtilityList, ExternalLinks, GridContainer } from '../Projects/ProjectsStyles';
import { UnityBlogCardBG } from './UnityPlayerStyles';
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
        <GridContainer id="unity_app" style={ { marginTop: "60px", height: "100vh", alignContent: "start" } }>
            <UnityBlogCardBG>
                <BlogCardFG styles={ { alignItems: "center" } }>
                    <div className="unity__container">

                        <Unity unityContext={ unityContext } className={ "gameCanvas" } />
                    </div>
                    <TitleContent>
                        <HeaderThree title>{ "Observer Pattern" }</HeaderThree>
                        <Hr />
                        <SectionText style={ { marginLeft: "2.5rem" } }>*iOS not currently supported</SectionText>
                    </TitleContent>
                    <UtilityList style={ { justifyContent: "center", marginBottom: "3rem" } }>
                        <Link to="/"><ExternalLinks style={ { margin: "0 0.8rem" } }>Back</ExternalLinks></Link>
                        <a href="https://github.com" target="_blank"><ExternalLinks style={ { margin: "0 0.8rem" } }>Code</ExternalLinks></a>
                    </UtilityList>
                </BlogCardFG>
            </UnityBlogCardBG>
        </GridContainer>
    );
}