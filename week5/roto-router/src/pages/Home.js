import React from 'react';

import { Layout } from '../layout'

const Home = () => (
<Layout>
    <div class="md:flex-shrink-0">
    <h4>a neighborly company</h4> 
        <img class="h-48 w-full object cover md:w-48" src="https://www.vhv.rs/dpng/d/561-5616834_carl-baker-zanesville-plumber-pipe-wrench-plumbing-logo.png" alt="Plumber weilding wrench" />
        
    </div>      
    <h1 className='text-2xl'>Down the Drain Plumbing</h1>
    <h1>Your Plumbing and Drain Cleaning Professionals</h1>

</Layout>
);

export default Home;