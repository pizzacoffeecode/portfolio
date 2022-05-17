// import abacademy from '../assets/portfolio/abacademy.jpg'


//? Media Queries
export const mediaQueries = {
    mobile: 640,
    ipad: 768,
    laptop: 1024,
    desktop: 1280,
};

export const projects = [
    {
        title: 'AB Academy',
        description: "A website for a local soccer coach, including a scheduling api and contact form. The clients website required many videos, so reducing load times down was critical. Good NextJs practices along with a serious amount of video and image optimization got the website a 100% perfomance score on lighthouse.",
        image: 'ab.webp',
        tags: [ 'React', 'Node.js', 'NextJS' ],
        source: 'https://ab-academy.vercel.app',
        visit: 'https://github.com/Fireal1983/ab-academy',
        newWindow: true,
        id: 0,
    },
    {
        title: 'Graph CMS Blog',
        description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
        image: 'blog.webp',
        tags: [ 'Next Js', 'Graph CMS', 'GraphQL' ],
        source: 'https://graphcms-blog-blush.vercel.app',
        visit: 'https://github.com/Fireal1983/graphcms_blog',
        newWindow: true,
        id: 1,
    },
    {
        title: 'Uber Clone',
        description: "A challenge to see if I could implement some the core functionality of the Uber app in a react native project with Redux handling the state. The project is a WIP featuring google location services, triangulation, routing, and cost calculation. The next step will be to add location on press and start the uber eats section",
        image: 'uber.webp',
        tags: [ 'React Native', 'Redux', 'Google Location' ],
        source: '/uberclone',
        visit: 'https://github.com',
        newWindow: false,
        id: 2,
    },
    {
        title: 'Search & Pathing Algorithms',
        description: "As part of my ongoing study of data structures and algorithms I decided to tackle some of the most popular search and pathing algorithms.  Unity Engine has been used to create a graphical representation of the various algorithms calculate the same path with obstacles and varying tile costs.",
        image: 'astar.webp',
        tags: [ 'Unity', '', 'C#' ],
        source: '/astar',
        visit: 'https://github.com',
        newWindow: false,
        id: 3,
    },
];