import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Section, SectionText, SectionTitle } from "../Section/Section";
import { UtilityList, ExternalLinks, HeaderThree } from './UnityPlayerStyles';
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
        <Section>
            <SectionTitle>Design Patterns</SectionTitle>
            <HeaderThree> Observer Pattern</HeaderThree>
            <SectionText>i really want to talk about stuff</SectionText>
            <Unity unityContext={ unityContext } className={ "gameCanvas" } />

            <UtilityList>
                <ExternalLinks href={ "https://google.com" }>Code</ExternalLinks>
            </UtilityList>
        </Section>
    );
}