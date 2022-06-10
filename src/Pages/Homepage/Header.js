import React from 'react';
import img from '../../Assets/jonikum.png'
import Resume from '../Resume';

const Header = () => {
    return (
        <div style={{ background: '#050A30', color: "white" }} className='container-fluid'>
            <div className='row py-5 justify-content-between'>
                <div className='col-md-6 p-5'>
                    <h2> HI </h2>
                    <h1>This is Joni kumar das  </h1>
                    <h4>Full Stack Junior Web Application  <span className='text-info'>Develope<span className='text-danger'>er</span></span></h4>
                    <Resume></Resume>
                </div>

                <div className='col-md-5'>
                    <img className='img-fluid' src={img} alt="" />

                </div>
            </div>

        </div>




    );
};

export default Header;