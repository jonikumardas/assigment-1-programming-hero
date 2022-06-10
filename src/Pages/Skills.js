import React from 'react';
import img1 from '../Assets/html-css-js.png'
import img2 from '../Assets/frem.png'
import img3 from '../Assets/mrn.jpeg'
import back from '../Assets/backg.jpg'


const Skills = () => {
    return (
        <div style={{
            backgroundImage: `url(${back})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            color: "white"
        }} className='continer-fluid'>
            <h1 class='text-center p-3'>My skills </h1>
            <div className="row justify-content-evenly p-3">

                <div className="col-md-3 p-2 mx-3">
                    <h2 className='my-3'>Basic Languge</h2>
                    <img className='img-fluid' src={img1} alt="" />
                    <div className='border p-3 rounded'>
                        <h4>Html  </h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%", backgroundColor: "#E74C3C" }}> 75%</div>
                        </div>
                        <h4>Css  </h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}> 85%</div>
                        </div>

                        <h4>Javascript </h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}> 80%</div>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 p-2 mx-3 ">
                    <h2 className='my-3'>Framwork</h2>
                    <img className='img-fluid' src={img2} alt="" />
                    <div className='border p-3 rounded'>
                        <h4>Bootstrap  </h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%", backgroundColor: '#8E44AD' }}> 90%</div>
                        </div>
                        <h4>Tailwind css </h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%", backgroundColor: '#3498DB' }}> 85%</div>
                        </div>

                        <h4>Daisy Ui</h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%", backgroundColor: '#860EF7 ' }}> 90%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 p-2 mx-3">
                    <h2 className='my-3'> MERM Stack</h2>
                    <img className='img-fluid' src={img3} alt="" />
                    <div className='border p-3 rounded'>
                        <h4>MongoDB </h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%", backgroundColor: '#04CE3B ' }}> 55%</div>
                        </div>
                        <h4> Express js</h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%", backgroundColor: '#FA8204 ' }}> 65%</div>
                        </div>

                        <h4>React</h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%", backgroundColor: '#20347B' }}> 70%</div>
                        </div>
                        <h4>Node js</h4>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%", backgroundColor: '#5BAC03' }}> 60%</div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Skills;