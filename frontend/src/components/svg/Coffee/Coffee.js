import { useContext, useEffect } from "react";
import { viewportContext } from '../../Resize/Resize';
function Coffee() {

    const { width } = useContext(viewportContext);


    useEffect(() => {
        const coffeeSVG = document.getElementById('coffeeSvg');
        const coffeeContainer = document.getElementById('coffeeContainer');
        // console.log(width);
        if (width < 768) {
            coffeeSVG.setAttribute('viewBox', '0 0 100 100');
            coffeeSVG.style.width = '50vw';
            coffeeContainer.style.marginLeft = "33vw";
            coffeeSVG.style.height = '200px';
        }
        else {
            coffeeSVG.setAttribute('viewBox', '0 0 210 210');
            coffeeSVG.style.height = '400px';
            coffeeSVG.style.marginLeft = '11vw';
        }
        // console.log(coffeeSVG.getAttribute('viewBox'));
    }, [ width ]);



    return (
        <div id="coffeeContainer" style={ { position: 'relative', zIndex: '1' } }>
            <svg xmlns="http://www.w3.org/2000/svg" id='coffeeSvg'>
                <defs>
                    <style>

                    </style>
                    <linearGradient
                        id="linearGradient992"
                        x1="379.07"
                        x2="246.03"
                        y1="107.11"
                        y2="319.62"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#00c2ff"></stop>
                        <stop offset="1" stopColor="#fa00ff"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="none"
                    stroke="url(#linearGradient992)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M254.71 128.54l-1.488 6.928-4.396 3.307-1.153 5.055c12.078 16.121 99.25 25.151 124.86 1.882l-.625-5.467-4.396-4.41-2.016-7.9c-1.831 21.421-99.794 23.769-110.78.605zm-7.09 15.07l1.243 13.48c30.887 26.414 115.21 17.044 122.58-1.156l.826-11.956c-33.458 20.097-74.123 15.247-124.65-.369zm3.39 15.74l21.569 142.78c18.459 20.34 62.925 16.861 78.024-.735l17.63-141.68c-35.02 9.982-73.537 16.684-117.22-.367zm11.71-29.15l6.74 4.674c.58.401-.198 1.095-.434 1.273l-.404.304c-.563.424-1.417.503-2 .108l-6.968-4.706c-.584-.394.034-.971.564-1.435l.274-.24c.53-.463 1.649-.38 2.228.022zm15.79-8.88l-7.33 12.938m7.69-12.758l32.32 18.74m46.799-11.574a46.338 11.575 0 01-46.338 11.575 46.338 11.575 0 01-46.338-11.575 46.338 11.575 0 0146.338-11.575 46.338 11.575 0 0146.338 11.575zm7.694.184c0 8.93-24.846 16.168-55.496 16.168s-55.496-7.239-55.496-16.168c0-8.93 24.847-16.168 55.496-16.168s55.496 7.239 55.496 16.168z"
                    transform="translate(-246.62 -111.68)"
                ></path>
            </svg>
        </div>
    );
}

export default Coffee;