import React from 'react';

import { Layout } from '../layout'

const Home = () => (
<Layout>
    <div class="md:flex-shrink-0">
    <h4>a neighborly company</h4> 
        <img className="w-32 h-32 md:w-48 md:h-auto justify justify-center" src="https://www.vhv.rs/dpng/d/561-5616834_carl-baker-zanesville-plumber-pipe-wrench-plumbing-logo.png" alt="" width="384" height="512" />
        
    </div>      
    <h1 className='text-2xl'>Down the Drain Plumbing</h1>
    <h1>Your Plumbing and Drain Cleaning Professionals</h1>

</Layout>
);

export default Home;