import React, { useEffect, useContext, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';


import { viewportContext } from '../Resize/Resize'
import { mediaQueries } from '../../services/data';

import HamburgerSpin from '../Hamburger/HamburgerSpin';

import mouseicon from '../../assets/mouse.png';

import './Navbar.css';
import { SocialContainer, SocialIcons } from './NavbarStyles';


//? GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const { width } = useContext(viewportContext);
    const { laptop } = mediaQueries;

    const [ isOpen, setOpen ] = useState(false);
    const [ isSticky, setSticky ] = useState(false);
    const [ mouseIconClicked, setMouseIconClicked ] = useState(false);

    // //? Close Initial Full Page Hero
    useEffect(() => {
        window.addEventListener("scroll", function () {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY >= 0);
            // this.window.scrollY > 0 ? setSticky(true) : setSticky(false);
            // header.classList.toggle('sticky', window.onclick);
            setSticky(true);
        });
    }, []);


    //? Keep Scroll at position
    const [ scrolled, setScrolled ] = useState(false)
    const handleScroll = useCallback((event) => {

        if (window.scrollY > 0) {
            window.scroll({
                top: 1,
                left: 0,
                behavior: 'auto'
            });
            console.log(event);
            document.getElementById("mouse_icon_id").style.display = "none";
            setTimeout(() => { setScrolled(true) }, 500);
        }
    }, [ setScrolled ])

    useEffect(() => {
        if (!scrolled) {
            window.addEventListener("scroll", handleScroll);
        } else {
            window.removeEventListener("scroll", handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [ scrolled, handleScroll ])


    //? Hamburger clicked or Window resized
    useEffect(() => {
        const navigation = document.querySelector('nav')
        // Hamburger clicked
        document.querySelector('.toggle').onclick = function () {
            this.classList.toggle('active');
            navigation.classList.toggle('active');
        }
        // Window resized
        if (width > laptop && onmouseup) {
            this.classList.toggle('active');
            // navigation.classList.toggle('active');
        }
    }, [ width, laptop ]);


    //? Landing : Mouse Icon clicked
    useEffect(() => {
        if (mouseIconClicked) {
            document.querySelector('header').classList.toggle('sticky');
            document.getElementById("mouse_icon_id").style.display = "none";
            setScrolled(true);
            setSticky(true);
        }
    }, [ mouseIconClicked ]);

    //? Collapse modal on link press
    useEffect(() => {
        const navigation = document.querySelector('nav');
        document.querySelector('.nav__navlink').onclick = function () {
            this.classList.toggle('active');
            navigation.classList.toggle('active');
            setOpen(false);
        }
    }, []);

    //GSAP
    useEffect(() => {
        document.querySelectorAll("nav ul li div").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                gsap.to(window, { duration: 1, scrollTo: { y: "#section" + (index + 1), offsetY: 90 } });
            });
        });
    }, [])

    return (
        <header>
            <div className='banner'>
                <div className={ 'mouse_icon__container' } id={ "mouse_icon_id" }>
                    <button className='mouse_icon__button' type="button" onClick={ () => {
                        setMouseIconClicked(true);
                    } }>
                        <img className="mouse_icon" src={ mouseicon } alt="mouse icon" />
                    </button>
                </div>
            </div>
            <div className="banner__overlay" />
            <Link to="/" className="logo" onClick={ () => window.scrollTo(0, 0) }>
                <span className='title__bg'>
                    <span style={ { color: 'gray' } }>DAVID</span>
                    <span className="bush">Roberts.</span>
                </span>
                <span className="bushen__bg">ROBERTS.</span>
            </Link>
            <div className="toggle">
                {
                    width < laptop && isSticky &&
                    <HamburgerSpin toggled={ isOpen } toggle={ setOpen } />
                }
            </div>
            <nav className="nav">
                <ul className="nav__navlink">
                    {/* <li><div className="nav__navlink" >Home</div></li> */ }
                    <li><Link className="nav__navlink" to="/" onClick={ () => window.scrollTo(0, 0) }>Home</Link></li>
                    <li><div className="nav__navlink">About</div></li>
                    <li><div className="nav__navlink"  >Skills</div></li>
                    <li><div className="nav__navlink" >Projects</div></li>

                    <li><div className="nav__navlink" >Contact</div></li>

                </ul>
                <div className="nav__social">
                    <SocialContainer>
                        <SocialIcons href="https://github.com/Fireal1983">
                            <AiFillGithub size="2rem" />
                        </SocialIcons>
                        <SocialIcons href="https://www.linkedin.com/in/david-roberts-720a95240">
                            <AiFillLinkedin size="2rem" />
                        </SocialIcons>
                        <SocialIcons href="https://discord.gg/VNA7z9Fd3b">
                            <FaDiscord size="2rem" />
                        </SocialIcons>
                    </SocialContainer>
                </div >
            </nav >

        </header >

    )
}

export default Navbar