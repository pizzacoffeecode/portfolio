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
        id: 0,
    },
    {
        title: 'Graph CMS Blog',
        description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
        image: 'blog.webp',
        tags: [ 'Next Js', 'Graph CMS', 'GraphQL' ],
        source: 'https://graphcms-blog-blush.vercel.app',
        visit: 'https://github.com/Fireal1983/graphcms_blog',
        id: 1,
    },
    {
        title: 'WebRTC App',
        description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
        image: '/images/3.jpg',
        tags: [ 'React', 'WebRTC' ],
        source: 'https://google.com',
        visit: 'https://google.com',
        id: 2,
    },
    {
        title: 'Unichat',
        description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
        image: '/images/4.jpg',
        tags: [ 'React', 'ChatEngine', 'Firebase' ],
        source: 'https://google.com',
        visit: 'https://google.com',
        id: 3,
    },
];