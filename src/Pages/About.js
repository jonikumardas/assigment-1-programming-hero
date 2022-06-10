import React from 'react';
import img1 from '../Assets/bg.jpg'
import img from '../Assets/about.png'

const About = () => {
    return (
        <div className='pt-5' style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            color: 'white'
        }}>

            <h1 className='text-center'>
                About Me
            </h1>
            <div className='row containerjustify-content-evenly mt-3 p-4'>
                <div className='col-md-4'>
                    <img className=' border rounded-2 p-2' src={img} alt="" />
                </div>

                <div className='col-md-6'>
                    <h3>Full Stack Web <span className='text-info'>Develope<span className='text-danger'>er</span></span></h3>
                    <p>
                        I am the master of HTML, CSS and Javascript && I am familer with React, Express, mongoDB,Node js, Typescript, React Native I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;