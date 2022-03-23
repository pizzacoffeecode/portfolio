import 'dotenv/config'
import LogRocket from 'logrocket';
LogRocket.init('az3p9v/portfolio');
LogRocket.identify(process.env.USERID, {
    name: 'backend',
    email: 'backend@outlook.com',

    // Add your own custom user variables here, ie:
    subscriptionType: 'free'
});


import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to my portfolio homepage');
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${ PORT }`);
})

