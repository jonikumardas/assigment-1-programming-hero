import React from 'react';
import img1 from '../Assets/fullstack.jpg';
import img from '../Assets/reactjs.png';
import img2 from '../Assets/html-css-js.png';
import { a } from 'react-router-dom';

const Services = () => {
    return (
        <div style={{ background: "#192a56", color: '#ffffff' }}>
            <h1 className='mx-5'> services</h1>
            <h4 className='mx-5'>My projects </h4>
            <div className="row justify-content-evenly mx-2">
                <div className="col-md-3 py-3">
                    <img className='img-fluid' src={img2} alt="" />
                    <h4>Pline hrml && css and javascript </h4>
                    <p>
                        I have provided best frontend services such as html css and java script service.Heare adding me html css projects
                    </p>
                    <button type="button" className="ms-1 btn btn-outline-info"> <a href='https://jonikumardas.github.io/assignment-1/' className='text-decoration-none'> project1</a></button>
                    <button type="button" className="ms-1 btn btn-outline-info"><a href=' https://jonikumardas.github.io/assigment-2/' className='text-decoration-none'>project2</a></button>
                    <button type="button" className="ms-1 btn btn-outline-info"><a href=' https://convention-center-jonikumardas.vercel.app/' className='text-decoration-none'>project3</a></button>

                </div>
                <div className="col-md-3 py-3">
                    <img className='img-fluid' src={img} alt="" />
                    <h4>React</h4>
                    <p>
                        I am a react web application developer and Iam providing best quality services some react project add here.
                    </p>
                    <button type="button" className="ms-1 btn btn-outline-info"> <a href='https://brave-kepler-75f92b.netlify.app/' className='text-decoration-none'> project1</a></button>
                    <button type="button" className="ms-1 btn btn-outline-info"><a href='https://tourmaline-treacle-e16e43.netlify.app/' className='text-decoration-none'>project2</a></button>
                    <button type="button" className="ms-1 btn btn-outline-info"><a href=' https://poetic-biscotti-fdd5a4.netlify.app/' className='text-decoration-none'>project3</a></button>


                </div>
                <div className="col-md-3 py-3">
                    <img className='img-fluid' src={img1} alt="" />
                    <h4>Full stack </h4>
                    <p>Iam a fullstack web application developer I have make some interactive website which is looking good some project add here.</p>
                    <button type="button" className="ms-1 btn btn-outline-info"> <a href=' https://independent-jonikumardas.web.app/' className='text-decoration-none'> project1</a></button>
                    <button type="button" className="ms-1 btn btn-outline-info"><a href='https://jhon-car-inventory.web.app/' className='text-decoration-none'>project2</a></button>
                    <button type="button" className="ms-1 btn btn-outline-info"><a href='https://manufacturer-website-4b4d2.web.app/' className='text-decoration-none'>project3</a></button>

                </div>
            </div>

        </div>
    );
};

export default Services;