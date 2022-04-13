import React, { useEffect, useContext, useState, useCallback } from 'react';
import { Link } from "react-router-dom";

import { viewportContext } from '../Resize/Resize'
import { mediaQueries } from '../../services/data';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

import HamburgerSpin from '../Hamburger/HamburgerSpin';

import './Navbar.css';

const Navbar = () => {
    const { width } = useContext(viewportContext);
    const { laptop } = mediaQueries;

    const [ isOpen, setOpen ] = useState(false)
    const [ isSticky, setSticky ] = useState(false)

    // //? Close Initial Full Page Hero
    useEffect(() => {
        window.addEventListener("scroll", function () {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY >= 0);
            // this.window.scrollY > 0 ? setSticky(true) : setSticky(false);
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





    useEffect(() => {
        const navigation = document.querySelector('nav')
        document.querySelector('.toggle').onclick = function () {
            this.classList.toggle('active');
            navigation.classList.toggle('active');
            // setOpen(!isOpen);
        }

        if (width > laptop && onmouseup) {
            this.classList.toggle('active');
            navigation.classList.toggle('active');
            // setOpen(!isOpen);
        }
    }, []);

    return (
        <header>

            <div className='banner'></div>
            <div className="banner__overlay" />
            <Link to="#" className="logo">

                <span className='title__bg'>
                    <span style={ { color: 'gray' } }>david</span>
                    <span className="bush">bushen.</span>
                </span>
                <span className="bushen__bg">bushen.</span>
            </Link>
            <div className="toggle">
                {
                    width < laptop && isSticky &&
                    <HamburgerSpin toggled={ isOpen } toggle={ setOpen } />
                }
            </div>
            <nav>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/compscience">C-Science</Link></li>
                    <li><Link to="/frontend">Frontend</Link></li>
                    <li><Link to="/backend">Backend</Link></li>
                </ul>
            </nav>

        </header >

    )
}

export default Navbar